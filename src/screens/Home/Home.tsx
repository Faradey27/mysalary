import { makeStyles } from '@material-ui/core';
import Widget from '../../components/Widget';
import SalaryCalculator from '../../components/SalaryCalculator';

const useStyles = makeStyles({
  container: {
    marginTop: 16,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Widget title="Salary calculator">
        <SalaryCalculator />
      </Widget>
    </main>
  );
};

export default Home;
