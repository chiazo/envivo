import React, { useContext, useCallback } from 'react';
import {
  Grid,
  Avatar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import { logout } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import '../../style.css';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'white',
    color: 'purple',
    marginLeft: '4px',
  },
});

const Account = () => {
  const user = useContext(UserContext);
  const { displayName, email, photoURL } = user || {};
  const classes = useStyles();

  const userLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <div>
      <NavBar />
      {user ? (
        <Grid container spacing={5}>
          <Grid item xs={false} />
          <Grid item xs={false}>
            <h1>My Account</h1>
            <Avatar alt="No Image" src={photoURL}>
              C
            </Avatar>
            <Typography variant="h6">Username:</Typography> <p>{displayName}</p>
            <Typography variant="h6">Email:</Typography> <p>{email}</p>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={userLogout}
            >
              <Link to="/">Sign Out</Link>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Button variant="outlined" color="primary" className={classes.button}>
          <Link to="/sign-in">Log In</Link>
        </Button>
      )}
    </div>
  );
};

export default Account;
