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
import { WebService } from '../../services';
import { leerCookie } from '../../utils/cookies';
import { Constantes } from '../../config';
import { imprimir } from '../../utils/imprimir';
import { toast } from 'react-toastify';
import '../../styles/globals.css';

interface ProductFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: productSave) => void;
  productId: string; // Hacer obligatorio el productId para la edición
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({ open, onClose, onSubmit, productId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');

  useEffect(() => {
    if (productId) {
      // Fetch product data for editing
      const fetchProduct = async () => {
        const token = leerCookie('token');
        try {
          const response = await WebService.get({
            url: `${Constantes.baseUrl}/api/products/${productId}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setName(response.name);
          setDescription(response.description);
          setPrice(response.price);
        } catch (error) {
          console.error('Error fetching product:', error);
          toast.error('Error al obtener los datos del producto');
        }
      };
      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = async () => {
    try {
      const priceNumber = Number(price);
      const formData: productSave = { name, description, price: priceNumber };
      const token = leerCookie('token');
      
      const response = await WebService.patch({
        url: `${Constantes.baseUrl}/api/products/${productId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      
      imprimir(response);
      onSubmit(formData); // Notificar al componente padre sobre el cambio
      toast.success('Producto modificado con éxito!');
      onClose();
    } catch (error) {
      console.error('Error submitting product:', error);
      toast.error('Hubo un error al modificar el producto');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Productos con modal</DialogTitle>
      <DialogContent>
        <Box>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            data-testid="productName"
          />
          <TextField
            label="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            data-testid="productDescription"
          />
          <TextField
            label="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
            data-testid="productPrice"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" data-testid="cancelar">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary" data-testid="modificar">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
