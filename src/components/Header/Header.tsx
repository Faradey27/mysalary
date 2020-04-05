import { useCallback, useState } from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import LeftBar from '../LeftBar';

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerState] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setDrawerState(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerState(false);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleOpenDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Salary calculator
        </Typography>
        <LeftBar
          open={isDrawerOpen}
          onOpen={handleOpenDrawer}
          onClose={handleCloseDrawer}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
