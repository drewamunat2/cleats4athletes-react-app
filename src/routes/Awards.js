import { Box, Grid, Paper, useMediaQuery, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import award from "../assets/award.png";

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
  backgroundColor: "#FFFFFF",
  height: 400,
  margin: 25,
};

const paperStyleImgMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 200,
  margin: 25,
};

export default function Awards() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "white", minWidth: 1071 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={6}>
            <Paper elevation={0} square={true} style={paperStyleImg}>
              <img src={award} alt="award"></img>
            </Paper>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={6} sx={{mb: 5}}>
            <Typography
              align="center"
              color="#000000"
              variant="h6"
              display="block"
            >
              Award is from Lee County, FL for donating $2000 worth of new
              cleats and sneakers to the Sheriff's Youth Activity League
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    //mobile
    return (
      <Box sx={{ bgcolor: "white", minWidth: 360, height: 550 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12} sx={{mb:2}}>
            <Paper elevation={0} square={true} style={paperStyleImgMobile}>
              <img src={award} alt="award"></img>
            </Paper>
          </Grid>
          <Grid item xs={12}/>
          <Grid item xs={8}>
            <Typography
              align="center"
              color="#000000"
              variant="h6"
              display="block"
            >
              Award is from Lee County, FL for donating $2000 worth of new
              cleats and sneakers to the Sheriff's Youth Activity League
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
