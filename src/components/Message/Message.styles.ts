import styled from 'styled-components';

export const MessageRight = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const MessageLeft = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const UserInfo = styled.span`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 0.74rem;
`;

export const UserId = styled.span`
  margin-left: 0.3rem;
  background: ${({ theme }) => theme.colors.alpha2};
  border: 1px solid ${({ theme }) => theme.colors.border1};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text2};
  font-size: 0.6rem;
  font-weight: 300;
  padding: 2px 4px;
  white-space: nowrap;
`;

export const UserMessage = styled.div`
  word-break: break-all;
  background-color: ${({ theme }) => theme.colors.bg_element3};
  color: ${({ theme }) => theme.colors.heading1};
  padding: 0.66em 0.68rem;
  border-radius: 10px;
  max-width: 200px;
`;

interface MessageProps {
  $isCurrentUser: boolean;
}

export const ChatBubble = styled.div<MessageProps>`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.$isCurrentUser ? 'flex-end' : 'flex-start'};
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div``;

export const Time = styled.span`
  font-size: 0.68rem;
  margin-bottom: 0.125rem;
  color: ${({ theme }) => theme.colors.text2};
`;

export const TimeRight = styled(Time)`
  margin-right: 0.4rem;
`;

export const TimeLeft = styled(Time)`
  margin-left: 0.4rem;
`;
