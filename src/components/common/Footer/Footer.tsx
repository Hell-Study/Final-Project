import * as styled from './Footer.styles';
import { useTheme } from 'hooks';
import LogoDark from 'assets/images/Logo-Dark.svg';
import LogoLight from 'assets/images/Logo-Light.svg';
import { memo } from 'react';

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <styled.FooterContainer>
      <styled.Warning>
        김프로(kimpro.site)는 사이트 내 모든 암호화폐 가격 및 투자 관련 정보에
        대하여 어떠한 책임을 부담하지 않습니다. 디지털 자산 투자는 전적으로
        스스로의 책임이므로 이에 유의하시기 바랍니다.
      </styled.Warning>
      <styled.ContributorsWrapper>
        <styled.Logo to="/">
          <img
            src={isDarkMode ? LogoDark : LogoLight}
            alt="logo"
            loading="lazy"
          />
        </styled.Logo>
        <styled.MadeBy>MADE BY</styled.MadeBy>
        <styled.Contributors>
          <styled.Contributor>
            <a
              href="https://github.com/seungjun222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <styled.GithubButton>
                <styled.GithubSVG />
              </styled.GithubButton>
            </a>
            <styled.Name>어승준</styled.Name>
          </styled.Contributor>
          <styled.Contributor>
            <a
              href="https://github.com/jseo9732"
              target="_blank"
              rel="noopener noreferrer"
            >
              <styled.GithubButton>
                <styled.GithubSVG />
              </styled.GithubButton>
            </a>
            <styled.Name>서지수</styled.Name>
          </styled.Contributor>
          <styled.Contributor>
            <a
              href="https://github.com/im-na0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <styled.GithubButton>
                <styled.GithubSVG />
              </styled.GithubButton>
            </a>
            <styled.Name>박나영</styled.Name>
          </styled.Contributor>
        </styled.Contributors>
      </styled.ContributorsWrapper>
    </styled.FooterContainer>
  );
};

export default memo(Footer);
