import React from 'react'
import './Sectionreserva.css'
import { Box, Typography } from '@mui/material'

function Sectionreserva() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      p={1}
      m={1}
      bgcolor="background.paper"
      justifyContent="center"
    >
      <Box>
        <h4>Clinica  odontológica especializada</h4>
        <Typography variant="h4">
            Atención para todas <br/> las edades
        </Typography>
        <button className='btnReservar'>Reserva en línea </button>
        <h4>o llama al 800-10-01-02</h4>
      </Box>
      <Box>
        <img src="/recursos/image 2.png" />
      </Box>
    </Box>

  )
}

export default Sectionreserva
