import React, { FC, useContext, useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';
import SideBar from 'components/molecules/SideBar/Sidebar';
import { Grid, Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { BeersContext } from 'providers/BeersProvider';
import Select from 'components/organisms/Select/Select';

interface Beers {
  id: number;
  name: string;
  first_brewed: string;
  image_url: string;
  description: string;
  abv: number;
}

const url = `https://api.punkapi.com/v2/beers/`;

const Dashboard: FC = () => {
  const { error, data } = useFetch<Beers[]>(url);
  const { state } = useContext(BeersContext);
  const classes = useStyles();

  // useEffect(() => {
  //   if (beers) {
  //     setState(beers);
  //   }
  // }, [beers]);

  console.log(state);

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <SideBar />
      <Container>
        <Paper elevation={3} className={classes.paper}>
          <SearchBar />
          <Select />
          <ul>
            {state.beers?.map((beer) => {
              return (
                <Grid key={beer.id}>
                  <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={beer.image_url} alt="" />
                  <h4>{beer.name}</h4>
                  <p>{beer.description}</p>
                  <div>first brewed {beer.first_brewed}</div>
                  <div>{beer.abv}% alkohol volume</div>
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
