import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, Paper} from '@mui/material';

import Image from "../assets/img.webp";
import Insta4 from "../assets/IMG_2228.jpg";
import Insta3 from "../assets/IMG_2229.jpg";
import Insta2 from "../assets/IMG_2230.jpg";
import Insta1 from "../assets/IMG_2234.jpg";


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

function TitleImage() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: '#000000', height: 600, flex: 1 }}>
      <Paper style={styles.paperTopImage} elevation={0} />
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
    <Box sx={{bgcolor:'#ffffff'}}>
      <Container disableGutters sx={{ py: 4 }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} sx={{ py: 4 }}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx:2 }}
            >
              <CardMedia
                component="img"
                image={Insta1}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  Our first drop off of items to the  Police Athletic League hoping to make a difference.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://www.instagram.com/p/CI4BpAVlL1W/' size="small">Go to post</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ py: 4 }}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx:2 }}
            >
              <CardMedia
                component="img"
                image={Insta2}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  We dropped off 6+ bags full of cleats, sneakers, and more football equipment to the PALS.                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://www.instagram.com/p/COBOMejMCgo/' size="small">Go to post</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ py: 4 }}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx:2 }}
            >
              <CardMedia
                component="img"
                image={Insta3}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  {"We’ve collected almost 50 items in one week! Extrememly grateful for all the support."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://www.instagram.com/p/CMlLSvInkgT/' size="small">Go to post</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ py: 4 }}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx:2 }}
            >
              <CardMedia
                component="img"
                image={Insta4}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  Another successful pickup. We will drop them off at the Police Athletic League this week.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://www.instagram.com/p/CT160g6rim_/' size="small">Go to post</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default function Home() {
  return (
    <>
      <TitleImage />
      <InstaImages />
    </>
  );
}