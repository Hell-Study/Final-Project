import { ReactComponent as Search } from 'assets/images/Search.svg';
import styled from 'styled-components';

export const TableNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1.625rem 0;
`;

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

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinCount = styled.div`
  color: ${({ theme }) => theme.colors.text1};
  font-family: Uni Neue-Trial;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 1.25rem;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0.5625rem 1rem;

  width: 232px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border1};
  background: ${({ theme }) => theme.colors.bg_element4};
  box-shadow: 0px 0px 40px 0px ${({ theme }) => theme.colors.border1};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const SearchSVG = styled(Search)`
  width: 18px;
  height: 18px;
  margin-right: 0.625rem;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;

  color: ${({ theme }) => theme.colors.text1};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  background-color: inherit;
`;
