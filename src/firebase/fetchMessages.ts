import { onSnapshot } from 'firebase/firestore';
import { MessageType } from 'components/Message/Message.types';
import { messageQuery } from './messageQuery';
import { orderSnapshotMessages } from './orderSnapshotMessages';

// 메시지를 가져오는 함수
export const fetchMessages = (
  setMessages: (messages: MessageType[]) => void,
  lastMessage?: MessageType | null,
) => {
  const q = messageQuery(lastMessage);

  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    const sortedMessages = orderSnapshotMessages(QuerySnapshot);
    setMessages(sortedMessages);
  });

  return unsubscribe;
};
