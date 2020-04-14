import { memo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormHelperText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  note: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const messages = defineMessages({
  legalNote: {
    id: 'salaryCalculator.legalNote',
    defaultMessage:
      '*The figures are imprecise and reflect the approximate salary range in this country.',
  },
});

const SalaryNotes = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <FormHelperText className={classes.note}>
      {intl.formatMessage(messages.legalNote)}
    </FormHelperText>
  );
};

export default memo(SalaryNotes);
