import {IconButton, Typography, Link, Box} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {'Copyright © '}
      <Link color="#ffffff" href="/">
        Cleats4Athletes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#79ADDC', p: 4, pb:2 }} component="footer">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        component="p"
        sx={{ pb: 5 }}
      >
        <IconButton size='large' href='https://www.instagram.com/cleats4athletes/' sx={{ "&:hover": { color: '#FC659A' }, p: 0 }}><InstagramIcon sx={{ fontSize: 50 }} /></IconButton>
      </Typography>
      <Copyright />
    </Box>
  );
}