import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useColorMode } from 'providers/ColorModeProvider';
import { IBeer } from 'hooks/types';
import { useStyles } from './styles';

const BeerListItem = ({ id, name, image_url, description, first_brewed, abv }: IBeer) => {
  const [readMore, setReadMore] = useState(false);
  const { mode } = useColorMode();
  const classes = useStyles({ mode });
  console.log(description.length > 100);

  const linkName = readMore ? 'Read Less ' : 'Read More';
  return (
    <Grid key={id} container className={classes.wrapper}>
      <Grid item sm={1}>
        <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={image_url} alt="beer" />
      </Grid>
      <Grid item sm={2}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item sm={3}>
        <Typography className={classes.description}>
          {readMore !== true ? description.substring(0, 100) : ''}
          {readMore === true ? description : ''}

          <Button
            className={classes.readMore_button}
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {description.length > 100 ? linkName : ''}
          </Button>
        </Typography>
      </Grid>
      <Grid item sm={3}>
        <Typography>{abv}% </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography>{first_brewed}</Typography>
      </Grid>
    </Grid>
  );
};

export default BeerListItem;
