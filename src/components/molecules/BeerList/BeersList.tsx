import React, { FC, useContext } from 'react';
import { IBeer } from 'providers/types';
import { Grid } from '@material-ui/core';
import { BeersContext } from 'providers/BeersProvider';
import BeerListItem from '../BeerListItem/BeerListItem';

const BeersList: FC = () => {
  const {
    state: { filtered, beers },
  } = useContext(BeersContext);

  return (
    <Grid container>
      <Grid item container>
        <Grid item sm={1}></Grid>
        <Grid item sm={2}>
          Name
        </Grid>
        <Grid item sm={3}>
          Description
        </Grid>
        <Grid item sm={3}>
          Alcohol volume
        </Grid>
        <Grid item sm={2}>
          First brewed date
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
                description={beer.description.length > 100 ? beer.description.substring(0, 100) : beer.description}
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
