import React from 'react';
import { Grid } from '@material-ui/core';
import { IBeer } from 'hooks/types';

const BeerListItem = ({ id, name, image_url, description, first_brewed, abv }: IBeer) => {
  return (
    <Grid key={id}>
      <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={image_url} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <div>first brewed {first_brewed}</div>
      <div>{abv}% alcohol volume</div>
    </Grid>
  );
};

export default BeerListItem;
