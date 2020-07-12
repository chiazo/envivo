import React from 'react';
import {
  Grid,
  Avatar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import '../../style.css';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'white',
    color: 'purple',
    marginLeft: '4px',
  },
});

const Account = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing={5}>
        <Grid item xs={false} />
        <Grid item xs={false}>
          <h1>My Account</h1>
          <Avatar alt="No Image">C</Avatar>
          <Typography variant="h6">Username:</Typography> <p>Chiazo</p>
          <Typography variant="h6">Email:</Typography>{' '}
          <p>chazzjazz333@gmail.com</p>
          <Button variant="outlined" color="primary" className={classes.button}>
            <Link to="/">Sign Out</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
