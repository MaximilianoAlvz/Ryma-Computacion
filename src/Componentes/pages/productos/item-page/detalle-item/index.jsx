import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { CarritoGlobal } from '../../../../../context'
import ItemCounter from '../../../../itemCounter'

const DetalleItem = ({item}) => {
  const {imagen,titulo,precio} = item;

  const [contador, setContador] = React.useState(1);

  const {agregarItem} = React.useContext(CarritoGlobal);
  
  const agregarCarrito = () => {
    agregarItem ({
      titulo: titulo,
      imagen: imagen,
      precio: precio * contador,
      cantidad: contador
    });
  }
  return (

    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height: "87vh"}}>

        <img src={imagen} style={{height:"400px"}}></img>
        <Box>
        <Typography sx={{textTransform:"uppercase", fontWeight: "800"}}>{titulo}</Typography>
        <Typography>Precio: ${precio}</Typography>
        <div style={{display:"flex", alignItems: "center"}}>
        <ItemCounter contador = {contador} setContador={setContador}/>
        <Button onClick={agregarCarrito}>Agregar al carrito</Button>
        </div>
        </Box>
        
    </Container>
    
  )
}

export default DetalleItem