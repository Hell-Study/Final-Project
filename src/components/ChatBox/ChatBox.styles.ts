import styled from 'styled-components';
import Modal from 'react-modal';
import { ReactComponent as ChevronDown } from 'assets/images/Chevron-Down.svg';
import { ReactComponent as MessageDots } from 'assets/images/MessageDots.svg';

export const MessageDotsSVG = styled(MessageDots)`
  fill: ${({ theme }) => theme.colors.blue};
`;

export const StyledModal = styled(Modal)`
  position: fixed;
  left: auto;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 320px;
  max-height: calc(100vh - 16px);
  transition: none;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg_element5};
  color: ${({ theme }) => theme.colors.text1};
  font-size: 0.78rem;
  pointer-events: auto;
  box-shadow: ${({ theme }) => theme.colors.alpha1} 0px 5px 20px 0px;

  &:focus {
    outline: none;
  }
`;

export const ChatBoxHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg_element5};
  color: ${({ theme }) => theme.colors.heading1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
`;

export const ChevronDownSVG = styled(ChevronDown)`
  margin: auto;
  height: 0.75rem;
  width: 0.75rem;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  cursor: pointer;
  & > span:last-child {
    color: ${({ theme }) => theme.colors.text2};
    font-size: 0.7rem;
  }
`;

export const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.heading1};
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 0.2rem 0.95rem;
  border: none;
  font-size: 0.73rem;
  gap: 0.23rem;
  background-color: ${({ theme }) => theme.colors.bg_element2};
  color: ${({ theme }) => theme.colors.text2};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_element1};
  }
`;
export const Icon = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const MessagesWrapper = styled.div`
  padding: 0 1rem 0.5rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  min-height: 6rem;
  max-height: 24rem;
  overscroll-behavior: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface ScrollToBottomButtonProps {
  $isVisible: boolean;
}

export const ScrollToBottomButton = styled.div<ScrollToBottomButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  right: 8px;
  bottom: 88px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary1};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: scale(${({ $isVisible }) => ($isVisible ? 1 : 0)});
  transition: all 0.2s ease;
`;

export const BottomIcon = styled(ChevronDown)`
  margin: auto;
  height: 1.25rem;
  width: 1.25rem;
  fill: ${({ theme }) => theme.colors.white};
`;
