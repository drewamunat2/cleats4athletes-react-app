import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import img from "../assets/IMG_2235.png"

const paperStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#000000",
  height: 300,
  margin: 25,
  border: "4px solid #79ADDC",
};

const paperStyleMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#000000",
  margin: 25,
  border: "4px solid #79ADDC",
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
      <Box sx={{ bgcolor: "black", height: 750, minWidth: 1071 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Grid container>
                <Grid item xs={6}></Grid>
                <img src={img} alt='Matt'>
                </img>
                <Grid item xs={6}>
                  <Typography
                    align="center"
                    color="#1F78C6"
                    variant="h2"
                    display="block"
                    style={titleStyle}
                  >
                    Matt
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h2"
                display="block"
                style={titleStyle}
              >
                Nick
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container style={containerStyle}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h2"
                display="block"
                style={titleStyle}
              >
                Mom
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h2"
                display="block"
                style={titleStyle}
              >
                Drew
              </Typography>
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
