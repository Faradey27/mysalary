import { makeStyles } from '@material-ui/core';

import SalaryCalculator from '../../components/SalaryCalculator';
import Widget from '../../components/Widget';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  salaryWidget: {
    '@media (min-width: 512px)': {
      margin: 24,
    },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Widget className={classes.salaryWidget}>
        <SalaryCalculator />
      </Widget>
    </main>
  );
};

export default Home;
