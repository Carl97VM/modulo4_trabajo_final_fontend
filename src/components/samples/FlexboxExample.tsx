import React from 'react'
import { Box, Typography } from '@mui/material'

function FlexboxExample() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      p={1}
      m={1}
      bgcolor="background.paper"
      justifyContent="space-around"
    >
      <Box p={1} bgcolor="grey.300">
        <Typography>Item 1</Typography>
      </Box>
      <Box p={1} bgcolor="grey.300">
        <Typography>Item 2</Typography>
      </Box>
      <Box p={1} bgcolor="grey.300">
        <Typography>Item 3</Typography>
      </Box>
    </Box>
  )
}

export default FlexboxExample
