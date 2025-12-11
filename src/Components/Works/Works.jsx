import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Works() {
  return (
    <Box sx={{ height:'100vh',padding:'55px' }}>
        <Typography variant="h1"sx={{ fontSize:{xs:'70px',md:'155px'},fontWeight:'550'}}>Works.</Typography>
        <Stack sx={{ height:'70vh',justifyContent:'space-around'}}>
            <Box sx={{ display:'flex',justifyContent:'space-between',height:'15%'  }}>
                <Typography sx={{ fontSize:'60px',fontFamily:'Great Vibes',padding:'0' }}>001</Typography>
                <Box sx={{ padding:'0',display:'flex',flexDirection:'column',alignItems:'flex-end' }}>
                    <Typography sx={{ fontSize:'60px'}}>Backend</Typography>
                    <Typography>Id qui aliquip eiusmod est sint laboris et veniam.</Typography>
                    <Button sx={{ padding:'0' }}>Explore</Button>
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
