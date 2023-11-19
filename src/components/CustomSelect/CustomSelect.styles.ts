import styled from 'styled-components';
import { ReactComponent as ChevronDown } from 'assets/images/Chevron-Down.svg';
import { ReactComponent as Check } from 'assets/images/Check.svg';

export const SelectBox = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg_element6};
  border: 1px solid ${({ theme }) => theme.colors.border1};
  align-self: center;
  gap: 0.8rem;
  box-shadow: ${({ theme }) => theme.colors.alpha2} 0px 5px 10px 0px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  user-select: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`;

interface SelectOptionsProps {
  $show: boolean;
}

export const SelectOptions = styled.ul<SelectOptionsProps>`
  position: absolute;
  list-style: none;
  top: 35px;
  left: 0;
  overflow: hidden;
  max-height: ${(props) => (props.$show ? 'none' : '0')};
  padding: ${(props) => (props.$show ? '3px' : 0)};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg_element2};
  color: ${({ theme }) => theme.colors.text1};
  box-shadow: ${(props) => (props.$show ? '0 2px 4px #0003' : 'none')};
  border: ${({ theme, $show }) =>
    $show ? `1px solid ${theme.colors.border1}` : 'none'};
  font-size: 0.8rem;
  z-index: 3;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 0.1s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
  gap: 0.4rem;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_element1};
    border-radius: 0.25rem;
  }
`;

export const ChevronDownSVG = styled(ChevronDown)`
  fill: ${({ theme }) => theme.colors.icon};
  margin-left: auto;
  height: 0.75rem;
  width: 0.75rem;
`;

export const CheckSVG = styled(Check)<{ $isChecked: boolean }>`
  fill: ${(props) =>
    props.$isChecked ? props.theme.colors.primary2 : 'transparent'};
  margin-left: auto;
  width: 0.85rem;
  height: 0.85rem;
`;

export const Symbol = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
`;
