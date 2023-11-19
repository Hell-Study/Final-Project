import styled from 'styled-components';
import { ReactComponent as ArrowLeftRight } from 'assets/images/arrow-left-right.svg';

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  color: ${({ theme }) => theme.colors.text1};
  font-family: Uni Neue-Trial;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ArrowLeftRightIcon = styled(ArrowLeftRight)`
  width: 0.875rem;
  height: 0.875rem;
`;
