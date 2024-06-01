import React from 'react'
import Image from 'next/image';
import './Navbar'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import Link from 'next/link'
// import GridExample from '../components/samples/GridExample'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Navbar() {
  return (
    <AppBar position="static">
        <Toolbar>
          <img src="/recursos/Group 19.png" alt="Logotipo de Magia Dental" />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              color="primary"
              sx={{ color: 'black' }}
              component={Link}
              href="/nosotros"
            >
              Nosotros
            </Button>
            <Button
              color="inherit"
              sx={{ color: 'black' }}
              component={Link}
              href="/servicios"
            >
              Servicios
            </Button>
            <Button
              color="inherit"
              sx={{ color: 'black' }}
              component={Link}
              href="/pacientes"
            >
              Nuevos pacientes
            </Button>
            <Button
              color="inherit"
              sx={{ color: 'black' }}
              component={Link}
              href="/contacto"
            >
              Contacto
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" aria-label="search" color="primary">
            <SearchIcon fontSize="large" />
          </IconButton>
          <IconButton size="large" aria-label="search" color="primary">
            <DarkModeOutlinedIcon fontSize="large" />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: '10px', fontWeight: 'bold' }}
          >
            Reservar
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
