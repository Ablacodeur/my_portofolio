import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function AboutMyCode() {
  return (
    <Box sx={{ backgroundColor:'#000000',color:'white'}}>
        <Stack sx={{ height:'100vh',display:'flex',alignItems:'center',justifyContent:'center' }}> 
            <Typography
            variant="h2"
            sx={{
                fontWeight: 550,
                fontSize: { xs: "20px", md: "45px" },
                padding: "25px",
            }}
            >
            For me, writing{" "}
            <Box
                component="span"
                sx={{
                color: "#ff008b",
                fontFamily: "Great Vibes",
                fontWeight: 200,
                fontSize: { xs: "40px", md: "75px" }, 
                px: 1,
                display: "inline-block",
                }}
            >
                code
            </Box>{" "}
            means simplicity, precision, and shaping a smooth user journey.
            </Typography>
        </Stack>

        <Stack sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center' }}> 
            <Typography
            variant="h2"
            sx={{
                fontWeight: 550,
                fontSize: { xs: "30px", md: "55px" },
                padding: "25px",
            }}
            >
            Create fast. on
            <Box
                component="span"
                sx={{
                color: "#ff008b",
                fontFamily: "Great Vibes",
                fontWeight: 200,
                fontSize: { xs: "40px", md: "75px" }, 
                px: 1,
                display: "inline-block",
                }}
            >
                time
            </Box>
            .on brief.
            </Typography>
        </Stack>

        <Stack sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center' }}> 
            <Typography
            variant="h2"
            sx={{
                fontWeight: 550,
                fontSize: { xs: "20px", md: "45px" },
                padding: "25px",
            }}
            >
            Bring ideas and adjustements grounded in{" "}
            <Box
                component="span"
                sx={{
                color: "#ff008b",
                fontFamily: "Great Vibes",
                fontWeight: 200,
                fontSize: { xs: "40px", md: "75px" }, 
                px: 1,
                display: "inline-block",
                }}
            >
                design
            </Box>{" "}
            principles.
            </Typography>
        </Stack>
        <Stack sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center' }}> 
            <Typography
            variant="h2"
            sx={{
                fontWeight: 550,
                fontSize: { xs: "20px", md: "45px" },
                padding: "25px",
            }}
            >
            JavaScript, React, and PostgreSQL are my{" "}
            <Box
                component="span"
                sx={{
                color: "#ff008b",
                fontFamily: "Great Vibes",
                fontWeight: 200,
                fontSize: { xs: "30px", md: "65px" }, 
                px: 1,
                display: "inline-block",
                }}
            >
               key tools
            </Box>{" "}
            to build<br /> modern and scalable applications.
            </Typography>
        </Stack>
        <Stack sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center' }}> 
            <Typography
            variant="h2"
            sx={{
                fontWeight: 550,
                fontSize: { xs: "20px", md: "45px" },
                padding: "25px",
            }}
            >
            Building real-world projects and{" "}
            <Box
                component="span"
                sx={{
                color: "#ff008b",
                fontFamily: "Great Vibes",
                fontWeight: 200,
                fontSize: { xs: "40px", md: "75px" }, 
                px: 1,
                display: "inline-block",
                }}
            >
                open
            </Box>{" "}
            to meaningful collaborations.
            </Typography>
        </Stack>

        
       
    </Box>
  )
}


