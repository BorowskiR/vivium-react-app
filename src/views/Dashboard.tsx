import React, { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@material-ui/core';
import useFetch from 'hooks/useFetch';

interface Beer {
  userId: number;
  id: number;
  name: string;
  first_brewed: string;
  image_url: string;
  description: string;
  abv: number;
}

// const url = `http://jsonplaceholder.typicode.com/posts`;
const url = `https://api.punkapi.com/v2/beers/`;

const Dashboard: FC = () => {
  const { data, error } = useFetch<Beer[]>(url);
  const auth = useAuth();

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);

  return (
    <div>
      <Button onClick={auth.signOut}>Logout</Button>
      <ul>
        {data.map((beer) => {
          return (
            <li>
              <img style={{ objectFit: 'contain' }} width="100px" height="100px" src={beer.image_url} alt="" />
              <h4>{beer.name}</h4>
              <p>{beer.description}</p>
              <div>first brewed {beer.first_brewed}</div>
              <div>{beer.abv}% alkohol volume</div>
              <Button>details</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
