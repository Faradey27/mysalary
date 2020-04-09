import { ReactChild } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: 24,
    borderTop: `solid 1px ${theme.palette.border.default}`,
    backgroundColor: theme.palette.colors.white,
    '@media (min-width: 512px)': {
      border: `solid 1px ${theme.palette.border.default}`,
    },
  },

  root: {
    height: '100%',
    background: theme.palette.colors.white,
    '@media (min-width: 512px)': {
      height: 'auto',
    },
  },
}));

interface WidgetProps {
  children: ReactChild;
  className: string;
}

const Widget = ({ children, className }: WidgetProps) => {
  const classes = useStyles();

  return (
    <article className={clsx(classes.root, className)}>
      <section className={classes.content}>{children}</section>
    </article>
  );
};

export default Widget;
