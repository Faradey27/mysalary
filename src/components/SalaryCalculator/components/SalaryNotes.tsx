import { memo } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  note: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const SalaryNotes = ({ className }: { className: string }) => {
  const classes = useStyles();

  return (
    <FormGroup className={className}>
      <FormHelperText className={classes.note}>
        {`*The figures are imprecise and reflect the approximate salary range in this country.`}
      </FormHelperText>
    </FormGroup>
  );
};

export default memo(SalaryNotes);
