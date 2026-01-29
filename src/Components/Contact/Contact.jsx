import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import me_img from "../../assets/resources/me.png"

export default function Contact() {
  const currentYear = new Date().getFullYear();

  const montrealTime = new Date().toLocaleTimeString("en-CA", {
  timeZone: "America/Toronto",
  hour: "2-digit",
  minute: "2-digit",
  });
  const socialLinks = [
  { label: "Email", href: "mailto:ablacodeur@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/victoire-agboli" },
  { label: "WhatsApp", href: "https://wa.me/5142628032" }, 
  { label: "GitHub", href: "https://github.com/ablacodeur" },
  { label: "My CV", href: "/CV_Victoire_Agboli_FullStack_Canada.pdf", download: true }
];
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];



  return (
    <section id="contact">
          <Box
            sx={{
              position: "absolute",
              right: 20,
              Bottom: "15%",
              transform: "translateY(50%) rotate(-90deg)",
              transformOrigin: "right center",
              display: { xs: "none",md:'block' },
              zIndex: 10,
            }}
          >
            <Typography
              sx={{
                letterSpacing: 5,
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                backgroundColor:'#ff008b',
                padding:{xs:'2px',md:'7px'},
                color:'white'
              }}
            >
              BASE IN CANADA
            </Typography>
          </Box>
          <Box
            sx={{
              padding: { xs: "40px 8px", md: "80px" },
              borderTop: "1px solid #e0e0e0",
              display:'flex',
              justifyContent:'space-between',
              flexDirection:{ xs: "column", md: "row" }
            }}
          >
            <Stack
              direction={{ xs: "row" }}
              spacing={{ xs: 2, md: 6 }}
              justifyContent="space-between"
            >
              {/* LINKS */}
              <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}>
                <Typography sx={{ fontWeight: 600, mb: 2 }}>LINKS</Typography>

                {navLinks.map((item) => (
                  <Typography
                    key={item.label}
                    component="a"
                    href={item.href}
                    sx={{
                      color: "#555",
                      cursor: "pointer",
                      mb: 1,
                      textDecoration: "none",
                      "&:hover": { color: "#000" },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>

              {/* SOCIALS */}
              <Box sx={{display:'flex',flexDirection:'column'  }}>
                <Typography sx={{ fontWeight: 600, mb: 2 }}>SOCIALS</Typography>
                {socialLinks.map((item) => (
                  <Typography
                    key={item.label}
                    component="a"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    download={item.download ? true : undefined}
                    sx={{
                      color: "#555",
                      cursor: "pointer",
                      mb: 1,
                      textDecoration: "none",
                      display: "inline-block",
                      "&:hover": { color: "#000"},
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}              
              </Box>

              {/* LOCAL TIME */}
              <Box>
                <Typography sx={{ fontWeight: 600, mb: 2 }}>LOCAL TIME</Typography>
                <Typography sx={{ color: "#555" }}>
                {montrealTime} UTC-5
                </Typography>
              </Box>

              {/* VERSION */}
              <Box>
                <Typography sx={{ fontWeight: 600, mb: 2 }}>VERSION</Typography>
                <Typography sx={{ color: "#555" }}>
                  {currentYear} Edition
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: 1,marginTop:{xs:'30px'},alignItems:{xs:'center'},justifyContent:{xs:'center'}}}>
                
                {/* Téléphone */}
                <Button
                  component="a"
                  href="tel:+1514514514"
                  sx={{ justifyContent: "flex-start", textTransform: "none",textDecoration:'none',
                  color:'black',borderColor:'black',borderRadius:'50px'}}
                  variant="outlined"
                  
                >
                  <Typography sx={{ fontSize:{xs:'15.5px'} }}>+1 514 262 8032</Typography>
                </Button>

                {/* Email */}
                <Button
                  component="a"
                  href="mailto:ablacodeur@gmail.com"
                  sx={{ justifyContent: "flex-start", textTransform: "none" ,color:'black',borderColor:'black',borderRadius:'50px' }}
                  variant="outlined"

                >
                  <Typography sx={{ fontSize:{xs:'15.5px'} }}>ablacodeur@gmail.com</Typography>
                </Button>

              </Box>
            </Stack>

          </Box>
          <Box sx={{ textAlign: "center" }}>
            {/* DESKTOP */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "72px", md: "210px" },
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              ABLAC
              <Box
                component="img"
                src={me_img}
                alt="Abla Codeur"
                sx={{
                  width: "130px",
                  height: "163px",
                  borderRadius: "50%",
                  border: "13px solid black",
                }}
              />
              DEUR
            </Typography>

            {/* MOBILE */}
            <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <Typography sx={{ fontSize: "52px" }}>ABLACODEUR</Typography>
            </Box>
          </Box>
              <Box sx={{display:{xs:'flex',md:'none'},justifyContent:'flex-end'}}>
            <Typography sx={{ backgroundColor:'#ff008b',color:'white',padding:'2px' }}>
            BASE IN CANADA
            </Typography>
            
        </Box>

    </section>
  );
}
