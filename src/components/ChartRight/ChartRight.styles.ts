import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg_element4};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.alpha1} 0px 2px 10px 0px;
  padding: 1rem 1.1rem;
  gap: 0.5rem;
`;
