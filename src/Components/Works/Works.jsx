import { Box, Button, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import workdemo1c from '../../assets/resources/work1c.png'
import workdemo1 from '../../assets/resources/work1.png'
import workdemo2c from '../../assets/resources/work2c.png'
import workdemo2 from '../../assets/resources/work2.png'
import workdemo3c from '../../assets/resources/work3c.png'
import workdemo3 from '../../assets/resources/work3.png'
import workdemo4c from '../../assets/resources/work4c.png'
import workdemo4 from '../../assets/resources/work4.png'
import workdemo5c from '../../assets/resources/work5c.png'
import workdemo5 from '../../assets/resources/work5.png'
import workdemo6c from '../../assets/resources/work6c.png'
import workdemo6 from '../../assets/resources/work6.png'



import 'swiper/css';
import 'swiper/css/pagination';
// Modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Works() {
   const [openSwiper, setOpenSwiper] = useState(null);


  return (
    <section id='work'>
    <Box sx={{ height:'',padding:'55px' }}>
        <Typography variant="h1"sx={{ fontSize:{xs:'70px',md:'155px'},fontWeight:'550'}}>Works.</Typography>
        <Stack sx={{ height:'',justifyContent:'space-around'}}>
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:{xs:'30px',md:'60px'},fontFamily:'Great Vibes',padding:'0' }}>001</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:{xs:'25px',md:'60px'}}}>Home Chef.</Typography>
                        <Typography>Web application that allows users to explore and search for recipes by category, view meal details and ingredients, 
                        and enjoy a responsive and modern user interface.</Typography>
                            <Button
                            sx={{ padding: '0',color:'#ff008b' }}
                            onClick={() =>
                                setOpenSwiper(openSwiper === 1 ? null : 1)
                            }
                            >
                            Explore
                            </Button>

                    </Box>
                </Box>
                <hr />
                {openSwiper===1 && (
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
                                speed={2500} // fluidité de la transition
                                loop={true} // boucle infinie important
                                className="mySwiper"
                                >
                                <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo1c} /></SwiperSlide>
                                <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo1} /></SwiperSlide>

                            </Swiper>                    
                        </Box>
                        <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Technologies</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>React • JavaScript • API • Responsive UI</Typography>
                            </Box>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Fonctionnalities</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>
                                        .Browse recipes by category (e.g., Chicken, Beef, Dessert) <br />
                                        .Search functionality with instant results  <br />
                                        .Detailed recipe view with ingredients and visuals  <br />
                                        .Clean UI with modern layout and responsive behavior  <br />
                                        .API integration (fetching data from a public meals API)  <br />
                            </Typography>
                            </Box>
                            <Box>
                            <a
                                href="https://recipe-two-bice.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#ff008b",fontSize:'25px' }}
                            >
                                Visit the site ↝
                            </a>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
            {openSwiper && ( <hr />)}
           
            
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:{xs:'30px',md:'60px'},fontFamily:'Great Vibes',padding:'0' }}>002</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:{xs:'25px',md:'40px'}}}>User Portfolio Management.</Typography>
                        <Typography>Full-stack web application that allows users to create and manage personal portfolios, upload projects, and display dynamic profile information through a secure backend system.
                            <br />This platform provides a complete portfolio management workflow from authentication to project publication.</Typography>
                            <Button
                            sx={{ padding: '0',color: "#ff008b" }}
                            onClick={() =>
                                setOpenSwiper(openSwiper === 2 ? null : 2)
                            }
                            >
                            Explore
                            </Button>

                    </Box>
                </Box>
                <hr />
                {openSwiper===2 && (
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
                                speed={2500} // fluidité de la transition
                                loop={true} // boucle infinie important
                                className="mySwiper"
                                >
                                <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo2} /></SwiperSlide>
                                <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo2c} /></SwiperSlide>
                            </Swiper>                    
                        </Box>
                        <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Technologies</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>React · Node.js · Express · PostgreSQL · REST API</Typography>
                            </Box>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Fonctionnalities</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>
                                            .User authentication system <br />
                                            .Create, read, update and delete projects (CRUD) <br />
                                            .Dynamic profile management <br />
                                            .Backend API connected to PostgreSQL database <br />
                                            .Image upload and project management <br />
                                            .Frontend ↔ Backend communication via REST API <br />
                                            .Fully responsive dashboard interface <br />
                            </Typography>
                            </Box>
                            <Box>
                            <a
                                href="https://user-portofolio-management.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#ff008b",fontSize:'25px' }}
                            >
                                Visit the site ↝
                            </a>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
            {openSwiper && ( <hr />)}
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:{xs:'30px',md:'60px'},fontFamily:'Great Vibes',padding:'0' }}>003</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:{xs:'25px',md:'60px'}}}>Whatowatch.</Typography>
                        <Typography>Web application that helps users discover movies and TV shows, explore content by category, and view detailed information through an intuitive and visually engaging interface.</Typography>
                            <Button
                            sx={{ padding: '0' , color: "#ff008b"}}
                            onClick={() =>
                                setOpenSwiper(openSwiper === 3 ? null : 3)
                            }
                            >
                            Explore
                            </Button>

                    </Box>
                </Box>
                <hr />
                {openSwiper===3 && (
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
                                speed={2500} 
                                loop={true} // boucle infinie important
                                className="mySwiper"
                                >
                                <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo3} /></SwiperSlide>
                                <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo3c} /></SwiperSlide>
                            </Swiper>                    
                        </Box>
                        <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Technologies</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>React · JavaScript · API · Responsive Design</Typography>
                            </Box>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Fonctionnalities</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>
                                            .Browse movies and TV shows <br />
                                            .Dynamic content rendering from external API <br />
                                            .Category-based exploration <br />
                                            .Movie details display (poster, overview, rating, etc.) <br />
                                            .Responsive layout for desktop and mobile <br />
                                            Clean UI inspired by streaming platforms 
                            </Typography>
                            </Box>
                            <Box>
                            <a
                                href="https://watowatch-trainnig.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#ff008b",fontSize:'25px' }}
                            >
                                Visit the site ↝
                            </a>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
            {openSwiper && ( <hr />)}
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:{xs:'30px',md:'60px'},fontFamily:'Great Vibes',padding:'0' }}>004</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:{xs:'25px',md:'60px'}}}>Task Manager.</Typography>
                        <Typography>Full-stack task management web application that allows users to create, organize, update, and delete tasks through a clean and intuitive interface connected to a backend system.</Typography>
                            <Button
                            sx={{ padding: '0', color: "#ff008b" }}
                            onClick={() =>
                                setOpenSwiper(openSwiper === 4 ? null : 4)
                            }
                            >
                            Explore
                            </Button>

                    </Box>
                </Box>
                <hr />
                {openSwiper===4 && (
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
                                speed={2500} 
                                loop={true} // boucle infinie important
                                className="mySwiper"
                                >
                                <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo4} /></SwiperSlide>
                                <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo4c} /></SwiperSlide>
                            </Swiper>                    
                        </Box>
                        <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Technologies</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>React · Redux · Node.js · Express · PostgreSQL</Typography>
                            </Box>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Fonctionnalities</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>
                                            .Create, update and delete tasks <br />
                                            .Task status management<br />
                                            .Real-time UI updates<br />
                                            .Backend API connected to PostgreSQL<br />
                                            .Redux state management<br />
                                            .Responsive dashboard layout<br />
                                            .Full frontend ↔ backend data flow 
                            </Typography>
                            </Box>
                            <Box>
                            <a
                                href="https://task-list-inky.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#ff008b",fontSize:'25px' }}
                            >
                                Visit the site ↝
                            </a>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>

            {openSwiper && ( <hr />)}
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:{xs:'30px',md:'60px'},fontFamily:'Great Vibes',padding:'0' }}>005</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:{xs:'25px',md:'60px'}}}>Quizy.</Typography>
                        <Typography>Interactive quiz web application that allows users to answer questions, track their progress, and receive instant feedback through a dynamic and engaging user interface.</Typography>
                            <Button
                            sx={{ padding: '0', color: "#ff008b" }}
                            onClick={() =>
                                setOpenSwiper(openSwiper === 5 ? null : 5)
                            }
                            >
                            Explore
                            </Button>

                    </Box>
                </Box>
                <hr />
                {openSwiper===5 && (
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
                                speed={2500} 
                                loop={true} // boucle infinie important
                                className="mySwiper"
                                >
                                <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo5} /></SwiperSlide>
                                <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo5c} /></SwiperSlide>
                            </Swiper>                    
                        </Box>
                        <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Technologies</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>React · JavaScript · API · UI Logic</Typography>
                            </Box>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Fonctionnalities</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>
                                            .Multiple-choice quiz system<br />
                                            .Dynamic question rendering<br />
                                            .Score calculation<br />
                                            .User answer validation<br />
                                            .Real-time feedback<br />
                                            .Responsive layout<br />
                                            .Clean and interactive UI
                            </Typography>
                            </Box>
                            <Box>
                            <a
                                href="https://quizy-ruby.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#ff008b",fontSize:'25px' }}
                            >
                                Visit the site ↝
                            </a>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>

            {openSwiper && ( <hr />)}
            <Box sx={{ display:'flex',justifyContent:'space-between',flexDirection:'column'  }}>
                <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%',alignContent:'' }}>
                    <Typography sx={{ fontSize:{xs:'30px',md:'60px'},fontFamily:'Great Vibes',padding:'0' }}>006</Typography>
                    <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'start',width:'40%' ,marginBottom:'50px'}}>
                        <Typography sx={{ fontSize:{xs:'25px',md:'60px'}}}>Weather App.</Typography>
                        <Typography>Weather web application that provides real-time weather information based on user location or searched cities, delivering accurate data through a clean and responsive interface.</Typography>
                            <Button
                            sx={{ padding: '0', color: "#ff008b" }}
                            onClick={() =>
                                setOpenSwiper(openSwiper === 6 ? null : 6)
                            }
                            >
                            Explore
                            </Button>

                    </Box>
                </Box>
                <hr />
                {openSwiper===6 && (
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
                                speed={2500} 
                                loop={true} // boucle infinie important
                                className="mySwiper"
                                >
                                <SwiperSlide><img style={{ width:'100%',height:"auto" ,overflow:'hidden',objectFit:'contain'}} src={workdemo6} /></SwiperSlide>
                                <SwiperSlide><img style={{ width:'100%',height:"auto",overflow:'hidden',objectFit:'contain' }} src={workdemo6c} /></SwiperSlide>
                            </Swiper>                    
                        </Box>
                        <Box sx={{ width:'40%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Technologies</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>React · JavaScript · API · Responsive Designc</Typography>
                            </Box>
                            <Box>
                            <Typography variant='h6' sx={{ fontSize:'20px',fontFamily:'inter',padding:'0'}}>Fonctionnalities</Typography>
                            <Typography variant='h7' sx={{ fontSize:'17px',fontFamily:'inter',padding:'0' }}>
                                            .Real-time weather data display
                                            .City search functionality
                                            .Temperature, humidity, and conditions overview
                                            .Dynamic data updates from external API
                                            .Responsive layout for all screen sizes
                                            .Clean and minimal UI
                            </Typography>
                            </Box>
                            <Box>
                            <a
                                href="https://weather-xi-flax.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#ff008b",fontSize:'25px' }}
                            >
                                Visit the site ↝
                            </a>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>


            


        </Stack>
        
    </Box>
    </section>
  )
}
