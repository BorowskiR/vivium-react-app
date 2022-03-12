import React, { FC } from 'react';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';
import SideBar from 'components/molecules/SideBar/Sidebar';
import { Grid, Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';

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
  const { data, error } = useFetch<Beers[]>(url);
  const classes = useStyles();

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);

  return (
    <div>
      <SideBar />
      <Container>
        <Paper elevation={3} className={classes.paper}>
          <ul>
            {data.map((beer) => {
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
