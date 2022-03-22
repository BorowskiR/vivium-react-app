import React, { FC, useContext } from 'react';
import { IBeer } from 'providers/types';
import { Grid, Typography } from '@material-ui/core';
import { BeersContext } from 'providers/BeersProvider';
import BeerListItem from '../BeerListItem/BeerListItem';

import { useStyles } from './styles';

const BeersList: FC = () => {
  const classes = useStyles();
  const {
    state: { filtered, beers },
  } = useContext(BeersContext);

  return (
    <Grid container className={classes.wrapper}>
      <Grid item container className={classes.tableHeader}>
        <Grid item sm={1}></Grid>
        <Grid item sm={2}>
          <Typography>Name</Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography>Description</Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography>Alcohol volume</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography>First brewed date</Typography>
        </Grid>
      </Grid>

      {filtered.length !== 0
        ? filtered?.map((beer: IBeer) => {
            return (
              <BeerListItem
                id={beer.id}
                key={beer.id}
                image_url={beer.image_url}
                name={beer.name}
                description={beer.description}
                first_brewed={beer.first_brewed}
                abv={beer.abv}
              />
            );
          })
        : beers?.map((beer: IBeer) => {
            return (
              <BeerListItem
                id={beer.id}
                key={beer.id}
                image_url={beer.image_url}
                name={beer.name}
                description={beer.description}
                first_brewed={beer.first_brewed}
                abv={beer.abv}
              />
            );
          })}
    </Grid>
  );
};

export default BeersList;
