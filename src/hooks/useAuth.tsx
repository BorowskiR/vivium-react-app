import React, { FC, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}
interface ILoginData {
  login: string;
  password: string;
}

type ContextType = {
  user: IUser | null;
  signIn: (data: ILoginData) => Promise<void>;
  signOut: () => void;
};

const AuthContext = React.createContext<ContextType | null>(null);

export const AuthProvider: FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          history('/');
        } catch (e) {
          console.log(e);
        }
      })();
    } else {
      history('/sign-in');
    }
  }, [history]);

  const signIn = async ({ login, password }: ILoginData): Promise<void> => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
      history('/');
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    history('/sign-in');
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
