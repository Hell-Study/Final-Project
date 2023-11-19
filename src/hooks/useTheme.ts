import { useCallback, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from 'recoil/atoms/themeAtoms';

export function useTheme() {
  const [theme, setTheme] = useRecoilState(themeState);

  const onChangeTheme = useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  }, [theme]);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
      return;
    }
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    }
  }, []);

  return {
    theme,
    onChangeTheme,
  };
}
