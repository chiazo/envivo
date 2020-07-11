import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../style.css';

const Songs = () => {
  return (
    <Grid container>
      <Grid item xs={false} />
      <Grid item xs={false}>
        <div>Hi</div>
        <button>
          <Link to="/">Back</Link>
        </button>
      </Grid>
    </Grid>
  );
};

export default Songs;
