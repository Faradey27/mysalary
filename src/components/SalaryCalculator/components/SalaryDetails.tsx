import { Fragment, memo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import { SalaryInfo } from '../../../types';

const useStyles = makeStyles(() => ({
  name: {
    paddingLeft: 0,
  },
  highlightedRow: {
    fontWeight: 'bold',
  },
}));

interface SalaryDetails {
  currency: string;
  salaryValue: number;
  className: string;
}

const messages = defineMessages({
  title: {
    id: 'salaryCalculator.salaryDetails.title',
    defaultMessage: 'Details',
  },
});

interface SalaryDetailsProps {
  salaryInfo: SalaryInfo[];
  currency: string;
}

const SalaryDetails = ({ salaryInfo, currency }: SalaryDetailsProps) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Fragment>
      <Typography variant="h5">{intl.formatMessage(messages.title)}</Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {salaryInfo.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  className={clsx(classes.name, {
                    [classes.highlightedRow]: row.highlight,
                  })}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {currency}
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default memo(SalaryDetails);
