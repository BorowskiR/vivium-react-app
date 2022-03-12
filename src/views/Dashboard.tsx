import React, { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@material-ui/core';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';

interface Beers {
  userId: number;
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
  const auth = useAuth();

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;
  // console.log(data);

  return (
    <div>
      <Button onClick={auth.signOut}>Logout</Button>
      <ul>
        {data.map((beer) => {
          return (
            <li key={beer.id}>
              <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={beer.image_url} alt="" />
              <h4>{beer.name}</h4>
              <p>{beer.description}</p>
              <div>first brewed {beer.first_brewed}</div>
              <div>{beer.abv}% alkohol volume</div>
              <Link to={`/beers/${beer.id}`}>details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
