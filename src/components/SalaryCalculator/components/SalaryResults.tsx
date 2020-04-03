import { memo } from 'react';
import clsx from 'clsx';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles, FormHelperText, Divider } from '@material-ui/core';

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

const SalaryResults = ({
  currency,
  salaryValue,
  className,
}: SalaryResultsProps) => {
  const classes = useStyles();

  return (
    <FormGroup className={clsx(classes.results, className)}>
      <FormHelperText className={classes.resultTitle}>
        {`Yearly net income: `}
        <strong>
          {currency}
          {Math.floor(salaryValue)}
        </strong>
      </FormHelperText>
      <Divider className={classes.divider} />
      <FormHelperText className={classes.resultTitle}>
        {`Monthly net income: `}
        <strong>
          {currency}
          {Math.floor(salaryValue / 12)}
        </strong>
      </FormHelperText>
    </FormGroup>
  );
};

export default memo(SalaryResults);
