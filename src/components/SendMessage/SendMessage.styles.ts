import styled from 'styled-components';
import { ReactComponent as PaperPlane } from 'assets/images/Paper-Plane.svg';

export const PaperPlaneSVG = styled(PaperPlane)`
  fill: ${({ theme }) => theme.colors.blue};
`;

export const SendMessageForm = styled.form`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border1};
`;

export const SendMessageWrapper = styled.div`
  position: relative;
`;

export const SendMessageInput = styled.input`
  padding: 0.75rem 3.5rem 0.75rem 0.75rem;
  border: none;
  outline: none;
  border-radius: 7px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_element3};
  color: ${({ theme }) => theme.colors.text1};
  font-size: 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text3};
  }

  &:focus {
    outline: none;
  }
`;

export const SendMessageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.bg_element5};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border1};
  color: ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
  transition: all 0.1s ease-out 0s;
  position: absolute;
  bottom: 5px;
  right: 5px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary1};
    box-shadow: ${({ theme }) => theme.colors.alpha_primary1} 0px 0px 0px 3px;
  }
`;
