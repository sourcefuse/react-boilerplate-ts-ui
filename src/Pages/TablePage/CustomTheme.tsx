import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const customTheme = createTheme(theme, {
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: theme.palette.common.black,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        },
      },
    },
  },
});

export default customTheme;
