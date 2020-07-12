import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import { googleSignIn, githubSignIn } from '../../firebase';
import '../../style.css';

const useStyles = makeStyles({
  div: {
    margin: '1.5rem 0 0 0',
  },
  text: {
    margin: '1rem 1rem 1rem 0',
  },
  button: {
    backgroundColor: 'white',
    color: 'purple',
    margin: '1rem 1rem 1rem 0',
  },
});

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { fieldName, value } = event.currentTarget;

    if (fieldName === 'email') setEmail(value);
    if (fieldName === 'password') setPassword(value);
  };

  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Container maxWidth="sm" className={classes.div}>
          <Grid item xs={false}>
            <h1>Sign In</h1>
            <button className={classes.button}>
              <Link to="/">Back</Link>
            </button>
          </Grid>
        </Container>
        <Container maxWidth="sm" className={classes.div}>
          <Grid item xs={false}>
            {/* <form noValidate autoComplete="off">
              <TextField
                id="email"
                variant="filled"
                color="secondary"
                label="Email Address"
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className={classes.text}
              />
              <TextField
                id="password"
                variant="filled"
                color="secondary"
                label="Password"
                type="password"
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                className={classes.text}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={(e) => {
                  signInHandler(e, email, password);
                }}
                className={classes.button}
              >
                Sign In
              </Button>
            </form> */}
          </Grid>
        </Container>
        <Container maxWidth="sm" className={classes.div}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={googleSignIn}
          >
            Sign In With Google
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={githubSignIn}
          >
            Sign In With Github
          </Button>
          {/* <p>
            No account?{' '}
            <Button>
              <Link to="/sign-up">Sign up here!</Link>
            </Button>
          </p>
          <p>
            <Button>
              <Link to="/reset-password">Forgot Password?</Link>
            </Button>
          </p> */}
        </Container>
      </Grid>
    </div>
  );
};

export default SignIn;
