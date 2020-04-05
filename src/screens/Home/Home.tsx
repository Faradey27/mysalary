import { makeStyles } from '@material-ui/core';

import Header from '../../components/Header';
import SalaryCalculator from '../../components/SalaryCalculator';
import Widget from '../../components/Widget';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Widget>
        <SalaryCalculator />
      </Widget>
    </main>
  );
};

export default Home;
