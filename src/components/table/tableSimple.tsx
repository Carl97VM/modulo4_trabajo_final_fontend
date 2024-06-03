import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { productType } from '../../types/Products'

interface TableComponentProps {
  products: productType[]
  onEdit: (productId: string) => void
}

export const TableComponent: React.FC<TableComponentProps> = ({ products, onEdit }) => {
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
