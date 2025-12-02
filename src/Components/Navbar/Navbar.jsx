import { Box, Button } from '@mui/material'
import React from 'react'
import my_logo from '../../assets/resources/logo.png'

export default function Navbar() {
  return (
    <Box sx={{ width: "100%", top: 0}}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* LOGO */}
          <a className="navbar-brand fw-bold" href="/">
            <img src={my_logo} style={{ width: "110px", height: "auto" }} />
          </a>

          {/* Bouton hamburger visible sur petits écrans */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenu du menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarMenu"
          >

            {/* Boutons */}
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 ms-lg-3">
              <Button
                variant="text"
                sx={{
                  height: "45px",
                  fontWeight: "bold",
                  color: "black",
                  width: { xs: "100%", lg: "auto" },
                }}
              >
               [ About me ]
              </Button>
              <Button
                variant="text"
                sx={{
                  height: "45px",
                  fontWeight: "bold",
                  color: "black",
                  width: { xs: "100%", lg: "auto" },
                }}
              >
               [ About me ]
              </Button>
              <Button
                variant="text"
                sx={{
                  height: "45px",
                  fontWeight: "bold",
                  color: "black",
                  width: { xs: "100%", lg: "auto" },
                }}
              >
               [ About me ]
              </Button>
              <Button
                variant="text"
                sx={{
                  height: "45px",
                  fontWeight: "bold",
                  color: "black",
                  width: { xs: "100%", lg: "auto" },
                }}
              >
               [ About me ]
              </Button>

              <Button
                variant="text"
                sx={{
                  height: "45px",
                  fontWeight: "bold",
                  color: "black",
                  width: { xs: "100%", lg: "auto" },
                }}
              >
               [ About me ]
              </Button>


            </div>
          </div>
        </div>
      </nav>
    </Box>

  )
}

