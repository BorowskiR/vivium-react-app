import React, { FC, useContext } from 'react';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';
import SideBar from 'components/molecules/SideBar/Sidebar';
import { Grid, Container, Paper, Box } from '@material-ui/core';
import { useStyles } from './styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { BeersContext } from 'providers/BeersProvider';
import Select from 'components/organisms/Select/Select';
import SelectBrewedBefore from 'components/organisms/SelectByDate/SelectBrewedBefore';
import { IBeer } from 'providers/types';

const url = `https://api.punkapi.com/v2/beers/`;

const Dashboard: FC = () => {
  const { error, data } = useFetch(url);
  const { state } = useContext(BeersContext);
  const classes = useStyles();

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <SideBar />
      <Container>
        <Paper elevation={3} className={classes.paper}>
          <Box>
            <SearchBar />
          </Box>
          <Box>
            <Select />
            <SelectBrewedBefore />
          </Box>
          <ul>
            {state?.beers.map((beer: IBeer) => {
              return (
                <Grid key={beer.id}>
                  <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={beer.image_url} alt="" />
                  <h4>{beer.name}</h4>
                  <p>{beer.description}</p>
                  <div>first brewed {beer.first_brewed}</div>
                  <div>{beer.abv}% alkocol volume</div>
                  <Link to={`/beers/${beer.id}`}>details</Link>
                </Grid>
              );
            })}
          </ul>
          {state.error ? state.error : ''}
        </Paper>
      </Container>
    </div>
  );
};

export default Dashboard;
