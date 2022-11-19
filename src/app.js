
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom';

import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail  } from './components';

// import { Feed } from '@mui/icons-material';

import {Box} from '@mui/material';

const body = document.querySelector('body')
body.style.padding = '0'
body.style.margin = '0'
const App = () =>(

    <BrowserRouter>
        <Box sx={{ backgroundColor : '#000',
            m:0 ,  
            top:0,
            p:1.1

        }}>
            <Navbar/>
                <Routes>

                    <Route path="/" exact element ={<Feed />} />        
                    <Route path="/video/:id"  element ={<VideoDetail />} />        
                    <Route path="/search/:searchTerm" element ={<SearchFeed />} />        
                    <Route path="/channel/:id"   element ={<ChannelDetail />} />        
                </Routes>    
            
        </Box>    
    </BrowserRouter>








)





export default App;