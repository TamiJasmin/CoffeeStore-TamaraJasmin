import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Carrito({ cantidadElementos }) {
  return (
    <Badge badgeContent={cantidadElementos} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
}

export default Carrito;