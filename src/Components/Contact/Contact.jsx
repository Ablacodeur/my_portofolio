import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import me_img from '../../assets/resources/footerImage.png'


export default function Contact() {
  return (
    <Box sx={{ height:{xs:'60vh',md:'100vh'},margin:'10px',position:'absolute',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'100vw',padding:{xs:'15px',md:'30px',overflow:'hidden'} }}>
      <Typography variant='h1' sx={{ fontSize:{xs:'100px',md:'300px'} ,color:'#ff008b',fontFamily:'Corinthia',textAlign:'center',display:'flex',zIndex:'2',position:'relative'}}>Nice to meet</Typography>
      <Box sx={{ display:'flex',justifyContent:'center',bottom:{xs:'70px',md:'150px'},position:'relative',height:{xs:'30vh',md:'60vh'},alignItems:'center',width:{xs:'250px',md:'550px'}}}>
        <img src={me_img} style={{ height:'100%',width:'100%'}} />
      </Box>
      <Box sx={{textAlign:'center', alignItems:'center', display:'flex',justifyContent:'space-between',flexDirection:'row',backgroundColor:'black',padding:'5px',color:'white',width:'100vw',height:'15vh',overflow:'hidden'}}>
        <Typography sx={{ fontSize:{xs:'15px',md:'23px'} }}>Linkedin</Typography>
        <Typography sx={{ fontSize:{xs:'15px',md:'23px'} }}>Github</Typography>
        <Typography sx={{ fontSize:{xs:'15px',md:'23px'} }}> Email</Typography>
        <Typography sx={{ fontSize:{xs:'15px',md:'23px'} }}>Contact</Typography>
      </Box>
        <Box sx={{padding:'20px',width:'100vw',textAlign:'center'}}>
        <Typography sx={{ fontSize:{xs:'12px',md:'20px'} }}>Located in Canada</Typography>
      </Box>

    </Box>
  )
}
