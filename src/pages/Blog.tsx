import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Blog() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        bgcolor: 'cornsilk',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
        textAlign: 'center',
      }}
    >
      <ArticleOutlinedIcon sx={{ fontSize: 80, color: 'black', mb: 2 }} />

      <Typography variant="h6" fontFamily="cursive" color="brown" marginBottom={'20px'}>
        Our blogs will be up soon ☕
      </Typography>

      <Typography
        variant="body1"
        fontFamily="cursive"
        fontStyle="italic"
        color="burlywood"
        maxWidth={500}
        mb={4}
      >
        We are working on exciting stories, travel tips, and safari tales to inspire your next adventure. Stay tuned!
      </Typography>

    </Box>
  )
}

export default Blog
