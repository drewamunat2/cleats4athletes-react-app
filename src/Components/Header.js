import {CardMedia, Card, AppBar, Toolbar, Grid, Button} from '@mui/material';
import Icon from "../assets/icon.png";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ py: 2 }}>
      <Toolbar>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item justifyContent="center" alignItems="center" xs={3}>
            <Card sx={{ bgcolor: 'transparent' }}>
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
          <Grid item justifyContent="center" alignItems="center" xs={9}>
            {/* mobile */}
            <Grid container spacing={0} justifyContent="center" alignItems="center" sx={{display: {xs:'flex', md:'none'}}}>
              <Grid item>
                <Button size='medium' variant="text" color="inherit">
                  Mission
                </Button>
              </Grid>
              <Grid item>
                <Button size='medium' variant="text" color="inherit">
                  Events
                </Button>
              </Grid>
              <Grid item>
                <Button size='medium' variant="text" color="inherit">
                  Team
                </Button>
              </Grid>
              <Grid item>
                <Button size='medium' variant="text" color="inherit">
                  Donate Now!
                </Button>
              </Grid>
              <Grid item>
                <Button size='medium' variant="text" color="inherit">
                  Contact Us
                </Button>
              </Grid>
            </Grid>
            {/*laptop*/}
            <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{display: {xs:'none', md:'flex'}}}>
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
    </AppBar>
  );
}