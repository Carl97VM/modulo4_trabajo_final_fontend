import React, { useState } from 'react';
import { 
    Box, 
    Card, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Button 
} from '@mui/material';
import { productType } from '../../types/Products'
import { EditProductForm } from '../form/FormEditProduct';
import { DeleteProductForm } from '../form/FormDeleteProduct';

export const TableComponent = ({ product }: { product: productType[] }) => {
    const [editingProduct, setEditingProduct] = useState<productType | null>(null);
    const [deletingProduct, setDeletingProduct] = useState<productType | null>(null);

    const handleEdit = (product: productType) => {
        setEditingProduct(product);
    };

    const handleDelete = (product: productType) => {
        setDeletingProduct(product);
    };

    if (!product || product.length === 0) {
        return <p>No hay datos de resúmenes disponibles.</p>;
    }

    return (
        <Box sx={{ mb: 4 }}>
            <TableContainer component={Card} style={{ maxHeight: '300px', overflow: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.map(info => (
                            <TableRow key={info.id}>
                                <TableCell>{info.id}</TableCell>
                                <TableCell>{info.name}</TableCell>
                                <TableCell>{info.description}</TableCell>
                                <TableCell>{info.price}</TableCell>
                                <TableCell>{new Date(info.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleEdit(info)}>Editar</Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDelete(info)}>Eliminar</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {editingProduct && <EditProductForm product={editingProduct} />}
            {deletingProduct && <DeleteProductForm product={deletingProduct} />}
        </Box>
    );
};