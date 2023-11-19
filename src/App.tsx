import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import { themeState } from './recoil/atoms/themeAtoms';
import { LoadingAnimation } from 'components/LoadingAnimation';

const Home = React.lazy(() => import('pages/home'));

function App() {
  const currentTheme = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <div className="App">
            <Suspense fallback={<LoadingAnimation></LoadingAnimation>}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
