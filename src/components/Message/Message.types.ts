import { Timestamp } from 'firebase/firestore';

export type MessageType = {
  uid: string;
  name: string;
  text: string;
  createdAt: Timestamp;
  id: string;
};

export interface MessageProps {
  message: MessageType;
}
