import tinycolor from 'tinycolor2';

const secondary = '#0469E3';

const lightenRate = 7.5;
const darkenRate = 15;

export const paletteConfig = {
  light: {
    background: {
      // paper: '#f1f5f7',
    },
    primary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
    },
    secondary: {
      // rose
      main: '#E81823',
      light: '#FC7092',
      dark: '#90003B',
    },
    // error: {
    //   main: error,
    //   light: tinycolor(error).lighten(lightenRate).toHexString(),
    //   dark: tinycolor(error).darken(darkenRate).toHexString(),
    // },
    // warning: {
    //   main: warning,
    //   light: tinycolor(warning).lighten(lightenRate).toHexString(),
    //   dark: tinycolor(warning).darken(darkenRate).toHexString(),
    // },
    // success: {
    //   main: success,
    //   light: tinycolor(success).lighten(lightenRate).toHexString(),
    //   dark: tinycolor(success).darken(darkenRate).toHexString(),
    // },
    // info: {
    //   main: info,
    //   light: tinycolor(info).lighten(lightenRate).toHexString(),
    //   dark: tinycolor(info).darken(darkenRate).toHexString(),
    // },
    // border: {
    //   main: '#ddd',
    // },
  },
  dark: {
    border: {
      main: '#ffffff1f',
    },
  },
};

export const commonConfig = {
  // typography: {fontFamily: ['gotham'].join(',')},
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          height: '8px',
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: '#fafafa',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#D1D1D1',
          borderRadius: '100px',
          opacity: '50%',
        },
        '*::-webkit-scrollbar-thumb:horizontal': {
          width: '8px',
          height: '300px',
          backgroundColor: '#D1D1D1',
          backgroundClip: 'padding-box',
          borderRight: '16px white solid',
        },
      },
    },
    // MuiButton: {
    //   defaultProps: {
    //     variant: 'outlined',
    //     color: 'secondary',
    //   },
    // },
  },
};
