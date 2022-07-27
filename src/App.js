import Home from "./Components/Home";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#79ADDC',
      dark: '#0D1F2D',
    },
    secondary: {
      light: '#F087F0',
      main: '#FC659A',
    },
    success: {
      main: '#6CA663',
      dark: '#407437'
    },
    warning: {
      main: '#E0CA3C'
    },
    info: {
      main: '#086788'
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#fff0ff',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover" :{
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover" :{
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
