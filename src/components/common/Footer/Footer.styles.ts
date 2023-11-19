import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from 'assets/images/Github.svg';

export const FooterContainer = styled.footer`
  display: grid;
  padding: 0.7rem 0 0.3rem 0;
  grid-template-rows: 1fr 1fr;
  height: 5rem;
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text1};
  background-color: ${({ theme }) => theme.colors.bg_element5};
  box-shadow: ${({ theme }) => theme.colors.alpha2} 0px -5px 10px 0px;
`;

export const Warning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContributorsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  img {
    width: 5rem;
  }
`;

export const Contributors = styled.div`
  display: flex;
  margin-left: -0.5rem;
`;

export const MadeBy = styled.div`
  display: flex;
  align-items: center;
`;

export const Contributor = styled.div`
  display: flex;
`;

export const GithubButton = styled.button`
  width: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.icon};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -0.4rem;
`;

export const GithubSVG = styled(Github)`
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;
