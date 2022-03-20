import { useEffect, useReducer, useRef } from 'react';
import { IBeer } from 'hooks/types';

interface State {
  data?: IBeer[];
  error?: Error;
}

type Cache = { [url: string]: IBeer[] };

type Action = { type: 'loading' } | { type: 'fetched'; payload: IBeer[] } | { type: 'error'; payload: Error };

function useFetch(url?: string, options?: RequestInit) {
  const cache = useRef<Cache>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State, action: Action): State => {
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

        const data = (await response.json()) as IBeer[];
        cache.current[url] = data;
        if (cancelRequest.current) return;
        setTimeout(() => {
          dispatch({ type: 'fetched', payload: data });
        }, 1000);
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
  }, [url]);

  return state;
}

export default useFetch;
