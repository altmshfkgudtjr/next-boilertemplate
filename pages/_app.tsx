import Head from 'next/head';
import { useState, useEffect } from 'react';
// head
import GoogleTagManager from 'lib/head/GoogleTagManager';
import { QueryProvider, RecoilProvider, ThemeProvider, SnackbarProvider } from 'provider';
import { useUserIdTracking } from 'hook/event/useGoogleTagManager';
// hooks
import useMetaData from 'hook/commons/useMetaData';
import useGoogleTagManager from 'hook/event/useGoogleTagManager';
// lib
import * as cookieUtils from 'util/helpers/cookie';
import GlobalStyles from 'lib/GlobalStyles';
// styles
import 'public/font.css';
// types
import type { CustomAppProps } from 'next/app';

const App = ({ Component, pageProps }: CustomAppProps) => {
  const [themeType, setThemeType] = useState(pageProps.theme);

  const { MetaTitle } = useMetaData();
  useGoogleTagManager();
  useUserIdTracking();

  /** 공통 레이아웃 적용 */
  const getLayout = Component.getLayout || (page => page);

  useEffect(() => {
    const value = cookieUtils.getCookieFromClient('theme');
    setThemeType(v => (v ? v : value));
  }, []);

  return (
    <>
      <GoogleTagManager nonce={pageProps.nonce} />
      {/* ------------------------------ Head ------------------------------ */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes, minimal-ui, viewport-fit=cover, shrink-to-fit=no"
        />
      </Head>
      <MetaTitle content="" />
      {/* ------------------------------ Main ------------------------------ */}
      <QueryProvider>
        <RecoilProvider>
          <ThemeProvider themeType={themeType}>
            <GlobalStyles />

            {getLayout(<Component {...pageProps} />)}

            <SnackbarProvider />
          </ThemeProvider>
        </RecoilProvider>
      </QueryProvider>
    </>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  let pageProps: any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  /* ------------------------------ Theme 설정 ------------------------------ */
  const cookie = ctx?.req?.cookies;
  if (cookie) {
    Object.assign(pageProps, {
      theme: cookieUtils.getCookieFromServer('theme', ctx),
    });
  }

  return { pageProps };
};

export default App;
