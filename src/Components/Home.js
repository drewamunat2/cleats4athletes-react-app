import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import Image from "../assets/img.webp";
import Icon from "../assets/icon.png";
import Insta1 from "../assets/IMG_2228.jpg";
import Insta2 from "../assets/IMG_2229.jpg";
import Insta3 from "../assets/IMG_2230.jpg";

const styles = {
  paperTopImage: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    opacity: '.5',
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    width: '100%'
  },
  paperTopText: {
    height: 600,
    width: '100%',
    transform: 'translateY(-60%)',
    background: 'transparent'
  }
};

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {'Copyright © '}
      <Link color="#ffffff" href="/">
        Cleats4Athletes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Header() {
  return (
    <Toolbar>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item justifyContent="center" alignItems="center" xs={4}>
          <Card sx={{bgcolor: 'transparent'}}>
            <CardMedia
              component="img"
              image={Icon}
              sx={{
                height: 100,
                width: 100,
              }}>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item justifyContent="center" alignItems="center" xs={8}>
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item>
              <Button size='large' variant="text" color="inherit">
                Mission
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' variant="text" color="inherit">
                Events
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' variant="text" color="inherit">
                Team
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' variant="text" color="inherit">
                Donate Now!
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' variant="text" color="inherit">
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

function TitleImage() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: '#000000', height: 600, flex: 1 }}>
      <Paper style={styles.paperTopImage} elevation={0}/>
      <Paper style={styles.paperTopText} elevation={0}>
        <Typography
          variant="h2"
          color="#ffffff"
          display="block"
          align="center"
        >
          Cleats For Athletes
        </Typography>
        <Typography
          variant="h4"
          color="#aaaaaa"
          display="block"
          align="center"
        >
          every step counts
        </Typography>
      </Paper>
    </Grid>
  );
}

function InstaImages() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>    
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image={Insta1}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Go to post</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image={Insta2}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Go to post</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image={Insta3}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Go to post</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

function Footer() {
  return (
    <Box sx={{ bgcolor: '#EDAFB8', p: 6, pb: 2 }} component="footer">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        component="p"
        sx={{ pb: 5 }}
      >
        <IconButton size='large' color="secondary" href='https://www.instagram.com/cleatsforathletes/?hl=en' sx={{ "&:hover": { color: '#FC659A' }, p: 0 }}><InstagramIcon sx={{ fontSize: 50 }} /></IconButton>
      </Typography>
      <Copyright />
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <AppBar position="sticky" sx={{ py: 2 }}>
        <Header />
      </AppBar>
      <main>
        <TitleImage />
        <InstaImages />
      </main>
      <Footer />
    </>
  );
}