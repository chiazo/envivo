import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import '../style.css';

const Songs = () => {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={false} />
        <Grid item xs={false}>
          <h1>My Songs</h1>
          <div>Hi</div>
          <button>
            <Link to="/">Back</Link>
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Songs;
