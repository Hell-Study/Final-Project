import { MessageType } from 'components/Message/Message.types';
import { QuerySnapshot } from 'firebase/firestore';
// Firestore 스냅샷을 처리하고 메시지를 정렬하는 함수
export function orderSnapshotMessages(QuerySnapshot: QuerySnapshot) {
  const fetchedMessages: MessageType[] = [];

  QuerySnapshot.forEach((doc) => {
    const data = doc.data() as MessageType;

    if (data.createdAt) {
      const message = {
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

  return sortedMessages;
}
