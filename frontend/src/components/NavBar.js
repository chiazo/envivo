import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.title}>
            <Link to="/">Envivo</Link>
          </Typography>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <Link to="/:username/playlists">My Playlists</Link>
              </ListItemText>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <Link to="/:username/songs">Find New Music</Link>
              </ListItemText>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <Link to="/:username">My Account</Link>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
