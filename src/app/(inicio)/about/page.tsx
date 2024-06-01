'use client'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Typography variant="body1" paragraph>
        Bienvenido a Mi Aplicación de Noticias. Aquí encontrarás las últimas
        noticias de tecnología.
      </Typography>
      <Typography variant="body1" paragraph>
        Nuestra misión es proporcionar información actualizada y relevante del
        mundo de la tecnología. ¡Gracias por visitarnos!
      </Typography>
    </Container>
  )
}
