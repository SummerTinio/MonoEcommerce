import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../frontend/src/store/store';

import { css } from 'styled-components';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  withUser,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';

import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import theme from '../styles/theme';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  const publicPages = ['/'];
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  const BRAND = '#242424';
  const BRANDLIGHT = '#373737';
  const GREY = '#bfbfbf';
  const GREYLIGHT = '#d4d4d4';
  const GREYDARK = '#e1e1e1';
  const WHITE = '#f5f5f3';
  const RED = '#eb5757';
  const GREEN = '#12d60e';
  const ANCHOR = '#373737';
  const BODY = BRAND;
  const BODYLIGHT = '#787878';
  const BORDER = '#c6c6c6';
  const ERROR = '#bfbfbf';

  const styles = css`
    :root {
      font-size: 5px;
      color: ${BRAND};
      font-family: caslonDoricRegular;
    }

    html,
    main,
    body {
      background-color: black;
    }
  `;

  return (
    <>
      <Head>
        <title>
          ZappConcepts | Learn from the World's Best Choreographers!
        </title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          {/** inside _app.tsx, can only hav 1 component -- if u have 2, you'd hav to render 2 component trees */}
          <ClerkProvider>
            <>
              <SignedIn>
                <Component {...pageProps} />
              </SignedIn>
              <SignedOut>
                <Link href="/products">
                  <a>Please log in</a>
                </Link>
                <RedirectToSignIn />
              </SignedOut>
              {/** 
                 * 
                */}
            </>
          </ClerkProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
