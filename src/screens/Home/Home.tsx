import { makeStyles } from '@material-ui/core';
import Widget from '../../components/Widget';
import SalaryCalculator from '../../components/SalaryCalculator';
import Header from '../../components/Header';

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
      <Header />
      <Widget>
        <SalaryCalculator />
      </Widget>
    </main>
  );
};

export default Home;
