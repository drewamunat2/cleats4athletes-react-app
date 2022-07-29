import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
