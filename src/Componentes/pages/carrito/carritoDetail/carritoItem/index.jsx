import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { CarritoGlobal } from '../../../../../context';

const CarritoItemDetail = ({item}) => {
    const { removeItem } = React.useContext(CarritoGlobal)

    const handleRemove = () =>{
      removeItem(titulo);
    }

    const {titulo, imagen, precio, cantidad} = item;
  return (
    <Container sx={{display: "grid",gridTemplateColumns: "1fr 4fr 1fr 1fr 0.5fr", width: "80%", justifyItems: "center", alignItems: "center", borderBottom:"1px solid grey"}}>
        <img src={imagen} style={{height:"10vh"}}></img>
        <Typography>{titulo}</Typography>
        <Typography>{cantidad}</Typography>
        <Typography>${precio}</Typography>
        <Button sx={{fontWeight: 700}} onClick={handleRemove}>X</Button>
    </Container>
  )
}

export default CarritoItemDetail