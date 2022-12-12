import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {createContext, ReactNode, useMemo} from 'react';
import {commonConfig, paletteConfig} from './default';

export const ThemeContext = createContext({toggleColorMode: () => {}});

const ThemeProvider = ({children}: {children: ReactNode}) => {
  // const [mode, setMode] = useLocalStorage<PaletteMode>('mode', 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        // setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          ...paletteConfig.light,
        },
        ...commonConfig,
      }),
    [],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
