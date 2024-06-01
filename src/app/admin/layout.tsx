'use client'

import React, { PropsWithChildren } from 'react'
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import { eliminarCookie } from '../../utils/cookies'
import { useRouter } from 'next/navigation'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{ flexGrow: 1 }}
            color={'text.primary'}
          >
            Lista de productos
          </Typography>
          <Button
            color="primary"
            onClick={() => {
              eliminarCookie('token')
              router.replace('/login')
            }}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ p: 2 }}>{children}</Container>
    </>
  )
}

export default Layout
