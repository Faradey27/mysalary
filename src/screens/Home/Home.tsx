import { defineMessages, useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

import SalaryCalculator from '../../components/SalaryCalculator';
import Widget from '../../components/Widget';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  salaryWidget: {
    '@media (min-width: 512px)': {
      margin: 24,
    },
  },
});

const messages = defineMessages({
  pageTitle: {
    id: 'home.pageTitle',
    defaultMessage: 'Net salary calculator',
  },
});

const Home = () => {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <main className={classes.container}>
      <Head>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
      </Head>
      <Widget className={classes.salaryWidget}>
        <SalaryCalculator />
      </Widget>
    </main>
  );
};

export default Home;
