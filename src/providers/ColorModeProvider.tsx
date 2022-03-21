import React, { FC, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: 'dark' | 'light';
}

export const ColorModeContext = React.createContext<IColorModeContext>({ toggleColorMode: () => {}, mode: 'light' });

export const ColorModeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#5cbc63',
            contrastText: '#fff',
          },
          secondary: {
            main: '#000',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const mode = useContext(ColorModeContext);

  if (!mode) {
    throw Error('useColorMode needs to be used inside ColorModeContext');
  }

  return mode;
};
