import {
  CardMedia,
  Card,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Link,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Icon from "../assets/icon.png";

export default function Header() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <AppBar position="sticky" elevation={0} sx={{ py: 2 }}>
        <Toolbar>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid item justifyContent="center" alignItems="center" xs={2}>
                <Card sx={{ bgcolor: "transparent" }}>
                  <Link href="/">
                    <CardMedia
                      component="img"
                      image={Icon}
                      sx={{
                        height: 90,
                        width: 90,
                      }}
                    ></CardMedia>
                  </Link>
                </Card>
              </Grid>
              <Grid item justifyContent="center" alignItems="center" xs={10}>
                {/* mobile */}
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    overflowY: "scroll",
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/about"
                    >
                      About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/team"
                    >
                      Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/awards"
                    >
                      Awards
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/testimonials"
                    >
                      Testimonials
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/news"
                    >
                      News
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/contact"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/events"
                    >
                      Events
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/donate"
                    >
                      Donate Now
                    </Button>
                  </Grid>
                </Grid>
                {/*ipad*/}
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ display: { xs: "none", md: "flex", lg: "none" } }}
                >
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/about"
                    >
                      About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/team"
                    >
                      Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/awards"
                    >
                      Awards
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/testimonials"
                    >
                      Testimonials
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/news"
                    >
                      News
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/events"
                    >
                      Events
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/contact"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/donate"
                    >
                      Donate Now
                    </Button>
                  </Grid>
                </Grid>
                {/*laptop*/}
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ display: { xs: "none", lg: "flex" } }}
                >
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/about"
                    >
                      About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/team"
                    >
                      Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/awards"
                    >
                      Awards
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/testimonials"
                    >
                      Testimonials
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/news"
                    >
                      News
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/events"
                    >
                      Events
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/contact"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/donate"
                    >
                      Donate Now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    );
  } else {
    //mobile
    return (
      <AppBar position="sticky" elevation={0} sx={{ py: 2 }}>
        <Toolbar>
          <Box sx={{ overflowX: "scroll" }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minWidth: 800 }}
            >
              <Grid item justifyContent="center" alignItems="center" xs={2}>
                <Card sx={{ bgcolor: "transparent" }}>
                  <Link href="/">
                    <CardMedia
                      component="img"
                      image={Icon}
                      sx={{
                        height: 90,
                        width: 90,
                      }}
                    ></CardMedia>
                  </Link>
                </Card>
              </Grid>
              <Grid item justifyContent="center" alignItems="center" xs={10}>
                {/* mobile */}
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    overflowY: "scroll",
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/about"
                    >
                      About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/team"
                    >
                      Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/awards"
                    >
                      Awards
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/testimonials"
                    >
                      Testimonials
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/news"
                    >
                      News
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/events"
                    >
                      Events
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/contact"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="text"
                      color="inherit"
                      href="/donate"
                    >
                      Donate Now
                    </Button>
                  </Grid>
                </Grid>
                {/*ipad*/}
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ display: { xs: "none", md: "flex", lg: "none" } }}
                >
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/about"
                    >
                      About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/team"
                    >
                      Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/awards"
                    >
                      Awards
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/testimonials"
                    >
                      Testimonials
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/news"
                    >
                      News
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/events"
                    >
                      Events
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/contact"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/donate"
                    >
                      Donate Now
                    </Button>
                  </Grid>
                </Grid>
                {/*laptop*/}
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ display: { xs: "none", lg: "flex" } }}
                >
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/about"
                    >
                      About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/team"
                    >
                      Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/awards"
                    >
                      Awards
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/testimonials"
                    >
                      Testimonials
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/news"
                    >
                      News
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/events"
                    >
                      Events
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/contact"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      variant="text"
                      color="inherit"
                      href="/donate"
                    >
                      Donate Now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
