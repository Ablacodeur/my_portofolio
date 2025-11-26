import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import me_img from '../../assets/resources/me.png'

export default function Hero() {
  return (
    <Stack sx={{ height:'100vh',display:'flex', flexDirection:{xs:'column-reverse',md:'row',justifyContent:'space-around'} }}>
        <Box sx={{ height:'80%' }}>
            <img src={me_img} style={{ width:'100%',height:'90vh'}}></img>
        </Box>
        <Box sx={{ height:'80%',textAlign:'start', marginTop:{md:'100px'},
                display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <Typography variant='h3' sx={{fontFamily:'inter',fontWeight:'900' }}>Full stack web developer</Typography>
            <Typography variant='h7' sx={{ color:'#777272',fontWeight:'400' }}> I'm Abla Victoire Agboli. <br /> 
                I create web experiences that hit hard and stand out. 
            </Typography>
            <Button
            variant="text"
            sx={{
                padding: 0,
                justifyContent: "flex-start",
                textAlign: "left",
                display: "flex",
                alignItems: "flex-start",
                marginTop:'30px'
            }}
            >
            <Typography
                sx={{
                textDecoration: "underline",
                color: "black",
                fontSize: "35px",
                textAlign: "left",
                fontFamily:'inter',
                fontWeight:'600'
                }}
            >
                Craft like this
            </Typography>
            </Button>

                        <Button
            variant="text"
            sx={{
                padding: 0,
                justifyContent: "flex-start",
                textAlign: "left",
                display: "flex",
                alignItems: "flex-start",
                marginTop:'30px'
            }}
            >
            <Typography
                sx={{
                color: "#ff008b",
                fontSize: "25px",
                textAlign: "left",
                fontFamily:'inter',
                fontWeight:'800'
                }}
            >
                Portofolio
            </Typography>
            </Button>

        </Box>
    </Stack>
  )
}
