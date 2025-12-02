import { Box, Typography } from '@mui/material'
import React from 'react'

export default function My_Services() {
  return (
    <Box sx={{ height:'100vh',marginTop:{xs:'10vh',md:'15vh'} ,backgroundColor:'#000000',color:'white',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
        <Typography variant='h5' sx={{ fontSize: { xs: "25px", md: "45px",paddingTop:'5vh' } }}>
            My Services. My 
            <Box
                component="span"
                sx={{
                color: "#ff008b",
                fontFamily: "Great Vibes",
                fontWeight: 200,
                fontSize: { xs: "40px", md: "65px" }, 
                px: 1,
                display: "inline-block",
                }}
            >
                expertise
            </Box>
        </Typography>

        <Box sx={{ marginTop:{xs:'10vh',md:'20vh'},padding:'30px' }}>
            <Typography variant='h3' sx={{ fontWeight:{xs:'150',md:'450'},fontFamily:'inter',padding:'15px'  }}>
                #JavaScript  {""}
                #React {""}
                #NodeJS {""}
                #ExpressJS {""}
                #PostgreSQL {""}
                #RESTAPIs {""}
                #CRUDOperations {""}
                #DatabaseDesign {""}
                #ResponsiveDesign {""}
                #Authentication {""}
                #FullStackDevelopment {""}
                #APIIntegration {""}
            </Typography>
        </Box>
       
    </Box>
  )
}
