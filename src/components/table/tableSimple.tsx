import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { productType } from '../../types/Products'

interface TableComponentProps {
  products: productType[]
  onEdit: (productId: string) => void
  onDelete: (productId: string) => void
}

export const TableComponent: React.FC<TableComponentProps> = ({ products, onEdit, onDelete }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Descripción</TableCell>
          <TableCell>Precio</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(product.id.toString())}>Editar <EditIcon /></Button>
              <Button onClick={() => onDelete(product.id)}>Eliminar <DeleteIcon /></Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
