import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Sun } from 'assets/images/Sun.svg';
import { ReactComponent as Moon } from 'assets/images/Moon.svg';
import { ReactComponent as Github } from 'assets/images/Github.svg';

interface RateProps {
  $isPositive: boolean;
}

export const SunSVG = styled(Sun)`
  width: 1.15rem;
  height: 1.15rem;
  fill: ${({ theme }) => theme.colors.icon};
`;
export const MoonSVG = styled(Moon)`
  width: 1.15rem;
  height: 1.15rem;
  fill: ${({ theme }) => theme.colors.icon};
`;
export const GithubSVG = styled(Github)`
  width: 1.15rem;
  height: 1.15rem;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const Label = styled.span`
  font-weight: 400;
  margin-right: 0.375rem;
  color: ${({ theme }) => theme.colors.text3};
`;

export const Inner = styled.div`
  width: ${({ theme }) => theme.sizes.lg};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.9375rem;

  & > div {
    font-weight: 500;
  }
`;

export const InnerSpaceBetween = styled(Inner)`
  justify-content: space-between;
`;

export const Rate = styled.span<RateProps>`
  font-weight: 500;
  font-size: 0.7rem;
  margin-left: 3px;
  color: ${({ $isPositive, theme }) =>
    $isPositive ? theme.colors.red : theme.colors.blue};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.alpha3};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.colors.alpha2} 0px 5px 10px 0px;
  transition: all 0.15s ease-out 0s;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  display: flex;

  & > img {
    width: 100px;
    height: auto;
  }
`;

export const LogoImg = styled.img`
  width: 8.5rem;
  height: 2.8125rem;
`;

export const BtnGroup = styled.div`
  display: flex;
`;

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.0625rem;
  gap: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text1};
  background-color: ${({ theme }) => theme.colors.bg_element5};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
  transition: all 0.15s ease-out 0s;
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
`;

export const SwitchButton = styled.button<{ $isDarkMode: boolean }>`
  width: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.icon};
  font-size: ${({ $isDarkMode }) => ($isDarkMode ? '1.1rem' : '1.3rem')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
