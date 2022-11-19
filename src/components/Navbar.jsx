
import { Link, Stack } from '@mui/material';
import React from 'react';

import { Logo } from './';

import SearchBar from './SearchBar';

const Navbar = () => (

  <Stack
    
  direction="row"
  alignItems="center"
  
  sx={{
    position:'sticky',
    justifyContent:"space-between",
    m:"0" ,  
    top:"0"
  }
}
  >


  <Link to='/' 
    display="flex"
   alignItems="center"

  >
    
    <img src={Logo} alt="logo" height={45}
  
    />
  
  </Link>
  <SearchBar/>
   
  </Stack>


  
)
 

export default Navbar

