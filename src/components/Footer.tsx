import React from 'react'
import {Box, Stack, Typography,Link,IconButton } from  '@mui/material'

function Footer() {
  return (

    <Box
      sx={{
        backgroundColor: 'burlywood',
        color: 'black',
        padding: '30px 10px',
        marginTop: '80px',
      }}
    >
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={5} 
        justifyContent="space-between"
        alignItems="flex-start"
        maxWidth="1190px"
        margin="auto"
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>
            Zaph Tours
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: '250px', marginTop: '10px' }}>
            Your gateway to unforgettable safaris and wild adventures across Africa.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="inherit">Home</Link>
            <Link href="#" underline="hover" color="inherit">Destinations</Link>
            <Link href="#" underline="hover" color="inherit">About Us</Link>
            <Link href="#" underline="hover" color="inherit">Contact</Link>
          </Stack>
        </Box>


        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Contact Us
          </Typography>
          <Typography variant="body2">📍 Nairobi, Kenya</Typography>
          <Typography variant="body2">📞 +254 712 345 678</Typography>
          <Typography variant="body2">📧 info@zaphtours.com</Typography>
        </Box>
      </Stack>

      <Typography
        variant="body2"
        textAlign="center"
        sx={{ marginTop: '40px', fontSize: '0.8rem', color: 'black' }}
      >
        © 2025 zaph tours Made by ❤❤❤.
      </Typography>
    </Box>
  );
};



export default Footer
