import { Box, Stack, Typography } from '@mui/material'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function AboutMyCode() {

    
  const test1 = useRef(null);
  const test2 = useRef(null);
  const test3 = useRef(null);
  const test4 = useRef(null);
  const test5 = useRef(null);

  useLayoutEffect(() => {

    //  Fonction  pour animer un test
    const animateTest = (ref, fromLeft = true) => {
      gsap.fromTo(
        ref.current,
        {
          autoAlpha: 0,
          x: fromLeft ? -50 : 50,   // TRUE → gauche, FALSE → droite
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    };

    // On anime chaque test
    animateTest(test1, true);   // test 1 : gauche → droite
    animateTest(test2, false);  // test 2 : droite → gauche
    animateTest(test3, true);   // test 3 : gauche → droite
    animateTest(test4, false);  // test 4 : droite → gauche
    animateTest(test5, true);   // test 5 : gauche → droite

  }, []);


  return (
    <Box  sx={{ backgroundColor:'#000000',color:'white',overflow: "hidden"}}>
        <Stack ref={test1} sx={{ height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',margin:'5%' }}> 
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

        <Stack ref={test2} sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center' ,margin:'5%'}}> 
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

        <Stack ref={test3} sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center',margin:'5%' }}> 
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
        <Stack ref={test4} sx={{ height:'100vh',display:'flex',alignItems:'start',justifyContent:'center',margin:'5%' }}> 
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
        <Stack ref={test5} sx={{ height:'50vh',display:'flex',alignItems:'start',justifyContent:'center' ,margin:'5%'}}> 
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


