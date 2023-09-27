
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
import Carrito from "./componentes/Carrito";
import backgroundImage from './images/coffeeBackground.jpg';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { Grid } from "@mui/material";



const containerStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  height: "100vh",
  backgroundColor: 'rgba(255, 255, 255, 0.3)'
  
  
};

function App() {
  return (

    <Grid sx={{height: "100vh"}}>
      <Box sx={containerStyles}>
       <NavBar />
       <Home />
       <Carrito />

       <Typography>
        
       </Typography>
    </Box>
    </Grid>
    
     
      
    
  );
}

export default App;
