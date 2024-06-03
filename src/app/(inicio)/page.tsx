'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'  // Asegúrate de usar el import correcto para Next.js 13
import { Container, Typography } from '@mui/material'
import NewsList from '../../components/NewsList'
import { News } from '../../types/News'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Sectionreserva from '../../components/Sectionreserva'
import Sectionservicios from '../../components/Sectionservicios'
import Sectionopinion from '../../components/Sectionopinion'
import Contactanos from '../../components/Contactanos'
import { imprimir } from '../../utils/imprimir'

const HomePage: React.FC = () => {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [router])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<Array<News>>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
        )
        imprimir(`Ruta:: ${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
        setNews(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Container maxWidth="sm">
      {/* <Navbar />
      <br />
      <Sectionreserva />
      <Sectionservicios />
      <Sectionopinion />
      <Contactanos />
      <NewsList news={news} /> */}
    </Container>
  )
}

export default HomePage
