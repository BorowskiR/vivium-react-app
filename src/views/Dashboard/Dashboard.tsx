import React, { FC, useContext } from 'react';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';
import { Grid, Container, Paper, Box } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { useStyles } from './styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { BeersContext } from 'providers/BeersProvider';
import Select from 'components/organisms/Select/Select';
import SelectBrewedBefore from 'components/organisms/SelectByDate/SelectBrewedBefore';
import { IBeer } from 'providers/types';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import CircularProgress from '@mui/material/CircularProgress';
const url = `https://api.punkapi.com/v2/beers/`;

const Dashboard: FC = () => {
  const { error, data } = useFetch(url);
  const {
    state: { filtered, beers },
  } = useContext(BeersContext);
  const classes = useStyles();

  if (error) return <ErrorMessage />;
  if (!data) return <CircularProgress className={classes.indicator} />;

  return (
    <div>
      <Container>
        <Paper elevation={3} className={classes.paper}>
          <Box>
            <SearchBar />
          </Box>
          <Box>
            <Select />
            <SelectBrewedBefore />
          </Box>
          <Box>{filtered && filtered?.length && error !== undefined ? <Alert severity="error">{error}!</Alert> : null}</Box>
          <ul>
            {filtered.length !== 0
              ? filtered?.map((beer: IBeer) => {
                  return (
                    <Grid key={beer.id}>
                      <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={beer.image_url} alt="" />
                      <h4>{beer.name}</h4>
                      <p>{beer.description}</p>
                      <div>first brewed {beer.first_brewed}</div>
                      <div>{beer.abv}% alcohol volume</div>
                      <Link to={`/beers/${beer.id}`}>details</Link>
                    </Grid>
                  );
                })
              : beers?.map((beer: IBeer) => {
                  return (
                    <Grid key={beer.id}>
                      <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={beer.image_url} alt="" />
                      <h4>{beer.name}</h4>
                      <p>{beer.description}</p>
                      <div>first brewed {beer.first_brewed}</div>
                      <div>{beer.abv}% alcohol volume</div>
                      <Link to={`/beers/${beer.id}`}>details</Link>
                    </Grid>
                  );
                })}
          </ul>
        </Paper>
      </Container>
    </div>
  );
};

export default Dashboard;
