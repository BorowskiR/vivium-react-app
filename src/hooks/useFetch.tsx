import { useEffect, useReducer, useRef } from 'react';
// import debounce from 'lodash.debounce';
// import axios from 'axios';

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

type Action<T> = { type: 'loading' } | { type: 'fetched'; payload: T } | { type: 'error'; payload: Error };

function useFetch<T = unknown>(url?: string, options?: RequestInit) {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;
        if (cancelRequest.current) return;

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: 'error', payload: error as Error });
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // wywalilem url z dependencji
  }, [url]);

  // const findBeers = async (inputValue: string) => {
  //   try {
  //     const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${inputValue}`);
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     const data = (await response.json()) as T;
  //     dispatch({ type: 'fetched', payload: data });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return state;
}

export default useFetch;
