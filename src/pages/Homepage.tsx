import React from 'react'
import { Box , Typography ,Button, ThemeProvider,Card ,CardMedia,CardContent, Stack , TextField} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



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


function Homepage() {
  return (
<ThemeProvider theme={theme}>
  
    <Box sx={{ position: 'relative', width: '100%', height: '88vh', overflow: 'hidden' }}>
<video  autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%',height: '100%', 
objectFit: 'cover', top: 0, left: 0, zIndex: 1, }}>
      <source src='/starter.mp4' type="video/mp4" />
      Your browser does not support this video.
    </video>

    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" fontFamily={'cursive'} fontWeight={'800'}  color="burlywood" mb={4} >
        Best Safaris and Adventures
      </Typography>
      <Typography variant="h6" fontFamily={'cursive'} fontWeight={'bold'}
        color='burlywood' mb={3}>
        Explore the wild with unforgettable experiences.
      </Typography>
      <Button variant="contained" color="primary" size="large" >
        Book With Us Today
      </Button>
    </Box>
  </Box>

{/* about section */}

  <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    p: 1,
  }}
>
  <Card sx={{ maxWidth: 300, borderRadius: 4, overflow: 'hidden' }}>
    <CardMedia  component="img" image="/zaph.png" />
  </Card>

  <Card
    sx={{
      Width: 800,
      bgcolor: 'burlywood',
      color: 'white',
      p : 4,
      borderRadius: 1,
      boxShadow: 3,
    }}
  >
    <Typography variant="h4" textAlign='center' fontFamily={'cursive'} color='primary' fontSize={'200'} mb={6}>
      About Zaph Tours
    </Typography>
    <Typography variant="body2" fontFamily="cursive"  fontSize= '20px' color='black' >
      Zaph Tours is a premier travel company based in Kenya, offering unforgettable safaris and
      adventure tours across East Africa. From the Maasai Mara to hidden gems, we create personalized
      experiences that connect you to nature and culture. With trusted local experts, we make every
      journey seamless, safe, and full of wonder.
    </Typography>
  </Card>
</Box>
  

{/* DESTINATIONS section */}

<Typography 
  variant="h3" 
  fontFamily="cursive" 
  marginTop="100px" 
  marginBottom="20px" 
  marginLeft="14rem"
  sx={{
    color: 'burlywood',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    borderBottom: '3px solid #8B4513',
    display: 'inline-block',
    paddingBottom: '10px'
  }}
>
  FEATURED DESTINATIONS
</Typography>

<Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 5,
    p: 4,
  }}
