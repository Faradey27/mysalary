import { makeStyles } from '@material-ui/core';
import { ReactChild } from 'react';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: 24,
    borderTop: `solid 1px ${theme.palette.border.default}`,
    // borderBottom: `solid 1px ${theme.palette.border.default}`,
    backgroundColor: theme.palette.colors.white,
  },
  root: {
    height: '100%',
    background: theme.palette.colors.white,
  },
}));

interface WidgetProps {
  children: ReactChild;
}

const Widget = ({ children }: WidgetProps) => {
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <section className={classes.content}>{children}</section>
    </article>
  );
};

export default Widget;
