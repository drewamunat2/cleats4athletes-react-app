import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import news from "../assets/news.jpeg";

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
  height: 500,
  margin: 25,
};

export default function News() {
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
              <img src={news} alt='news'>
              </img>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    //mobile
    return (
      <Box sx={{ bgcolor: "white", minWidth: 360, height:600 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              square={true}
              style={paperStyleImgMobile}
            >
              <img src={news} alt='news'>
              </img>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
