import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// head
import DefaultMeta from 'lib/head/DefaultMeta';
import Favicon from 'lib/head/Favicon';
import { GoogleTagManagerNoScript } from 'lib/head/GoogleTagManager';

class MyDocument extends Document {
  /*======= styled-components SSR 적용 =======*/
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  /*=========================================*/

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <DefaultMeta />
          <Favicon />
        </Head>
        <body>
          <GoogleTagManagerNoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
