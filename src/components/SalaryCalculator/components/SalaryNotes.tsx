import { memo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormGroup, FormHelperText, makeStyles } from '@material-ui/core';

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

const SalaryNotes = ({ className }: { className: string }) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <FormGroup className={className}>
      <FormHelperText className={classes.note}>
        {intl.formatMessage(messages.legalNote)}
      </FormHelperText>
    </FormGroup>
  );
};

export default memo(SalaryNotes);
