import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Container, Button, Typography, Grid } from '@material-ui/core';

const Home = (props) => {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 60 }}>
        <Grid container spacing={5}>
          <Container maxWidth="sm">
            <Typography variant="h1">Envivo</Typography>
            <Typography variant="h5">Listen Anywhere.</Typography>

            <Button variant="outlined" color="primary">
              Login
            </Button>
            <p>
              Go to dashboard by clicking <Link to="/dashboard">here</Link>
            </p>
          </Container>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
