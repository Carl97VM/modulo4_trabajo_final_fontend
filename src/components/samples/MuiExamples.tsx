import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  Alert,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  SelectChangeEvent,
} from '@mui/material'
import { AlertTitle } from '@mui/material'
import { keyframes } from '@emotion/react'
import { styled } from '@mui/material/styles'

// Definición de una animación simple
const bounceAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`

const BouncyBox = styled(Box)({
  animation: `${bounceAnimation} 1s infinite`,
})

function MaterialUIExamples() {
  const [selectedValue, setSelectedValue] = useState('')
  const [selectedChip, setChip] = useState('none')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 10 }}>
      <Typography variant="h4" fontWeight={'bold'} sx={{ mb: 4 }}>
        Ejemplo de componentes MUI
      </Typography>

      {/* Botones */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Botones
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>

      {/* Checkbox */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Checkbox
      </Typography>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Checkbox"
        sx={{ mb: 4 }}
      />

      {/* Radio Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Radio Buttons
      </Typography>
      <FormControl component="fieldset" sx={{ mb: 4 }}>
        <FormLabel component="legend">Radio Buttons</FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
          onChange={handleChange}
        >
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
        </RadioGroup>
      </FormControl>

      {/* Selectores */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Selectores
      </Typography>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Age"
          onChange={handleChangeSelect}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* Chips */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Chips
      </Typography>
      <Chip
        label="Clickable"
        onClick={() => setChip('Clickable')}
        color="primary"
        variant="outlined"
        sx={{ mb: 4 }}
      />

      {/* Alertas */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Alertas
      </Typography>
      <Alert severity="success" variant={'filled'} sx={{ mb: 4 }}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>

      {/* Cards */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Cards
      </Typography>
      <Card sx={{ maxWidth: 345, mb: 4 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      {/* Animaciones */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Animaciones
      </Typography>
      <BouncyBox
        sx={{
          width: 100,
          height: 100,
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        Rebote
      </BouncyBox>
    </Box>
  )
}

export default MaterialUIExamples
