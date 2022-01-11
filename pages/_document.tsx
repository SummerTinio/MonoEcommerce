import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import theme from '../styles/theme';

import { NextPageContext } from 'next';
import { style } from '@mui/system';

interface MyDocumentProps {}

const MyDocument = function MyDocumentComponent<MyDocumentProps>({}) {
  return (
    <>
      <Html lang="en">
        <Head>
          {/** PWA primary color */}
          <meta content={theme.palette.primary.main} name="theme-color" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};

MyDocument.getInitialProps = async (ctx: NextPageContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    // to prevent memory leaks in case custom _document doesn't seal itself
    sheet.seal();
  }
};

export default MyDocument;
