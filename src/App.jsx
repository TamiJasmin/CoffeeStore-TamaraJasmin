import backgroundImage from "./images/coffeeBackground.jpg";
import NavBar from "./componentes/NavBar";
import Carrito from "./componentes/Carrito";
import Home from "./componentes/Home";
import { Grid } from "@mui/material";

const containerStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
};

function App() {
  return (
    <Grid sx={containerStyles}>
      <NavBar />
      <Carrito />
      <Home />
    </Grid>
  );
}

export default App;
