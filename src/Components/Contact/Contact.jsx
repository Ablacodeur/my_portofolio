import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import me_img from '../../assets/resources/me.png'


export default function Contact() {
  return (
    <>
      {/* 📱 MOBILE : texte → image → boutons */}
      <Stack
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          minHeight: '100vh',
          gap: 3,
          alignItems: 'center'
        }}
      >
        {/* 1️⃣ TEXTE */}
        <Box sx={{ width: '100%', textAlign: 'start', mt: 3, px: 2 }}>
          <Typography variant='h3' sx={{ fontFamily: 'inter', fontWeight: '900' }}>
            Nice to meet
          </Typography>
          <Typography sx={{ color: '#777272', fontWeight: '400', mt: 3}}>
            Located in Canada. Online - near you <br />
          </Typography>

        {/* 3️⃣ BUTTONS */}
        <Box sx={{ width: '100%',px: 2, mb: 4 ,
                display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <Button variant="text" sx={{ padding: 0, mt: 2 }}>
            <Typography
                sx={{
                textDecoration: 'underline',
                color: 'black',
                fontSize: '35px',
                fontFamily: 'inter',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px', 
                textTransform: 'none',
                }}
            >
                Craft like this

                <Box
                component="span"
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1.05em',   
                    height: '1.8em', 
                    
                }}
                >
                <svg
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2 8h2v2h2v2h2v2h2v-2h2v-2h2v2h2v2h2v2h-4v2h8v-8h-2v4h-2v-2h-2v-2h-2V8h-2v2h-2v2H8v-2H6V8H4V6H2v2z"
                    fill="#000000"
                    />
                </svg>
                </Box>
            </Typography>
            </Button>

        </Box>

        </Box>

        {/* 2️⃣ IMAGE */}
        <Box sx={{ width: '100%', px: 2, }}>
          <img
            src={me_img}
            style={{ width: '100%', height: 'auto', objectFit: 'cover',height:'40vh' }}
          />
        </Box>

      </Stack>

      {/* 🖥 DESKTOP : [ image ] [ texte + boutons ] */}
      <Stack
        sx={{
          display: { xs: 'none', md: 'flex' },
          height: '100vh',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'

        }}
      >
        {/* IMAGE GAUCHE */}
        <Box sx={{ height: '100%' }}>
          <img
            src={me_img}
            style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
          />
        </Box>

        {/* COLONNE TEXTE + BOUTONS */}
        <Box
          sx={{
            height: '80%',
            textAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography variant='h3' sx={{ fontFamily: 'inter', fontWeight: '900' }}>
            Full stack web Developer <br />
          </Typography>
          <Box sx={{ alignItems:'end',justifyContent:'end',textAlign:'end',display:'flex',}}>
            <Typography sx={{ fontSize:'1em',fontWeight:'200',padding:'3px',
            backgroundColor:'#ff008b',color:'white',width:'23%'}}>
            Base in Montreal
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#777272',
              fontWeight: '400',
              mt: 5
            }}
          >
            I'm Abla Victoire Agboli. <br />
            I create web experiences that hit hard and stand out.
          </Typography>

            <Box sx={{ width: '100%',px: 2, mb: 4 ,
                display:'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'start',padding:'0'}}
            >

            <Button variant="text" sx={{ padding: 0, mt: 2 }}>
            <Typography
                sx={{
                textDecoration: 'underline',
                color: 'black',
                fontSize: '40px',
                fontFamily: 'inter',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px', 
                textTransform: 'none',
                }}
            >
                Craft like this

                <Box
                component="span"
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1.1em',   
                    height: '1.1em', 
                }}
                >
                <svg
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2 8h2v2h2v2h2v2h2v-2h2v-2h2v2h2v2h2v2h-4v2h8v-8h-2v4h-2v-2h-2v-2h-2V8h-2v2h-2v2H8v-2H6V8H4V6H2v2z"
                    fill="#000000"
                    />
                </svg>
                </Box>
            </Typography>
            </Button>

            <Button variant="text" sx={{ padding: 0, mt: 2 }}>
              <Typography
                sx={{
                  color: '#ff008b',
                  fontSize: '37px',
                  fontFamily: 'inter',
                  fontWeight: '700',
                  textTransform: 'none',
                }}
              >
                Portfolio
              </Typography>
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  )
}
