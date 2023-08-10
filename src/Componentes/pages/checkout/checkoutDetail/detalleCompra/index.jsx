import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import CarritoCheckout from './carritoItems'
import { CarritoGlobal } from '../../../../../context'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const DetalleCompra = () => {
 const { setCarrito, numero, mail, direccion, nombre, apellido, nuevoPedido } = React.useContext(CarritoGlobal);
  const navegar = useNavigate();
  
  const confirmarCompra = () => {

    nuevoPedido({
      nombre: nombre,
      apellido: apellido,
      mail: mail,
      numero: numero,
      direccion: direccion
    });

    Swal.fire({
      title: "Su pedido fue realizado con exito",
      icon: "success"
    }).then((result)=>{
      if (result.isConfirmed){
        setCarrito([]);
        navegar("/");
      }
    });




  };

  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"30%", height:"80%", justifyContent:"space-between", alignItems:"center",padding:"1em", border:"1px solid grey", gap:"0.5em"}}>

        <Typography sx={{fontWeight:700}}>DETALLE DE COMPRA</Typography>

        <CarritoCheckout/>

    <Container sx={{width:"100%", display:"flex", justifyContent:"center", alignContent:"center"}}>
        <Button sx={{backgroundColor:"#1976d2", color:"white", width:"100%"}} onClick={confirmarCompra}>FINALIZAR COMPRA</Button>
    </Container>

    </Box>
  )
}

export default DetalleCompra