import React, { useCallback, useContext } from 'react';
import {
  Grid,
  Container,
  makeStyles,
  Button,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import { googleSignIn, githubSignIn } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
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
  const userGoogleLogin = useCallback(() => {
    googleSignIn();
  }, []);

  const userGithubLogin = useCallback(() => {
    githubSignIn();
  }, []);

  const user = useContext(UserContext);
  const classes = useStyles();

  if (user) {
    return (
      <div>
        <NavBar />
        <Typography variant="h4">You're signed in!</Typography>
      </div>
    );
  }

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
          <Grid item xs={false}></Grid>
        </Container>
        <Container maxWidth="sm" className={classes.div}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={userGoogleLogin}
          >
            Sign In With Google
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={userGithubLogin}
          >
            Sign In With Github
          </Button>
        </Container>
      </Grid>
    </div>
  );
};

export default SignIn;
