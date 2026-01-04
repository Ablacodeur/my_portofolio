import { Box, Stack, Typography } from '@mui/material'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function AboutMyCode() {

  const test0 = useRef(null);
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
          x: fromLeft ? -80 : 80,   // TRUE → gauche, FALSE → droite
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    };

    // On anime chaque test
    animateTest(test0, true);   
    animateTest(test1, true);   // test 1 : gauche → droite
    animateTest(test2, false);  // test 2 : droite → gauche
    animateTest(test3, true);   // test 3 : gauche → droite
    animateTest(test4, false);  // test 4 : droite → gauche
    animateTest(test5, true);   // test 5 : gauche → droite

  }, []);


  return (
    <section id="about">
    <Box sx={{ backgroundColor: "#000000", color: "white", overflow: "hidden" }}>
      {/* SVG TOP WAVE */}
            <Box
                sx={{
                width: "100%",
                lineHeight: 0,
                transform: "translateY(-1px)", // anti petite ligne blanche
                }}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "160px", display: "block" }}
                >
                <path
                    fill="#ff008b"
                    fillOpacity="1"
                        d="M0,0L120,16C240,32,480,64,720,64C960,64,1200,32,1320,16L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"            />
                </svg>
            </Box>
            <Stack ref={test0} sx={{ height:'80vh',display:'flex',alignItems:'center',justifyContent:'center',margin:'5%' }}> 
            <Typography
            variant="h2"
            sx={{
                fontWeight: 550,
                fontSize: { xs: "20px", md: "45px" },
                padding: "25px",
            }}
            >
            I’m Abla, i build {" "}
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
            web applications
            </Box>{" "}
           from concept to production.
            </Typography>
        </Stack>

        <Stack ref={test1} sx={{ height:'80vh',display:'flex',alignItems:'center',justifyContent:'center',margin:'5%' }}> 
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

        <Stack ref={test2} sx={{ height:'80vh',display:'flex',alignItems:'start',justifyContent:'center' ,margin:'5%'}}> 
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

        <Stack ref={test3} sx={{ height:'80vh',display:'flex',alignItems:'start',justifyContent:'center',margin:'5%' }}> 
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
        <Stack ref={test4} sx={{ height:'80vh',display:'flex',alignItems:'start',justifyContent:'center',margin:'5%' }}> 
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
    </section>
  )
}


