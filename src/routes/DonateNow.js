import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const paperStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  margin: 25,
  border: "4px solid #79ADDC",
};

const paperStyleMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
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
  marginBottom: "6%",
};

const titleStyleMobile = {
  marginTop: 50,
  marginBottom: "10%",
};

const missionStyleMobile = {
  marginLeft: "10%",
  marginRight: "10%",
  marginBottom: "10%",
};

const missionStyle = {
  marginLeft: "10%",
  marginRight: "10%",
  marginBottom: "2%",
};

export default function DonateNow() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "white", minWidth: 1071 }}>
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
                Donating is easy...
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={missionStyle}
              >
                To donate items:
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                1. Put the items in a bag by your front door with a note that
                says Cleats4Athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                sx={{mb:5, mx:'10%'}}
              >
                2. Then DM us with your name and address and we will come and
                pick them up. Thank you. Nick and Matt- Founders
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={missionStyle}
              >
                For monetary donations please send to:
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
              >
                Cleats4athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
              >
                875 Captiva Dr.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                sx={{ mb: 5 }}
              >
                Hollywood, Fl 33019
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    //mobile
    return (
      <Box sx={{ bgcolor: "white", minWidth: 360 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyleMobile}>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h2"
                display="block"
                style={titleStyleMobile}
              >
                Donating is easy...
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={missionStyleMobile}
              >
                To donate items:
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyleMobile}
              >
                1. Put the items in a bag by your front door with a note that
                says Cleats4Athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyleMobile}
              >
                2. Then DM us with your name and address and we will come and
                pick them up. Thank you. Nick and Matt- Founders
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={missionStyleMobile}
              >
                For monetary donations please send to:
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
              >
                Cleats4athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
              >
                875 Captiva Dr.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                sx={{ mb: 5 }}
              >
                Hollywood, Fl 33019
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
