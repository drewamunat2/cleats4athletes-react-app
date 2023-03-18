import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const paperStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#000000",
  height: 700,
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

export default function ContactUs() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!mobile) {
    //laptop
    return (
      <Box sx={{ bgcolor: "black", height: 750, minWidth: 1071 }}>
        <Grid container style={containerStyle}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} square={true} style={paperStyle}>
              <Link href="callto:954-665-3765">
                <Typography
                  align="center"
                  color="#1F78C6"
                  variant="h3"
                  display="block"
                  style={titleStyle}
                >
                  Cell: +1 (954)-665-3765
                </Typography>
              </Link>
              <Link href="mailto:Cleats4Athletes@yahoo.com">
                <Typography
                  align="center"
                  color="#1F78C6"
                  variant="h3"
                  display="block"
                  style={titleStyle}
                >
                  Email: Cleats4Athletes@yahoo.com
                </Typography>
              </Link>
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
              <Link href="callto:954-665-3765">
                <Typography
                  align="center"
                  color="#1F78C6"
                  variant="h6"
                  display="block"
                  style={titleStyle}
                >
                  Cell: +1 (954)-665-3765
                </Typography>
              </Link>
              <Link href="mailto:Cleats4Athletes@yahoo.com">
                <Typography
                  align="center"
                  color="#1F78C6"
                  variant="h6"
                  display="block"
                  style={titleStyle}
                >
                  Email: Cleats4Athletes@yahoo.com
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
