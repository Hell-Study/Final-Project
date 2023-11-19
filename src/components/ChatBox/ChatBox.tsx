import React, { useEffect, useRef, useState, memo } from 'react';
import { fetchMessages } from '../../firebase/fetchMessages';
import { Message } from 'components/Message';
import { MessageType } from 'components/Message/Message.types';
import { SendMessage } from 'components/SendMessage';
import { useRecoilState } from 'recoil';
import { modalIsOpenState } from 'recoil/atoms/commonAtoms';
import * as styled from './ChatBox.styles';
import { updateNickname, saveUserInfoToLocalStorage } from 'hooks';

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
  const [lastMessage, setLastMessage] = useState<MessageType | null>(null);

  const loadPreviousMessages = () => {
    if (messages.length > 0) {
      const newLastMessage = messages[0]; // 가장 오래된 메시지
      fetchMessages(
        (newMessages) => setMessages([...newMessages, ...messages]),
        newLastMessage,
      );
      setLastMessage(newLastMessage);
    }
  };
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
    const unsubscribe = fetchMessages(setMessages);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const storedUid = localStorage.getItem('uid');
    const storedDisplayName = localStorage.getItem('displayName');
    if (!storedUid || !storedDisplayName) {
      saveUserInfoToLocalStorage();
    }
  }, []);

  const overlayStyles: ReactModal.Styles = {
    overlay: {
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointerEvents: 'none',
    },
  };

  return (
    <styled.StyledModal isOpen={modalIsOpen} style={overlayStyles}>
      <styled.ChatBoxHeader>
        <styled.HeaderWrapper onClick={closeModal}>
          <styled.ChevronDownSVG />
          <styled.Title>Chat</styled.Title>
        </styled.HeaderWrapper>

        <styled.InfoWrapper onClick={updateNickname}>
          <styled.Nickname>{storedDisplayName}</styled.Nickname>
          <span>님</span>
        </styled.InfoWrapper>
      </styled.ChatBoxHeader>
      <styled.MessagesWrapper onScroll={handleScroll} ref={messagesWrapperRef}>
        <styled.ButtonWrapper>
          <styled.Button onClick={loadPreviousMessages}>
            <styled.Icon>
              <styled.MessageDotsSVG />
            </styled.Icon>
            이전 채팅 불러오기
          </styled.Button>
        </styled.ButtonWrapper>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </styled.MessagesWrapper>
      <styled.ScrollToBottomButton
        onClick={scrollToBottom}
        $isVisible={!isAtBottom}
      >
        <styled.BottomIcon />
      </styled.ScrollToBottomButton>
      <SendMessage />
    </styled.StyledModal>
  );
};

export default memo(ChatBox);
