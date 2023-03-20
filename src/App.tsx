import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const theme = createTheme({
  palette: {
    primary: {
      main: "#f4a261",
      light: "#2a9d8f",
      dark: "#264653",
      // #264653 dark-blue, #2a9d8f teal/green, #e9c46a yellow, #f4a261 pastel-orange, #e76f51 orange
    },
    secondary: {
      main: "#f4a261",
      light: "#264653",
      dark: "#264653",
    },
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
      <Box sx={{ bgcolor: '#264653', height: '40.5  \vh' }}>
        <Typography>
          
          <img src="https://media.licdn.com/dms/image/C5603AQHMexkfsoW0kw/profile-displayphoto-shrink_800_800/0/1637008383120?e=1684972800&v=beta&t=1SmOHi7rdZE-aRjAfhN3Ovdutnfk4xbcHroGExw7Yek" 
          width="25%" 
          height="25%"
          border-radius="45px"/>
        </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}