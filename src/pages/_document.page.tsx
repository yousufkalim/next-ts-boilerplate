import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = function () {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon-256.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
