import React from 'react';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';

interface Beer {
  name: string;
  description: string;
}

const BeerDetails = () => {
  const history = useNavigate();
  const params = useParams();
  const { id } = params;

  const url = `https://api.punkapi.com/v2/beers/${id}`;

  const { data, error } = useFetch<Beer>(url);

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Button color="primary" variant="contained" startIcon={<ArrowBackIcon />} onClick={() => history(-1)}>
        Powrót
      </Button>
    </div>
  );
};

export default BeerDetails;
