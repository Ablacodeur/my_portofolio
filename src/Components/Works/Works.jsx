import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import workdemo1 from '../../assets/resources/workSlide1.png'
import workdemo2 from '../../assets/resources/workSlide2.png'


import 'swiper/css';
import 'swiper/css/pagination';


// Modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Works() {
  return (
    <Box sx={{ height:'100vh',padding:'55px' }}>
        <Typography variant="h1"sx={{ fontSize:{xs:'70px',md:'155px'},fontWeight:'550'}}>Works.</Typography>
        <Stack sx={{ height:'70vh',justifyContent:'space-around'}}>
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:'60px',fontFamily:'Great Vibes',padding:'0' }}>001</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:'60px'}}>Backend</Typography>
                        <Typography>Id qui aliquip eiusmod est sint laboris et veniam.</Typography>
                        <Button sx={{ padding:'0' }}>Explore</Button>
                    </Box>
                </Box>
                <hr />

                <Box sx={{ display:'flex',justifyContent:'space-between',height:'50vh',marginTop:'20px'}}>
                    
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',width:'50%' }}>
                        <Swiper
                            direction="vertical"
                            modules={[Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 500,
                                disableOnInteraction: false, // continue même si le user touche
                            }}
                            speed={600} // fluidité de la transition
                            loop={true} // boucle infinie important
                            className="mySwiper"
                            >
                            <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo1} /></SwiperSlide>
                            <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo2} /></SwiperSlide>
                        </Swiper>                    
                    </Box>
                    <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Box>
                        <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Id qui aliquip eiusmod est .</Typography>
                        <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>Esse o nulla est in eniempor ipsum minim eu adipisicing dolore pariatur commodo labore occaecat qui.</Typography>
                        </Box>
                        <Box>
                        <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Id qui aliquip eiusmod est .</Typography>
                        <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>Esse o nulla est in eniempor ipsum minim eu adipisicing dolore pariatur commodo labore occaecat qui.</Typography>
                        </Box>
                        <Box>
                        <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Id qui aliquip eiusmod est .</Typography>
                        <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>Esse o nulla est in eniempor ipsum minim eu adipisicing dolore pariatur commodo labore occaecat qui.</Typography>
                        </Box>
                        <Box >
                        <Typography  variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}  >  Visite the site   </Typography>
                        </Box>


                    </Box>
                </Box>

            </Box>
            <hr />
            <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%' }}>
                <Typography sx={{ fontSize:'60px',fontFamily:'Great Vibes' }}>002</Typography>
                <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'flex-end' }}>
                    <Typography sx={{ fontSize:'60px'}}>FullStack</Typography>
                    <Typography>Id qui aliquip eiusmod est sint laboris et veniam.</Typography>
                    <Button sx={{ padding:'0' }}>Explore</Button>
                </Box>
            </Box>
             <hr />
            <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%' }}>
                <Typography sx={{ fontSize:'60px',fontFamily:'Great Vibes' }}>003</Typography>
                <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'flex-end' }}>
                    <Typography sx={{ fontSize:'60px'}}>Coming project</Typography>
                    <Typography>Id qui aliquip eiusmod est sint laboris et veniam.</Typography>
                    <Button sx={{ padding:'0' }}>Explore</Button>
                </Box>
            </Box>
        </Stack>
        
    </Box>
  )
}
