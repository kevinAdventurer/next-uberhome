import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <title>LINEで賃貸</title>
          <meta name="description" content="LINEで賃貸 Landing Page." />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            id="wixDesktopViewport"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
