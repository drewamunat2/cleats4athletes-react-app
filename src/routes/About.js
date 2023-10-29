import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import img from "../assets/IMG_2235.png";

const paperStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#FFFFFF",
  height: 700,
  margin: 25,
  border: "4px solid #79ADDC",
  overflowY: "scroll",
};

const paperStyleImg = {
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
  marginTop: 20,
};

const missionStyle = {
  marginLeft: "10%",
  marginRight: "10%",
  marginBottom: "10%",
};

const subTitleStyle = {
  marginLeft: "10%",
  marginRight: "10%",
};

export default function About() {
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
                Cleats4Athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={subTitleStyle}
              >
                (954)-774-2141
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 5 }}
              >
                @Cleats4Athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 1 }}
              >
                MISSION
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
                sx={{ mb: 5 }}
              >
                The mission of Cleats4Athletes (C4A) is to help underprivileged
                youth in the community by providing gently used cleats,
                clothing, and equipment to facilitate the development of their
                athletic abilities. We believe the engagement in sports
                encourages character, grit, leadership, and other skills needed
                to help them succeed on the field (court, etc.), in the
                classroom, and beyond.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 1 }}
              >
                ABOUT
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                Cleats4Athletes was started in 2020 by two high school athletes
                who both became aware of how the pandemic was adversely
                affecting the ability for underprivileged kids to play sports.
                Knowing how important sports can be for kids, they initiated a
                modest collection of cleats, athletic gear/equipment, and
                clothing from friends, family, school, and others to give to the
                Police Athletic League (PAL) of Hollywood, FL, who then
                distributed them to the kids. After introducing the idea to the
                community service contact at their school, they realized they
                could be more effective if they created a Not for Profit
                Corporation. In 2022 our CEO, Matthew Amunategui, filed articles
                of incorporation to make Cleats4Athletes an official Florida
                501(c)(3) Not for Profit corporation. Now, one of our goals is
                to also encourage monetary donations which will be used for the
                purchase of new cleats for underprivileged kids in our
                community.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 1 }}
              >
                DONATIONS and RECIPIANTS
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                Since 2020, we have collected approximately 580 items (approx.
                value $2279), which includes cleats, sneakers, athletic
                clothing, athletic equipment, and clothes/shoes. We have
                received $2000 from donors which we used to purchase 30 pairs of
                cleats and sneakers that were donated to Lee County Sheriff's
                Youth Activities League (SYAL), who in turn distributed them to
                kids in regions of the county devastated by Hurricane Ian. We
                have just received a commitment from Skechers for a donation of
                25 pairs of sneakers that we will donate to PAL of Hollywood.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                Donations have been collected from the school community,
                friends, family, neighbors, and businesses. In addition, we have
                appointed Talia Rosenthal as our Community Ambassador to help
                raise awareness and obtain donations.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                We intend to continue to distribute to the PAL of Hollywood and
                will continue to serve other communities that are in dire need
                of our donations. In the future, we hope to continue to expand
                to other cities/counties in Florida and other states. We would
                like to reach a goal of donating cleats/sneakers to 1000 kids
                per year.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyleImg}>
              <img src={img} alt="mission"></img>
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
                variant="h4"
                display="block"
                style={titleStyle}
              >
                Cleats4Athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={subTitleStyle}
              >
                (954)-774-2141
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 5 }}
              >
                @Cleats4Athletes
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 1 }}
              >
                MISSION
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
                sx={{ mb: 5 }}
              >
                The mission of Cleats4Athletes (C4A) is to help underprivileged
                youth in the community by providing gently used cleats,
                clothing, and equipment to facilitate the development of their
                athletic abilities. We believe the engagement in sports
                encourages character, grit, leadership, and other skills needed
                to help them succeed on the field (court, etc.), in the
                classroom, and beyond.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 1 }}
              >
                ABOUT
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                Cleats4Athletes was started in 2020 by two high school athletes
                who both became aware of how the pandemic was adversely
                affecting the ability for underprivileged kids to play sports.
                Knowing how important sports can be for kids, they initiated a
                modest collection of cleats, athletic gear/equipment, and
                clothing from friends, family, school, and others to give to the
                Police Athletic League (PAL) of Hollywood, FL, who then
                distributed them to the kids. After introducing the idea to the
                community service contact at their school, they realized they
                could be more effective if they created a Not for Profit
                Corporation. In 2022 our CEO, Matthew Amunategui, filed articles
                of incorporation to make Cleats4Athletes an official Florida
                501(c)(3) Not for Profit corporation. Now, one of our goals is
                to also encourage monetary donations which will be used for the
                purchase of new cleats for underprivileged kids in our
                community.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h4"
                display="block"
                style={subTitleStyle}
                sx={{ mb: 1 }}
              >
                DONATIONS and RECIPIANTS
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                Since 2020, we have collected approximately 580 items (approx.
                value $2279), which includes cleats, sneakers, athletic
                clothing, athletic equipment, and clothes/shoes. We have
                received $2000 from donors which we used to purchase 30 pairs of
                cleats and sneakers that were donated to Lee County Sheriff's
                Youth Activities League (SYAL), who in turn distributed them to
                kids in regions of the county devastated by Hurricane Ian. We
                have just received a commitment from Skechers for a donation of
                25 pairs of sneakers that we will donate to PAL of Hollywood.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                Donations have been collected from the school community,
                friends, family, neighbors, and businesses. In addition, we have
                appointed Talia Rosenthal as our Community Ambassador to help
                raise awareness and obtain donations.
              </Typography>
              <Typography
                align="center"
                color="#000000"
                variant="h6"
                display="block"
                style={missionStyle}
              >
                We intend to continue to distribute to the PAL of Hollywood and
                will continue to serve other communities that are in dire need
                of our donations. In the future, we hope to continue to expand
                to other cities/counties in Florida and other states. We would
                like to reach a goal of donating cleats/sneakers to 1000 kids
                per year.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
