import React, { FC, useEffect, useReducer } from 'react';
import useFetch from 'hooks/useFetch';

interface IBeer {
  name: string;
}

type ContextType = {
  state: IBeer | null;
  filterBeersByName: (text: string) => void;
  clearFilter: () => void;
};

export const BeersContext = React.createContext<ContextType>({
  loading: true,
  beers: [],
  filterBeers: () => {},
  clearFilter: () => {},
});

const beersReducer = (state, action) => {
  switch (action.type) {
    case 'initial':
      return {
        ...state,
        beers: action.payload,
      };
    case 'filter_beers_byName':
      return {
        ...state,
        beers: state.beers.filter((beer) => {
          const regex = new RegExp(`${action.payload}`, 'ig');
          return beer.name.match(regex);
        }),
      };
    case 'clear_filter':
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};

const BASIC_URL = `https://api.punkapi.com/v2/beers/`;

const BeersProvider: FC<React.ReactNode> = ({ children }) => {
  const { data } = useFetch(BASIC_URL);

  const [state, dispatch] = useReducer(beersReducer, data);
  console.log(state);
  useEffect(() => {
    dispatch({ type: 'initial', payload: data });
  }, [data]);

  const filterBeersByName = (text: string): void => {
    dispatch({ type: 'filter_beers_byName', payload: text });
  };

  const filterBeersByAlcohol = () => {
    dispatch({ type: 'filter_beers_byAlcohol', payload: })
  }

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: 'initial', payload: data });
  };

  return <BeersContext.Provider value={{ filterBeersByName, filterBeersByAlcohol, clearFilter, state }}>{children}</BeersContext.Provider>;
};

export default BeersProvider;
