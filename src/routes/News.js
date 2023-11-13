import { Box, Grid, Paper, useMediaQuery, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import news from "../assets/news.jpeg";
import news2 from "../assets/matt_news_2.png";
import news3 from "../assets/matt_news_3.png";

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
  height: 800,
  margin: 25,
};

const paperStyleImgMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 500,
  margin: 25,
};

const paperStyleImgSplit = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 400,
  marginTop: 50,
  marginBottom: 50,
  marginLeft: 5,
  marginRight: 5,
};

const paperStyleImgSplitMobile = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 300,
  marginTop: 50,
  marginBottom: 50,
  marginLeft: 5,
  marginRight: 5,
};

export default function News() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "white", minWidth: 1071 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={5}>
            <Paper elevation={0} square={true} style={paperStyleImgSplit}>
              <a href="https://www.instagram.com/p/CzXGzNjuNCv/?img_index=6">
                <img src={news2} alt="news"></img>
              </a>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              "Today @cleats4athletes CEO Matthew Amunategui came by the
              @hollywoodflpal & donated 25 pairs of shoes & 30 pair of socks for
              our athletes. Thank you so much for your continuing support of the
              Hollywood PAL."
            </Typography>
            <a href="https://www.instagram.com/hollywoodflpal/">
              <Typography variant="h5" sx={{ mt: 2 }}>
                -@hollywoodflpal
              </Typography>
            </a>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={0} square={true} style={paperStyleImgSplit}>
              <a href="https://www.instagram.com/p/CzXGzNjuNCv/?img_index=1">
                <img src={news3} alt="news"></img>
              </a>
            </Paper>
          </Grid>
        </Grid>
        <Grid container style={containerStyle}>
          <Grid item xs={6}>
            <Paper elevation={0} square={true} style={paperStyleImg}>
              <img src={news} alt="news"></img>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    //mobile
    return (
      <Box sx={{ bgcolor: "white", minWidth: 360 }}>
        <Grid container style={containerStyle} sx={{mb:5}}>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleImgSplitMobile}>
              <a href="https://www.instagram.com/p/CzXGzNjuNCv/?img_index=6">
                <img src={news2} alt="news"></img>
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{mx:2}}>
              "Today @cleats4athletes CEO Matthew Amunategui came by the
              @hollywoodflpal & donated 25 pairs of shoes & 30 pair of socks for
              our athletes. Thank you so much for your continuing support of the
              Hollywood PAL."
            </Typography>
            <a href="https://www.instagram.com/hollywoodflpal/">
              <Typography variant="h5" sx={{ mt: 2 }}>
                -@hollywoodflpal
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleImgSplitMobile}>
              <a href="https://www.instagram.com/p/CzXGzNjuNCv/?img_index=1">
                <img src={news3} alt="news"></img>
              </a>
            </Paper>
          </Grid>
        </Grid>
        <Grid container style={containerStyle}>
          <Grid item xs={12}>
            <Paper elevation={0} square={true} style={paperStyleImgMobile}>
              <img src={news} alt="news"></img>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
