import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653",
      light: "#264653",
      dark: "#264653",
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Typography>
        Hello world
      </Typography>
    </ThemeProvider>
  );
}