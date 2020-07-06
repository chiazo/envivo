import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link to="/">Envivo</Link>
          </Typography>
          <Typography variant="title" color="inherit">
            <Button></Button>
          </Typography>

          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>My Playlists</ListItemText>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>Find New Music</ListItemText>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>My Account</ListItemText>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem component="div">
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
              />
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
