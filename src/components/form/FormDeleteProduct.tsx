import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { productId } from '../../types/Products';
import { WebService } from '../../services'; // Importa el WebService
import { leerCookie } from '../../utils/cookies';
import { Constantes } from '../../config'
import { imprimir } from '../../utils/imprimir'
import { toast } from 'react-toastify';
import '../../styles/globals.css'

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: productId) => void;
  productId?: string;
  setReloadData: (value: boolean) => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ open, onClose, onSubmit, productId }) => {
  const [resumenData, setResumenData] = useState<productId[]>([])
  const [id, setId] = useState('');
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    if (productId) {
      // Fetch product data for editing
      const fetchProduct = async () => {
        const token = leerCookie('token');
        try {
          const response = await WebService.delete({
            url: `${Constantes.baseUrl}/api/products/${productId}`, // Cambia esto a la ruta relativa
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setId(response.id);
          setReloadData(false);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    } else {
      // Reset form for new product
      setId('');
    }
  }, [productId]);
  const onConfirm = async () => {
    try {
      const formData = { id }
      const token = leerCookie('token');
      const response = await WebService.delete({
        url: `${Constantes.baseUrl}/api/products/${productId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      imprimir(response)
      setReloadData(true);
      onSubmit(formData);
      toast.success('Producto eliminado con éxito!');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Hubo un error al eliminar el producto.');
    }
  };
  
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{"¿Estás seguro?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Esta acción eliminará el producto y no se puede deshacer.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
