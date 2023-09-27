import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Box, Typography } from '@mui/material';

function Carrito() {
  return (
    
    <Box sx={{display: "flex"}}>
      <Typography>
        0
      </Typography>
      <ShoppingCartIcon />
    </Box>
      
      
    
  );
}

export default Carrito;