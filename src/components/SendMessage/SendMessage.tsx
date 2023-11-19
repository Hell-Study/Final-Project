import React, { useState } from 'react';
import { createMessages } from '../../firebase/createMessages';
import * as styled from './SendMessage.styles';
import Swal from 'sweetalert2';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === '') {
      Swal.fire({
        title: '메시지를 입력해주세요.',
        text: '아무것도 입력하지 않으면 메시지를 전송할 수 없습니다.',
        icon: 'error',
      });
    }
    createMessages(message);
    setMessage('');
  };

  return (
    <styled.SendMessageForm onSubmit={(event) => handleSendMessage(event)}>
      <styled.SendMessageWrapper>
        <styled.SendMessageInput
          name="messageInput"
          type="text"
          placeholder="메시지를 입력해주세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <styled.SendMessageButton type="submit">
          <styled.PaperPlaneSVG />
        </styled.SendMessageButton>
      </styled.SendMessageWrapper>
    </styled.SendMessageForm>
  );
};

export default SendMessage;
