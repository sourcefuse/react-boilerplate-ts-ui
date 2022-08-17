import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import PropTypes from 'prop-types';
import {createContext, useMemo, useState} from 'react';
import {commonConfig, paletteConfig} from './default';

export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

// @ts-ignore
const ThemeProvider = ({children}) => {
  // const [mode, setMode] = useMode('dark');
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        // @ts-ignore

        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [setMode],
  );

  // @ts-ignore
  const theme = useMemo(() => {
    const options: ThemeOptions = {
      palette: {
        ...paletteConfig[mode],
      },
      ...commonConfig,
    };
    return createTheme(options);
  }, [mode]);

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
