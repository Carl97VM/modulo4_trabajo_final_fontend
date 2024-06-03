import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { productSave, productType } from '../../types/Products';
import { WebService } from '../../services'; // Importa el WebService
import { leerCookie } from '../../utils/cookies';
import { Constantes } from '../../config'
import { imprimir } from '../../utils/imprimir'
import { toast } from 'react-toastify';
import '../../styles/globals.css'

interface ProductFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: productSave) => void;
  productId?: string;
  setReloadData: (value: boolean) => void;
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({ open, onClose, onSubmit, productId }) => {
  const [resumenData, setResumenData] = useState<productType[]>([])
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    if (productId) {
      // Fetch product data for editing
      const fetchProduct = async () => {
        const token = leerCookie('token');
        try {
          const response = await WebService.get({
            url: `${Constantes.baseUrl}/api/products/${productId}`, // Cambia esto a la ruta relativa
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setName(response.name);
          setDescription(response.description);
          setPrice(response.price);
          setReloadData(false);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    } else {
      // Reset form for new product
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [productId]);

  const handleSubmit = async () => {
    try {
      let response;
      if (productId) {
        const priceNumber = Number(price);
        const formData = { name, description, price: priceNumber };
        const token = leerCookie('token');
        response = await WebService.patch({
          url: `${Constantes.baseUrl}/api/products/${productId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        imprimir(response)
        setResumenData(response);
        setReloadData(true);
        onSubmit(formData);
        toast.success('Producto modificado con éxito!');
      } else {
        const priceNumber = Number(price);
        const formData = { name, description, price: priceNumber };
        const token = leerCookie('token');
        response = await WebService.post({
          url: `${Constantes.baseUrl}/api/products`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        imprimir(response)
        setResumenData(response);
        setReloadData(true);
        onSubmit(formData);
        toast.success('Producto guardado con éxito!');
      }
      onClose();
    } catch (error) {
      console.error('Error submitting product:', error);
      toast.error('Hubo un error al realizar la accion');
    }
  };
  
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{productId ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
