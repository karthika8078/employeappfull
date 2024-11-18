import { Clear } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <Box>
      <AppBar   sx={{height:'50px'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* <MenuIcon/> */}
          </IconButton>
          <img
              src="https://static.vecteezy.com/system/resources/previews/007/688/840/original/education-logo-free-vector.jpg" 
              alt="Logo"
              style={{ height: 30, marginRight: 15, marginBottom: 10 }}
            />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FUTURE LEARNING
          </Typography>
          <Link to={'/'}><Button  color="inherit" sx={{color: 'white'}}>Home</Button></Link>
          <Link to={'/course'}><Button  color="inherit" sx={{color: 'white'}}>add</Button></Link>
        <Button  color="inherit" sx={{color: 'white'}} >logout</Button>
          
           </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Navbar