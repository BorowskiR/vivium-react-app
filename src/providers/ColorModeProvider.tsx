import React, { FC, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepOrange, grey } from '@mui/material/colors';

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
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: grey,
                divider: grey[200],
                background: {
                  default: grey[200],
                  paper: grey[200],
                },
                text: {
                  primary: grey[800],
                  secondary: grey[900],
                },
              }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500],
                },
              }),
        },
        components: {
          MuiIconButton: {
            styleOverrides: {
              sizeMedium: {
                color: mode === 'light' ? grey[500] : grey[500],
              },
            },
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
