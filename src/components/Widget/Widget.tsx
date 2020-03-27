import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 400,
  },
  content: {
    padding: '24px 16px',
    // borderTop: 'solid 1px $border-color',
    // borderBottom: 'solid 1px $border-color',
    // backgroundColor: '$white',
  },
});

const Widget = ({ title, children }) => {
  const classes = useStyles();

  return (
    <article>
      <header>
        <h2 className={classes.title}>{title}</h2>
      </header>
      <section className={classes.content}>{children}</section>
    </article>
  );
};

export default Widget;
