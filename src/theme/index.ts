import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// $base-color: #f2f2f2;
// $border-color: #dadada;
// $white: #ffffff;

// body {
//   font-family: Helvetica, Roboto, Arial, sans-serif;
//   background-color: $base-color;
//   font-size: 16px;
// }

// body,
// h1,
// h2,
// h3,
// h4,
// h5,
// h6 {
//   margin: 0;
// }


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
      default: '#fff',
    },
  },
});

export default theme;