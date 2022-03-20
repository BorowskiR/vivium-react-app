import React, { FC, useCallback, useContext, useState } from 'react';

type ContextType = {
  error: string | null;
  dispatchError: (message: string) => void;
};

const initialContext: ContextType = {
  error: null,
  dispatchError: () => {},
};

const ErrorContext = React.createContext<ContextType>(initialContext);

export const ErrorProvider: FC = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message): void => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 7000);
  }, []);

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return errorContext;
};
