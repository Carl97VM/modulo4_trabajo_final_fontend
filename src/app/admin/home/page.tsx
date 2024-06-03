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
  Container,
  Typography,
} from '@mui/material'
import { productType, productSave, productId } from '../../../types/Products'
import { TableComponent } from '../../../components/table/tableSimple'
import { ProductFormModal } from '../../../components/form/FormCreateProduct'
import { ConfirmDeleteModal } from '../../../components/form/FormDeleteProduct'
import { toast } from 'react-toastify';
import '../../../styles/globals.css'

const AdminHomePage = () => {
  const [resumenData, setResumenData] = useState<productType[]>([])
  const [resumenDataDelete, setResumenDataDelete] = useState<productId>()
  const [reloadData, setReloadData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProductId, setCurrentProductId] = useState<string | undefined>(undefined)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [currentProductIdDelete, setCurrentProductIdDelete] = useState<string | undefined>(undefined)

  const handleOpenModal = (productId: string | undefined = undefined) => {
    setCurrentProductId(productId)
    setIsModalOpen(true)
  }
  const handleDeleteConfirm = (productId: string) => {
    setCurrentProductIdDelete(productId);
    setIsModalOpenDelete(true);
  };
  const handleCloseModalDelete = () => {
    setIsModalOpenDelete(false);
    setCurrentProductIdDelete(undefined)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCurrentProductId(undefined)
  }

  const handleFormSubmit = (formData: productSave) => {
    setResumenData((prevData) => {
      if (currentProductId) {
        setReloadData(true);
        return prevData.map((product) =>
          product.id === currentProductId ? { ...product, ...formData } : product
        )
      } else {
        const newProduct: productType = {
          ...formData,
          id: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: 1
        }
        setReloadData(true);
        return [...prevData, newProduct]
      }
    })
    handleCloseModal()
  }
  const handleFormSubmitDelete = (formData: productId) => {
    const newProduct: productId = {
      ...formData,
      id: '',
    }
    handleCloseModalDelete()
  }

  const fetchProducts = async () => {
    const token = leerCookie('token')
    console.log("Token:: ", token)
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

  const handleDelete = async (productId: string) => {
    try {
      const token = leerCookie('token');
      const response = await WebService.delete({
        url: `${Constantes.baseUrl}/api/products/${productId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      imprimir(response)
      toast.success('Producto eliminado con éxito!');
      setReloadData(true); // Esto desencadenará el useEffect en AdminHomePage.tsx
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Hubo un error al eliminar el producto.');
    }
  };


  useEffect(() => {
    fetchProducts()
  }, [reloadData])


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
            <Button onClick={() => handleOpenModal(undefined)} variant="contained" color="primary">
              Nuevo Producto
            </Button>
          </Box>
          <Typography variant="h6" component="p">
            Registros
          </Typography>
          <TableComponent products={resumenData} onEdit={handleOpenModal} onDelete={handleDeleteConfirm} />
        </CardContent>
      </Card>

      {isModalOpen && (
        <ProductFormModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
          productId={currentProductId}
          setReloadData={setReloadData}
        />
      )}
      {isModalOpenDelete && (
        <ConfirmDeleteModal
          open={isModalOpenDelete}
          onClose={handleCloseModalDelete}
          onSubmit={handleFormSubmitDelete}
          productId={currentProductIdDelete}
          setReloadData={setReloadData}
        />
      )}
    </Container>
  )
}

export default AdminHomePage
