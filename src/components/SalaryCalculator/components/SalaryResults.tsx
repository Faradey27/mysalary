import { memo } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles, FormHelperText, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  results: {
    padding: 16,
    background: theme.palette.colors.block,
    borderRadius: 4,
    marginTop: 24,
  },
  resultTitle: {
    fontSize: 17,
    color: theme.palette.text.primary,
  },
  divider: {
    margin: '16px 0',
  },
}));

interface SalaryResultsProps {
  currency: string;
  salaryValue: number;
}

const SalaryResults = ({ currency, salaryValue }: SalaryResultsProps) => {
  const classes = useStyles();

  return (
    <FormGroup className={classes.results}>
      <FormHelperText className={classes.resultTitle}>
        {`Yearly net income: `}
        <strong>
          {currency}
          {Math.floor(salaryValue * 1000)}
        </strong>
      </FormHelperText>
      <Divider className={classes.divider} />
      <FormHelperText className={classes.resultTitle}>
        {`Monthly net income: `}
        <strong>
          {currency}
          {Math.floor((salaryValue * 1000) / 12)}
        </strong>
      </FormHelperText>
    </FormGroup>
  );
};

export default memo(SalaryResults);
