import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import {
  Container,
  Button,
  Typography,
  Grid,
  makeStyles,
  List,
  ListItem,
  TextField,
} from '@material-ui/core';
import '../style.css';

const useStyles = makeStyles({
  div: {
    padding: '60',
    margin: '3rem',
  },
  text: {
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: 'white',
    color: 'purple',
    marginLeft: '4px',
  },
  search: {
    width: '100%',
    border: 'white',
    margin: 0,
    // color: 'white',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div className={classes.div}>
        <Grid container spacing={5}>
          <Grid item xs={false}>
            <Container maxWidth="sm" className={classes.header}>
              <h1>YOUTUBE SAMPLE PLAYLIST HERE</h1>
              <List component="nav">
                <ListItem component="div">
                  <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    variant="outlined"
                    className={classes.search}
                  />
                </ListItem>
              </List>
            </Container>
          </Grid>
          <Grid item xs={false}>
            <Container maxWidth="sm" className={classes.header}>
              <Typography variant="h1" className={classes.text}>
                Envivo
              </Typography>
              <Typography variant="h5" className={classes.text}>
                Listen Anywhere.
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                className={(classes.text, classes.button)}
              >
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={(classes.text, classes.button)}
              >
                <Link to="/sign-up">Sign Up</Link>
              </Button>
              <p className={classes.text}>
                Go to dashboard by clicking{' '}
                <Button
                  variant="outlined"
                  color="primary"
                  className={(classes.text, classes.button)}
                >
                  <Link to="/dashboard">here</Link>
                </Button>
              </p>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
