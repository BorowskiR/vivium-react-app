import React, { FC, useContext } from 'react';
import useFetch from 'hooks/useFetch';
import { Container, Paper, Box } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { useStyles } from './styles';
import FilterBar from 'components/templates/FilterBar/FilterBar';
import { BeersContext } from 'providers/BeersProvider';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import CircularProgress from '@mui/material/CircularProgress';
import BeersList from 'components/molecules/BeerList/BeersList';

const url = `https://api.punkapi.com/v2/beers/`;

const Dashboard: FC = () => {
  const classes = useStyles();
  const { error, data } = useFetch(url);
  const {
    state: { filtered, filterError },
  } = useContext(BeersContext);

  if (error) return <ErrorMessage />;
  if (!data) return <CircularProgress className={classes.indicator} />;

  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <FilterBar />
        <Box>{filtered?.length === 0 && filterError !== null ? <Alert severity="error">{filterError}</Alert> : null}</Box>
        <BeersList />
      </Paper>
    </Container>
  );
};

export default Dashboard;
