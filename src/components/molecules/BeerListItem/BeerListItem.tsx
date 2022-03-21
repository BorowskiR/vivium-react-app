import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { IBeer } from 'hooks/types';

const BeerListItem = ({ id, name, image_url, description, first_brewed, abv }: IBeer) => {
  return (
    <Grid key={id} container>
      <Grid item>
        <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={image_url} alt="beer image" />
      </Grid>
      <Grid item sm={2}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item sm={3}>
        <p>{description}</p>
      </Grid>
      <Grid item sm={3}>
        <div>{abv}% alcohol volume</div>
      </Grid>
      <Grid item sm={2}>
        <div>first brewed {first_brewed}</div>
      </Grid>
    </Grid>
  );
};

export default BeerListItem;
