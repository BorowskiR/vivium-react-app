import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  }, []);

  const signIn = async ({ login, password }) => {
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

  return <AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
