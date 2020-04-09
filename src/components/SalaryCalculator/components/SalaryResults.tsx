import { memo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Divider,
  FormGroup,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  results: {
    padding: 16,
    background: theme.palette.colors.block,
    borderRadius: 4,
  },
  resultTitle: {
    fontSize: 17,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    margin: '16px 0',
  },
}));

interface SalaryResultsProps {
  currency: string;
  salaryValue: number;
  className: string;
}

const messages = defineMessages({
  yearlyGrossIncome: {
    id: 'salaryCalculator.yearlyNetIncome',
    defaultMessage: 'Yearly net income: ',
  },
  monthlyGrossIncome: {
    id: 'salaryCalculator.monthlyNetIncome',
    defaultMessage: 'Monthly net income: ',
  },
});

const SalaryResults = ({
  currency,
  salaryValue,
  className,
}: SalaryResultsProps) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <FormGroup className={clsx(classes.results, className)}>
      <FormHelperText className={classes.resultTitle}>
        {intl.formatMessage(messages.yearlyGrossIncome)}
        <strong>
          {currency}
          {Math.floor(salaryValue)}
        </strong>
      </FormHelperText>
      <Divider className={classes.divider} />
      <FormHelperText className={classes.resultTitle}>
        {intl.formatMessage(messages.monthlyGrossIncome)}
        <strong>
          {currency}
          {Math.floor(salaryValue / 12)}
        </strong>
      </FormHelperText>
    </FormGroup>
  );
};

export default memo(SalaryResults);