>
  <Card sx={{ width: "300px", borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
    <CardContent>
      <CardMedia component="img" image="/mt kenya.jpg" />
      <Typography variant="h5" color="primary" textAlign="center" > Mt. Kenya </Typography>
      <Typography 
      variant="subtitle1" 
      textAlign="center" 
      color="secondary" 
      fontWeight="bold"
      mb={1}
    >
      From $350
    </Typography>
      <Typography variant="body1">
        Mount Kenya is a volcano created approximately 3 million years after the opening of the East African Rift. 
        Before glaciation, it was 7,000 m (23,000 ft) high. It was covered by an ice cap for thousands of years. 
      </Typography>
      <Stack direction="row" spacing={2}>
      <Button variant="contained"  href='https://en.wikipedia.org/wiki/Mount_Kenya'>learn more</Button>
    </Stack>
    </CardContent>
  </Card>

  <Card sx={{ width: "300px", borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
    <CardContent>
      <CardMedia component="img" image="/mt rwenzori .jpg" />
      <Typography variant="h5" textAlign="center" color="primary"> MT Rwenzori </Typography>
      <Typography 
      variant="subtitle1" 
      textAlign="center" 
      color="secondary" 
      fontWeight="bold"
      mb={1}
    >
      From $350
    </Typography>
      <Typography variant="body1">
      The Rwenzori (also known as the Ruwenzori, Rwenzururu or Rwenjura) are a range of mountains in eastern equatorial Africa, 
      located on the border between Uganda and the Democratic Republic of the Congo  
      </Typography>
      <Stack direction="row" spacing={2}>
      <Button variant="contained"  href='https://en.wikipedia.org/wiki/Rwenzori_Mountains'>learn more</Button>
    </Stack>
    </CardContent>
  </Card>

  <Card sx={{ width: "300px", borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
    <CardContent>
      <CardMedia component="img" image="/lake nakuru.jpg" />
      <Typography variant="h5" textAlign="center"  color="primary"> Lake Nakuru </Typography>
      <Typography 
      variant="subtitle1" 
      textAlign="center" 
      color="secondary" 
      fontWeight="bold"
      mb={1}
    >
      From $350
    </Typography>
      <Typography variant="body1">
      Lake Nakuru is one of the Rift Valley lakes, located at an elevation of 1,754 m (5,755 ft) above sea level.
       It lies to the south of Nakuru,
       in the rift valley of Kenya and is protected by Lake Nakuru National Park.
       about 10,000 years ago, Lake Nakuru, together with neighboring Lake Elementaita and Lake Naivasha (60 km further south)
      </Typography>
      <Stack direction="row" spacing={2}>

      <Button variant="contained"  href='https://en.wikipedia.org/wiki/Lake_Nakuru'>learn more</Button>
    </Stack>
    </CardContent>
  </Card>

  <Card sx={{ width: "300px", borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
    <CardContent>
      <CardMedia component="img" image="/coast.jpg" />
      <Typography variant="h5" textAlign="center" color="primary"> Coast </Typography>
      <Typography 
      variant="subtitle1" 
      textAlign="center" 
      color="primary" 
      fontWeight="bold"
      mb={1}
    >
      From $350
    </Typography>
      <Typography variant="body1">
      A coast (coastline, shoreline, seashore) is the land next to the sea or the line that forms the boundary between the land and the ocean or a lake.
       Coasts are influenced by the topography of the surrounding landscape and by aquatic erosion, such as that caused by waves
      </Typography>
      <Stack direction="row" spacing={2}>
     <Button variant="contained"  href='https://en.wikipedia.org/wiki/Coast'>learn more</Button>
    </Stack>
    </CardContent>
  </Card>

  <Card sx={{ width: "300px", borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
    <CardContent>
      <CardMedia component="img" image="/Tsavo National Park .jpg" />
      <Typography variant="h5" textAlign="center" color="primary"> Tsavo National Park </Typography>
      <Typography 
      variant="subtitle1" 
      textAlign="center" 
      color="secondary" 
      fontWeight="bold"
      mb={1}
    >
      From $350
    </Typography>
      <Typography variant="body1">
      Tsavo East National Park is a national park in Kenya with an area of 13,747 km2 (5,308 sq mi).
       It was established in April 1948 and covers a semi-arid area previously known as the Taru Desert. 
      Together with the Tsavo West National Park, it forms an area of about 22,000 square kilometers. 
      </Typography>
      <Stack direction="row" spacing={2}>
       <Button variant="contained"  href='https://en.wikipedia.org/wiki/Tsavo_East_National_Park'>learn more</Button>
    </Stack>
    </CardContent>
  </Card>

  <Card sx={{ width: "300px", borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
    <CardContent>
      <CardMedia component="img" image="/Nairobi National Park.jpg" />
      <Typography variant="h5" textAlign="center" color="primary"> Nairobi National Park </Typography>
      <Typography 
      variant="subtitle1" 
      textAlign="center" 
      color="secondary" 
      fontWeight="bold"
      mb={1}
    >
      From $350
    </Typography>
      <Typography variant="body1">
       This is the first ever national park in the world that has all its entire population of wild animals in the city.
       The animals are from all variations including the big 5 which all symbolize the heritage of the republic of kenya.
       This is one of the most visited Destination in Kenya.
      </Typography>
      <Stack direction="row" spacing={2}>
      <Button variant="contained"  href='https://en.wikipedia.org/wiki/Nairobi_National_Park'>learn more</Button>
    </Stack>
    </CardContent>
  </Card>
</Box>


{/* TESTIMONIAL SECTION */}



<Typography 
  variant="h3" 
  fontFamily="cursive" 
  marginTop="60px" 
  marginBottom="20px" 
  marginLeft="16rem"
  sx={{
    color: 'burlywood',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    borderBottom: '3px solid #8B4513',
    display: 'inline-block',
    paddingBottom: '10px'
  }}
>
  WHAT OUR CLIENTS SAY
</Typography>

<Box sx={{ maxWidth: 1200,color:'burlywood', mx: '30px', px: 2 }}>
  <Slider
    dots={true}
    infinite={true}
    speed={900}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={false}
    autoplaySpeed={4}
    responsive={[
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ]}
  >
    <div>
      <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
        <CardContent>
          <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center">
            "The safari was magical — I saw the Big Five! Zaph made everything seamless and unforgettable."
          </Typography>
          <Typography variant="subtitle1" textAlign="center" mt={2} fontWeight="bold">
            — Janet M.
          </Typography>
        </CardContent>
      </Card>
    </div>

    <div>
      <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
        <CardContent>
          <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center">
            "Their attention to detail and the guides' knowledge blew my mind. Zaph Tours is unmatched!"
          </Typography>
          <Typography variant="subtitle1" textAlign="center" mt={2} fontWeight="bold">
            — Elijah K.
          </Typography>
        </CardContent>
      </Card>
    </div>

    <div>
      <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
        <CardContent>
          <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center">
            "I felt so safe and pampered. My kids loved every moment  thank you, Zaph!"
          </Typography>
          <Typography variant="subtitle1" textAlign="center" mt={2} fontWeight="bold">
            — Fatma N.
          </Typography>
        </CardContent>
      </Card>
    </div>
  </Slider>
</Box>


{/* NEWSLETTER SECTION */}

<Typography 
  variant="h3" 
  fontFamily="cursive" 
  marginTop="100px" 
  marginBottom="20px" 
  marginLeft="16rem"
  sx={{
    color: 'burlywood',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    borderBottom: '3px solid #8B4513',
    display: 'inline-block',
    paddingBottom: '10px'
  }}
>
    GET IN TOUCH WITH US
</Typography>


<Box 
  sx={{
    margin: '30px auto',
    width: '100%',
    maxWidth: '1190px',
    backgroundColor: 'burlywood',
    borderRadius: '12px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
<Typography 
  variant="h6"
  sx={{ color: 'teal', fontStyle: 'italic', marginTop: '10px', textAlign: 'center' }}
>
   Subscribe to our newsletter 
</Typography>
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%">
    <TextField 
      fullWidth 
      label="First Name" 
      variant="outlined" 
      required
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
    <TextField 
      fullWidth 
      label="Email Address" 
      variant="outlined" 
      required
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
    <TextField 
      fullWidth 
      label="Your Message" 
      variant="outlined" 
    required
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
  </Stack>

  <Button
   variant="contained"
   sx={{
     backgroundColor: '#fff',
    color: '#5C4033',
     fontWeight: 'bold',
   '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  submit
                </Button>
  <Typography 
  variant="caption"
  sx={{ color: 'black', fontStyle: 'italic', marginTop: '10px', textAlign: 'center' }}
>
  🎁 Sign up and get informed of our unbeatable offers 🥳
</Typography>
</Box>

      


    










</ThemeProvider>
 ); 
}

export default Homepage;
