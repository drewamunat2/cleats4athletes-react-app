import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const paperStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 700,
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
  marginBottom: 30
};

const subTitleStyle = {
  marginTop: 20,
};

const addyTitleStyle = {
  marginTop: 20,
};

export default function Events() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "white", height: 750, minWidth: 1071 }}>
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
                Cleats and Sneaker Drive
              </Typography>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h3"
                display="block"
                style={subTitleStyle}
              >
                Pine Crest School
              </Typography>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h6"
                display="block"
                style={addyTitleStyle}
              >
                Fort Lauderdale, Florida
              </Typography>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h4"
                display="block"
                style={subTitleStyle}
              >
                November 7th - 9th
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
                style={titleStyle}
              >
                Cleats and Sneaker Drive
              </Typography>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h3"
                display="block"
                style={subTitleStyle}
              >
                Pine Crest School
              </Typography>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h6"
                display="block"
                style={addyTitleStyle}
              >
                Fort Lauderdale, Florida
              </Typography>
              <Typography
                align="center"
                color="#1F78C6"
                variant="h4"
                display="block"
                style={subTitleStyle}
              >
                November 7th - 9th
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
