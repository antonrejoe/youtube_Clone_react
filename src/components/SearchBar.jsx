
import React from 'react'

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { SearchIcon }from '@mui/icons-material';
import { IconButton, Paper  } from '@mui/material';
import {SearchIcon} from '@mui/icons-material/Search';
const SearchBar = () => {
  return (


    <Paper
    display="flex"
    alignItems="center"
      component="form"
      onSubmit={()=> {}}
      elevation={3}
      sx={{
        borderRadius:'10px',
        pl:2,
        m:'10px'

      }}
      
    >
     <input
     
     placeholder='Search...'
     value=""
     onChange={()=> {}}

     sx={{
      p:'4%'
     }}
     /> 
    <IconButton
      type="submit"
      sx={{
        color:"red"
      }}

    >
    <SearchIcon/>
    </IconButton>
    </Paper>
  )
} 

export default SearchBar


