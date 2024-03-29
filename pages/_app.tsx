import React from 'react';
import { IntlProvider } from 'react-intl';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import App from 'next/app';
import Head from 'next/head';

import Header from '../src/components/Header';
import { AppServicesProvider, getAppServices } from '../src/services';
import theme from '../src/theme';

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
          <meta
            name="description"
            content="Mysalary - salary calculator. Net salary after paying taxes. Salary in different countries. Jobs for developers."
          />
          <meta
            name="keywords"
            content="salary,taxes,calculator,tax,net income, gross income"
          />
          <style>{`
            html, body, body > div {
              height: 100%;
              display: flex;
              flex-direction: column;
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
          <IntlProvider locale="en">
            <AppServicesProvider value={services}>
              <Header />
              <Component {...pageProps} />
            </AppServicesProvider>
          </IntlProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
