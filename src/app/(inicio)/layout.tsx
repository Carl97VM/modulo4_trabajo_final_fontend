'use client'

import React, { PropsWithChildren } from 'react'
// import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material'
// import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  IconButton,
} from '@mui/material'

// import GridExample from '../components/samples/GridExample'
// import Navbar from '../../components/Navbar'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      {/* <Navbar></Navbar> */}
      {children}
    </Container>
    // <Container></Container>
  )
}

export default Layout
