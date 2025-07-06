import React from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  ThemeProvider
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Facebook, Instagram, Twitter, Email, Phone, Room } from '@mui/icons-material';



const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513',
    },
    secondary: {
      main: '#c86a16', 
    },
  },
});

function Contact() {
  return (

    <ThemeProvider theme={theme}>
    <Box sx={{ px: 4, py: 6, bgcolor: '#fffaf0', minHeight: '100vh' }}>
    <Typography
      variant="h4"
      fontFamily="cursive"
      color="burlywood"
      textAlign="center"
      mb={5}
      sx={{ textShadow: '1px 1px 2px #00000030' }}
    >
      Get in Touch with Zaph Tours
    </Typography>
  
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
    >
      <Paper sx={{ flex: 1, p: 4, bgcolor: 'burlywood', color: '#5C4033' }} elevation={3}>
        <Typography variant="h5" mb={3} fontWeight="bold" fontFamily="cursive">
          Contact Form
        </Typography>
  
        <form>
          <TextField fullWidth label="Name" margin="normal" variant="outlined" />
          <TextField fullWidth label="Email" type="email" margin="normal" variant="outlined" />
          <TextField fullWidth label="Subject" margin="normal" variant="outlined" />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>

      <Paper sx={{ flex: 1, p: 4, bgcolor: 'burlywood' }} elevation={3}>
        <Typography variant="h5" fontWeight="bold" fontFamily="cursive" mb={3}>
          Contact Information
        </Typography>
  
        <Box mb={2} display="flex" alignItems="center">
          <Email sx={{ mr: 1 }} />
          <Typography>info@zaphtours.com</Typography>
        </Box>
        <Box mb={2} display="flex" alignItems="center">
          <Phone sx={{ mr: 1 }} />
          <Typography>+254 712 345678</Typography>
        </Box>
        <Box mb={2} display="flex" alignItems="center">
          <Room sx={{ mr: 1 }} />
          <Typography>Nairobi CBD, Kenyatta Avenue</Typography>
        </Box>
  
        <Typography variant="h6" mt={4} fontWeight="bold">
          🕒 Office Hours
        </Typography>
        <Typography>Mon - Fri: 9:00 AM - 5:00 PM</Typography>
        <Typography>Sat: 10:00 AM - 2:00 PM</Typography>
       < Typography>Sun: Closed</Typography>
       <Typography>Holidays:9am - 11.30pm </Typography>
  
        <Typography variant="h6" mt={4} fontWeight="bold">
        🌏 Follow Us Today
        </Typography>
        <Box>
          <IconButton href="https://facebook.com" target="_blank" color="primary">
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'black' }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'black' }}>
            <Twitter />
          </IconButton>
        </Box>
      </Paper>
    </Box>

    <Box mt={6}>
  <Typography
    variant="h5"
    fontWeight="bold"
    fontFamily="cursive"
    mb={2}
    textAlign="center"
    color="burlywood"
  >
    Find Us on the Map
  </Typography>

  <Box
    sx={{
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: 3,
      height: { xs: 300, md: 400 },
      width: '100%',
      maxWidth: '100%',
    }}
  >
    <iframe
      title="Zaph Tours Location"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869077692!2d36.682578523149665!3d-1.3028602775926779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1751798737355!5m2!1sen!2ske"
      allowFullScreen
    >

    </iframe>
  </Box>
</Box>

  </Box>


  </ThemeProvider>   
  )
};


export default Contact
