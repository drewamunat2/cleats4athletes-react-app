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

const pictureStyleMobile = { 
  width: '75%',
  height: 150, 
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
  height: 200,
  margin: 5,
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
};

const subTitleStyle = {
  marginBottom: 50
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
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
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
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
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
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
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
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
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
      <Box sx={{ bgcolor: "white", minWidth: 360, height: 900 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleMobile}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={1} />
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={matt} alt='Matt' style={pictureStyleMobile} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h4"
                    display="block"
                    style={titleStyle}
                  >
                    Matthew Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
                  >
                    CEO, Co-Founder
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleMobile}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={1} />
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={mom} alt='Matt' style={pictureStyleMobile} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h4"
                    display="block"
                    style={titleStyle}
                  >
                    Lee Ann Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
                  >
                    Secretary
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleMobile}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={1} />
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={nick} alt='Matt' style={pictureStyleMobile} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h4"
                    display="block"
                    style={titleStyle}
                  >
                    Nicolas Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
                  >
                    Treasurer, Co-Founder
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleMobile}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={1} />
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <img src={drew} alt='Matt' style={pictureStyleMobile} />
                </Grid>
                <Grid item xs={5} style={{ textAlign: 'center' }}>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h4"
                    display="block"
                    style={titleStyle}
                  >
                    Drew Amunategui
                  </Typography>
                  <Typography
                    align="left"
                    color="#1F78C6"
                    variant="h6"
                    display="block"
                    style={subTitleStyle}
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
  }
}
