import React, { FC, useEffect, useReducer } from 'react';
import useFetch from 'hooks/useFetch';
import { IBeer } from 'providers/types';

enum BeersActions {
  INITIAL = 'INITIAL',
  FILTER_BY_NAME = 'FILTER_BY_NAME',
  FILTER_BY_POWER = 'FILTER_BY_POWER',
  CLEAR_FILTER = 'CLEAR_FILTER',
  FILTER_BY_BREWED_DATE = 'FILTER_BY_BREWED_DATE',
}

type Actions = {
  type: BeersActions;
  payload: IBeer[] | any;
};

type State = {
  beers: IBeer[];
  error: null | string;
};

type ContextType = {
  state: {
    beers: IBeer[];
    error: null | string;
  };
  filterByName: (text: string) => void;
  clearFilter: (data: IBeer) => void;
  filterByPower: (data: IBeer[]) => void;
  filterByBrewedDate: (data: IBeer[]) => void;
};

export const BeersContext = React.createContext<ContextType>({
  state: {
    beers: [],
    error: null,
  },
  filterByName: () => {},
  filterByPower: () => {},
  clearFilter: () => {},
  filterByBrewedDate: () => {},
});

const BASIC_URL = `https://api.punkapi.com/v2/beers/`;

const BeersReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case BeersActions.INITIAL:
      return {
        ...state,
        beers: action.payload,
      };
    case BeersActions.FILTER_BY_NAME:
      console.log(action.type);
      return {
        ...state,
        beers: state.beers.filter((beer: IBeer) => {
          const regex = new RegExp(`${action.payload}`, 'ig');
          return beer.name.match(regex);
        }),
        error: state.beers.length === 0 ? 'No beer found' : '',
      };
    case BeersActions.FILTER_BY_POWER:
      return {
        ...state,
        beers: action.payload,
        error: null,
      };
    case BeersActions.CLEAR_FILTER:
      return {
        ...state,
      };
    case BeersActions.FILTER_BY_BREWED_DATE: {
      return {
        ...state,
        beers: action.payload,
        error: action.payload.length ? '' : 'No beer found',
      };
    }
    default:
      return state;
  }
};

const initialState: State = {
  beers: [],
  error: '',
};

const BeersProvider: FC = ({ children }) => {
  const { data } = useFetch(BASIC_URL);

  const [state, dispatch] = useReducer(BeersReducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: BeersActions.INITIAL, payload: data });
  }, [data]);

  const filterByName = (text: string): void => {
    dispatch({ type: BeersActions.FILTER_BY_NAME, payload: text });
  };

  const filterByPower = (beers: IBeer[]): void => {
    dispatch({ type: BeersActions.FILTER_BY_POWER, payload: beers });
  };

  const filterByBrewedDate = (beers: IBeer[]): void => {
    dispatch({ type: BeersActions.FILTER_BY_BREWED_DATE, payload: beers });
  };

  const clearFilter = () => {
    dispatch({ type: BeersActions.INITIAL, payload: data });
  };

  return <BeersContext.Provider value={{ filterByName, filterByPower, clearFilter, filterByBrewedDate, state }}>{children}</BeersContext.Provider>;
};

export default BeersProvider;
