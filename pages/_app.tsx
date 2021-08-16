import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../containers/Layout'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../reduxStore'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A3CB38",
    },
    secondary: {
      main: "#2980b9",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>Garapin Education</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}
export default MyApp
