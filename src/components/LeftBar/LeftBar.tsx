import { Fragment } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Link from 'next/link';

interface LeftBarProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
  },
}));

const messages = defineMessages({
  home: {
    id: 'leftBar.home',
    defaultMessage: 'Home',
  },
  about: {
    id: 'leftBar.about',
    defaultMessage: 'About',
  },
});

const LeftBar = ({ open, onClose, onOpen }: LeftBarProps) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div className={classes.toolbar}>
        <Typography variant="h6">Salary calculator</Typography>
      </div>
      <Divider />
      <List className={classes.drawer}>
        <Link href="/">
          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={intl.formatMessage(messages.home)} />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={intl.formatMessage(messages.about)} />
          </ListItem>
        </Link>
      </List>
    </SwipeableDrawer>
  );
};

export default LeftBar;
