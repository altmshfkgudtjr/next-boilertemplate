import { ThemeProvider as SC_ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useRecoilState } from 'store';
// lib
import * as cookieUtils from 'util/helpers/cookie';
// styles
import themePalette from 'style/lib/palette';
// types
import type { PropsWithChildren } from 'react';

/**
 * Theme Component Provider
 *
 * @param props
 * @param props.themeType 테마 타입
 */
const ThemeProvider = ({ themeType, children }: PropsWithChildren<Props>) => {
  const [mode, setMode] = useRecoilState(state => state.themeSystem.themeModeState);
  const [system, setSystem] = useRecoilState(state => state.themeSystem.themeSystemState);
  const theme =
    system === 'Pending'
      ? themeType === 'dark'
        ? themePalette.dark
        : themePalette.light
      : mode === 'Dark'
      ? themePalette.dark
      : themePalette.light;

  /** 시스템 테마 감지 */
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSystem('Dark');
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setSystem('Light');
    }
  }, [setSystem]);

  /** Store에 테마 저장 */
  useEffect(() => {
    if (themeType === 'light') {
      return setMode('Light');
    }

    if (themeType === 'dark') {
      return setMode('Dark');
    }

    if (system === 'Light') {
      return setMode('Light');
    }

    if (system === 'Dark') {
      return setMode('Dark');
    }

    setMode('Default');
  }, [themeType, system, setMode]);

  /** 쿠키에 현재 테마 저장 */
  useEffect(() => {
    cookieUtils.removeCookie('theme');

    if (mode === 'Light') {
      cookieUtils.setCookie('theme', 'light');
    }

    if (mode === 'Dark') {
      cookieUtils.setCookie('theme', 'dark');
    }
  }, [mode]);

  return <SC_ThemeProvider theme={theme}>{children}</SC_ThemeProvider>;
};

type ThemeType = 'light' | 'dark';

interface Props {
  themeType?: ThemeType;
}

export default ThemeProvider;
