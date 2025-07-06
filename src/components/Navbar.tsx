import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button , IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home} from '@mui/icons-material';


function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'burlywood'}}>
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }} marginLeft={'30px'}>
        🌏 Zaph Tours 🌏
        </Typography>
        
<Stack direction="row" spacing={4}>
          <Button color="inherit" component={Link} to="/">
          <IconButton size="small" edge="start" color="inherit">
        < Home/>
        </IconButton>
            Homepage
          </Button>
          <Button color="inherit" component={Link} to="/destinations">
            Destinations
          </Button>
          <Button color="inherit" component={Link} to="/trips">
            Trips
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
