import React, { useEffect, useRef, useState } from 'react';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Message } from 'components/Message';
import { MessageType } from 'components/Message/Message';
import { SendMessage } from 'components/SendMessage';
import { useRecoilState } from 'recoil';
import { modalIsOpenState } from 'recoil/atoms/upbit';
import {
  StyledModal,
  overlayStyles,
  ChatBoxHeader,
  MessagesWrapper,
  ScrollToBottomButton,
} from './ChatBox.styles';

// 닉네임 업데이트 함수
const updateNickname = () => {
  const userChosenNickname = prompt('변경할 닉네임을 입력해주세요');
  if (userChosenNickname) {
    try {
      localStorage.setItem('displayName', userChosenNickname);
    } catch (error) {
      console.error('Error updating nickname:', error);
    }
  }
};

const ChatBox = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenState);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [messages, setMessages] = useState<MessageType[]>([]);
  const storedDisplayName = localStorage.getItem('displayName');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const bottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;
    if (!bottom) {
      setIsAtBottom(false);
    }
    if (target.scrollTop === 0) {
      const oldScrollHeight = target.scrollHeight;

      requestAnimationFrame(() => {
        target.scrollTop = target.scrollHeight - oldScrollHeight;
      });
    }
    if (!messagesWrapperRef.current) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } =
      messagesWrapperRef.current;
    const atBottom = scrollHeight - (scrollTop + clientHeight) < 10;
    setIsAtBottom(atBottom);
  };

  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom();
    }
  }, [messages, isAtBottom]);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50),
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: MessageType[] = [];

      QuerySnapshot.forEach((doc) => {
        const data: any = doc.data();

        if (data.createdAt) {
          const message: MessageType = {
            ...data,
            id: doc.id,
          };
          fetchedMessages.push(message);
        } else {
          console.warn('Skipping message without createdAt:', data);
        }
      });

      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt.toMillis() - b.createdAt.toMillis(),
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={overlayStyles}
    >
      <ChatBoxHeader>
        <div>CHAT</div>
        <div onClick={updateNickname} style={{ cursor: 'pointer' }}>
          {storedDisplayName}
        </div>
      </ChatBoxHeader>
      <MessagesWrapper onScroll={handleScroll} ref={messagesWrapperRef}>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </MessagesWrapper>
      {!isAtBottom && (
        <ScrollToBottomButton onClick={scrollToBottom}>🔻</ScrollToBottomButton>
      )}
      <SendMessage />
    </StyledModal>
  );
};

export default ChatBox;
