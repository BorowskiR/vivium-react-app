import React, { FC, useContext } from 'react';
import useFetch from 'hooks/useFetch';
import { BeersContext } from 'providers/BeersProvider';
import FilterBar from 'components/templates/FilterBar/FilterBar';
import BeersList from 'components/molecules/BeerList/BeersList';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { Container, Alert, CircularProgress } from '@mui/material/';
import { useStyles } from './styles';
import { BASE_URL } from 'config';

const Dashboard: FC = () => {
  const classes = useStyles();
  const { error, data } = useFetch(BASE_URL);
  const {
    state: { filtered, filterError },
  } = useContext(BeersContext);

  if (error) return <ErrorMessage message={error} />;
  if (!data) return <CircularProgress className={classes.indicator} />;

  return (
    <Container className={classes.wrapper}>
      <FilterBar />
      {filtered?.length === 0 && filterError !== null ? (
        <Alert className={classes.bedge} severity="error">
          {filterError}
        </Alert>
      ) : null}
      <BeersList />
    </Container>
  );
};

export default Dashboard;
