import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import drew from "../assets/drew.jpeg"
import nick from "../assets/nick.jpeg"
import matt from "../assets/matt.jpeg"
import mom from "../assets/mom.jpeg"

const pictureStyle = { 
  width: '75%',
  height: 500, 
  display: 'block',
  borderRadius: '100%',
}

const paperStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 500,
  margin: 25,
};

const paperStyleMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  margin: 25,
};

const containerStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  flex: 1,
};

const titleStyle = {
  marginTop: 50,
  marginBottom: "10%",
};

const missionStyle = {
  marginLeft: "10%",
  marginRight: "10%",
  marginBottom: "10%",
};

export default function Team() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "white", height: 2200, minWidth: 1071 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={matt} alt='Matt' style={pictureStyle} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Matthew Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    CEO, Co-Founder
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={mom} alt='Matt' style={pictureStyle} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Lee Ann Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Secretary
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={nick} alt='Matt' style={pictureStyle} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Nicolas Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Treasurer, Co-Founder
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={drew} alt='Matt' style={pictureStyle} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Drew Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Lead Software Engineer
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    //mobile
    return (
      <Box sx={{ bgcolor: "black", minWidth: 360 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyleMobile}>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h3"
                display="block"
                style={titleStyle}
              >
                Our Mission
              </Typography>
              <Typography
                align="center"
                color="#ffffff"
                display="block"
                style={missionStyle}
              >
                Our mission is to provide gently used cleats, clothing, and
                equipment to youth in the Community, so they can engage in
                sports, which will allow them to develop character, grit,
                leadership, and other skills needed to help them succeed on the
                field (court, etc.), in the classroom, and beyond. Please help
                us by donating items.
              </Typography>
              <Typography
                align="center"
                color="#ffffff"
                display="block"
                style={missionStyle}
              >
                It is easy, just: 1. Put the items in a bag by your front door
                with a note that says cleats for athletes 2. Then DM us with
                your name and address and we will come and pick them up. Thank
                you. Nick and Matt- Founder and Co-Founder
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
