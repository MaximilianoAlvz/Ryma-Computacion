import { Image } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const DetalleItem = ({item}) => {
  return (

    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height: "87vh"}}>
        
        <img src={item.imagen} style={{height:"400px"}}></img>
        <Box sx>
        <Typography sx={{textTransform:"uppercase", fontWeight: "800"}}>{item.titulo}</Typography>
        <Typography>Precio: ${item.precio}</Typography>
        <Button>Agregar al carrito</Button>
        </Box>
        
    </Container>
    
  )
}

export default DetalleItem