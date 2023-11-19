import {
  query,
  collection,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from './config';
import { MessageType } from 'components/Message/Message.types';

// Firebase Firestore 쿼리를 생성하는 함수
export function messageQuery(lastMessage?: MessageType | null) {
  const baseQuery = query(
    collection(db, 'messages'),
    orderBy('createdAt', 'desc'),
    limit(5),
  );

  if (lastMessage) {
    // 이전 메시지 이후의 메시지만 가져오기 위해 필터링
    return query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      startAfter(lastMessage.createdAt),
      limit(5),
    );
  }

  return baseQuery;
}
