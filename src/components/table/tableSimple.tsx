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
    <Table data-testid="productsTable">
      <TableHead>
        <TableRow>
          <TableCell data-testid="headerName">Nombre</TableCell>
          <TableCell data-testid="headerDescription">Descripción</TableCell>
          <TableCell data-testid="headerPrice">Precio</TableCell>
          <TableCell data-testid="headerActions">Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id} data-testid={`productRow-${product.id}`}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <Button
                onClick={() => onEdit(product.id.toString())}
                data-testid={`editButton-${product.id}`}
              >
                Editar <EditIcon />
              </Button>
              <Button
                onClick={() => onDelete(product.id)}
                data-testid={`deleteButton-${product.id}`}
              >
                Eliminar <DeleteIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
