import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

export const TableBoxWrap = styled.div`
  padding: 0rem 0.625rem 1.375rem 0.625rem;
  background-color: ${({ theme }) => theme.colors.bg_element4};
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.colors.alpha1} 0px 2px 10px 0px;
`;
