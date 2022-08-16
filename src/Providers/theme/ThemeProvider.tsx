import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, {createContext, useMemo, useState} from 'react';
import {paletteConfig} from './default';

export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

// @ts-ignore
const ThemeProvider = ({children}) => {
  // const [mode, setMode] = useMode('dark');
  const [setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        // @ts-ignore

        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [setMode],
  );

  const options: ThemeOptions = {
    palette: {
      ...paletteConfig.light,
    },
  };

  // @ts-ignore
  const theme = useMemo(() => createTheme(options), [options]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
