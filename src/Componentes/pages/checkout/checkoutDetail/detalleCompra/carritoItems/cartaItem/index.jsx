import { Container, Typography } from '@mui/material';
import React from 'react'

const CartaItemCheckout = ({item}) => {
    const {titulo, imagen, precio, cantidad} = item;

  return (

    <Container sx={{display: "grid",gridTemplateColumns: "1fr 4fr 1fr 1fr", width: "100%", justifyItems: "center", alignItems: "center", borderBottom:"1px solid grey"}}>
        <img src={imagen} style={{height:"10vh"}}></img>
        <Typography>{titulo}</Typography>
        <Typography>{cantidad}</Typography>
        <Typography>${precio}</Typography>
    </Container>

  )
}

export default CartaItemCheckout