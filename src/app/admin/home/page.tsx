'use client'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { eliminarCookie, leerCookie } from '../../../utils/cookies'
import { WebService } from '../../../services'
import { Constantes } from '../../../config'
import { imprimir } from '../../../utils/imprimir'
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import { productType } from '../../../types/Products'
import { TableComponent } from '../../../components/table/tableSimple'
import { ProductFormModal } from '../../../components/form/FormCreateProduct'
const AdminHomePage = () => {
  const [resumenData, setResumenData] = useState<productType[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = async () => { async (formData: any) => {
    const token = leerCookie('token')
    try {
      const response = await WebService.post({
        url: `${Constantes.baseUrl}/api/products` ?? '',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { formData: formData }
      })
      imprimir(response)
      console.log(formData);
      setIsModalOpen(false); // Cerrar el modal después de enviar el formulario
      setResumenData(response)
    } catch (error) {
      eliminarCookie('token')
      console.error('Error al guardar:', error)
      redirect('/login')
    }
    
  }};
  useEffect(() => {
    const fetchProduct = async () => {
      const token = leerCookie('token')
      try {
        const response = await WebService.get({
          url: `${Constantes.baseUrl}/api/products` ?? '',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        imprimir(response)

        setResumenData(response)
      } catch (error) {
        eliminarCookie('token')
        console.error('Error fetching user:', error)
        redirect('/login')
      }
    }

    fetchProduct()
  }, [])

  useEffect(() => {
    console.log('user: ', resumenData)
  }, [resumenData])

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>

      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Página de Administrador
          </Typography>
          <Typography variant="h6" component="p">
            Bienvenido, user1@example.com. Aquí puedes gestionar la aplicación.
          </Typography>
          <Box mt={2}>
            <Button onClick={handleOpenModal} variant="contained" color="primary">
              Nuevo Producto
            </Button>
            <ProductFormModal open={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitForm} />
          </Box>
          <Typography variant="h6" component="p">
            Registros
          </Typography>
          <TableComponent product={resumenData} />
        </CardContent>
      </Card>


    </Container>
  )
}

export default AdminHomePage
