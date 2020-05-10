import { defineMessages, useIntl } from 'react-intl';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';

import Magic from '../../services/CountryService/countries/magic/magic';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    maxWidth: 1024,
    fontSize: 24,
    '@media (min-width: 512px)': {
      fontSize: 48,
    },
  },
}));

const messages = defineMessages({
  title: {
    id: 'about.title',
    defaultMessage:
      'This app helps to understand potential NET income in different countries',
  },
  pageTitle: {
    id: 'about.pageTitle',
    defaultMessage: 'Mysalary - About',
  },
});

const About = () => {
  const intl = useIntl();
  const classes = useStyles();

  console.log(Magic.name);

  return (
    <div className={classes.root}>
      <Head>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
      </Head>
      <Typography variant="h2" align="center" className={classes.title}>
        {intl.formatMessage(messages.title)}
      </Typography>
    </div>
  );
};

export default About;
