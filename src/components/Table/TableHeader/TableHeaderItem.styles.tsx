import styled from 'styled-components';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

export const TableHeaderItemContainer = styled.button<{ $value?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $value }) => $value !== '코인' && 'flex-end'};
  gap: 0.0625rem;

  color: ${({ theme }) => theme.colors.heading2};
  font-family: DM Sans;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0075rem;

  background-color: inherit;
  border: 0;

  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.text1};
  }
`;

export const SortIconWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const SortUpIcon = styled(FaSortUp)`
  color: ${({ theme }) => theme.colors.heading2};
  &.active {
    color: ${({ theme }) => theme.colors.text1};
  }
`;

export const SortDownIcon = styled(FaSortDown)`
  color: ${({ theme }) => theme.colors.heading2};
  &.active {
    color: ${({ theme }) => theme.colors.text1};
  }
`;