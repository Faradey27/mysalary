import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


declare module '@material-ui/core/styles/createPalette' {
  interface IconPaletteColorOptions {
    pdf?: string;
    csv?: string;
  }
  interface IconPaletteColor {
    pdf: string;
    csv: string;
  }
  interface PaletteOptions {
    border: {
      default: string;
    };
    colors: {
      white: string;
      block: string;
    };
  }
  interface Palette {
    border: {
      default: string;
    };
    colors: {
      white: string;
      block: string;
    };
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f2f2f2',
    },
    text: {
      primary: '#333333',
      secondary: '#999999',
    },
    colors: {
      white: '#fff',
      block: '#f7f7f7',
    },
    border: {
      default: '#dadada'
    }
  },
});

export default theme;