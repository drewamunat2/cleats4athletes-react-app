import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import test from "../assets/test.jpeg";

const containerStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  flex: 1,
};

const paperStyleImg = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: '#FFFFFF',
  height: 800,
  margin: 25,
};

const paperStyleImgMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: '#FFFFFF',
  height: 600,
  margin: 25,
};

export default function Test() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "white", minWidth: 1071 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={6}>
            <Paper
              elevation={0}
              square={true}
              style={paperStyleImg}
            >
              <img src={test} alt='testimonial'>
              </img>
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
          <Grid item xs={12}>
            <Paper
              elevation={0}
              square={true}
              style={paperStyleImgMobile}
            >
              <img src={test} alt='testimonial'>
              </img>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
