import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { AppServicesProvider, getAppServices } from '../src/services';

const services = getAppServices();

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Salary Calculator</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="description" content="Salary calculator per country" />
          <meta name="keywords" content="salary,taxes,calculator,tax" />
          <style>{`
            html, body, body > div {
              height: 100%;
            }
            body {
              font-family: Helvetica, Roboto, Arial, sans-serif;
              background-color: ${theme.palette.background.default};
              font-size: 16px;
              min-width: 256px;
            }
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin: 0;
            }
          `}</style>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppServicesProvider value={services}>
            <Component {...pageProps} />
          </AppServicesProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
