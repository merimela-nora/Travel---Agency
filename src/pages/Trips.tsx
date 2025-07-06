import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Trips() {

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
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
    ],
  };

  const imageSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box sx={{ maxWidth: 1100, color: 'burlywood', margin: '30px auto', px: 2 }}>
      <Slider {...mainSliderSettings}>
        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/honeymoon.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/honeymoon1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
                🌹 Honeymoon Safari
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
                7 days of luxury, romance, and adventure through Kenya’s most scenic destinations.
              </Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
                🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/family.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/family1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              👨‍👨‍👧‍👦 family
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  7 unforgettable days of bonding, laughter, and discovery across Kenya’s most family-friendly destinations.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per family
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/adventure.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/adventure1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🧗 Adventure Tour
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  From mountains to rapids  thrill-seekers get 7 days of pure adrenaline and awe in Kenya’s wildest corners.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per person
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                   VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/cultural1.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/cultural2.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🏛️ Cultural Tour
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  Discover the heartbeat of Kenya through local traditions, cuisine, and stories during this enriching 7-day cultural journey.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per person
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                 VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/wildlife.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/wildlife1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🦁 Wildlife Safari
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  Get close to the Big Five and beyond 7 days of unforgettable game drives and starlit safari nights.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/eco tours.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/eco tours1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🌿 Eco-Tour
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  Explore nature responsibly 7 days of sustainable travel through world's lush parks and hidden eco-gems.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/luxury.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/luxury1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              💎 Luxury Vacation
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  Indulge in elegance and ease  7 days of top-tier travel with fine dining, first-class stays, and curated experiences.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/beach1.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/beach2.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🏖️ Beach Holiday
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  Sun, sea, and serenity enjoy 7 days of pure bliss along Kenya’s sparkling coastline.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                  VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/wellness.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/wellness 2.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🧘 Wellness Retreat
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
                7 days of luxury, romance, and adventure through Kenya’s most scenic destinations.
              </Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033"mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                 VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card sx={{ bgcolor: 'burlywood', p: 4, boxShadow: 3, borderRadius: 3, mx: 1 }}>
            <Slider {...imageSliderSettings}>
              <CardMedia
                component="img"
                height="300"
                image="/culinary.jpg"
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
              <CardMedia
                component="img"
                height="300"
                image="/culinary1.jpg"        
                sx={{ borderRadius: 2, objectFit: 'cover' }}
              />
            </Slider>
            <CardContent>
              <Typography variant="h6" fontFamily="cursive" fontWeight="bold" textAlign="center">
              🍲 Culinary Tour
              </Typography>
              <Typography variant="body1" fontFamily="cursive" fontStyle="italic" textAlign="center" mt={1}>
  Taste your way through Kenya 7 days of delicious discoveries, from coastal seafood to vibrant street cuisine.
</Typography>
              <Typography variant="body2" textAlign="center" fontWeight="bold" color="green" mt={2}>
                💰 $1,900 per couple
              </Typography>
              <Typography variant="body2" textAlign="center" fontStyle="italic" color="#5C4033" mt={2}>
              🎁 15% OFF THIS SUMMER
              </Typography>
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#5C4033',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f5deb3' },
                  }}
                >
                 VIEW OTHER PACKAGES →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>























































      </Slider>
    </Box>






  );
};

export default Trips;
