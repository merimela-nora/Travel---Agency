import React from 'react'
import {Card , CardMedia , CardContent ,Typography,Box, Button, Stack} from '@mui/material';

function Destinations() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 2,
      p: 2,
    }}>

      <Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/mt kenya.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Mt. Kenya</Typography>
    <Typography variant="body2" color="text.secondary">
      Climb to Kenya's highest point and witness breathtaking alpine views.
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2">Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>

<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/cultural1.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold"> China</Typography>
    <Typography variant="body2" color="text.secondary">
      Travel to China and witness breathtaking alpine views.
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2">Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>
<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/wildlife1.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Tanzania</Typography>
    <Typography variant="body2" color="text.secondary">
      experience the safari culture with us today
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2">👥 Group: $1,200</Typography>
      <Typography variant="body2">🧍 Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>

<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/honeymoon.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Bali</Typography>
    <Typography variant="body2" color="text.secondary">
      Take an adventure to Bali and experience the blue beaches.
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2"> Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>
<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/wellness 2.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Mozambique</Typography>
    <Typography variant="body2" color="text.secondary">
      experience wellness nature with the outdoor today
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2"> Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>
<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/beach1.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Mauritius</Typography>
    <Typography variant="body2" color="text.secondary">
      explore the cool and blue sandy beaches of mauritius
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2"> Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>

<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/culinary1.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Japan</Typography>
    <Typography variant="body2" color="text.secondary">
      take you to engage with beautiful meals from Japan
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2">Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>
<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/adventure.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Cuba</Typography>
    <Typography variant="body2" color="text.secondary">
      Climb to machu pichuu which is highest and witness breathtaking apex views.
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2">Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>
<Card sx={{ maxWidth: 330, boxShadow: 5, borderRadius: 3 , margin: 3 }}>
  <CardMedia
    component="img"
    height="180"
    image="/luxury.jpg"
  />
  <CardContent>
    <Typography variant="h6" fontWeight="bold">Greece</Typography>
    <Typography variant="body2" color="text.secondary">
      Talk luxury in the heart of Greece where all love begins to flow
    </Typography>
    <Stack direction="row" spacing={2} marginTop={2}>
      <Typography variant="body2"> Group: $1,200</Typography>
      <Typography variant="body2"> Solo: $300</Typography>
    </Stack>
    <Button variant="contained" href='https://en.wikipedia.org/wiki/Mount_Kenya' size="small" sx={{ marginTop: 2, backgroundColor: '#D4A373' }}>
      Learn More →
    </Button>
  </CardContent>
</Card>
    </Box>
    




  )
}

export default Destinations;
