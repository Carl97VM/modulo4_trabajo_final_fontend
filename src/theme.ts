'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { alpha } from '@mui/material'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {main : '#006a65'},
    secondary: {main : '#fff'},
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthSm": {
            maxWidth: "100vw",
          },
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "100vw",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiAppBar: {
      defaultProps: {
        variant: 'outlined',
        elevation: 0,
      },
      styleOverrides: {
        colorPrimary: {
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          backgroundColor: alpha('#FFF', 0.4),
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
})

export default theme
