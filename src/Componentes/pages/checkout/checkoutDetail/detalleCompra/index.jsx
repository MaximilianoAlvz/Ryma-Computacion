import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import CarritoCheckout from './carritoItems'
import { CarritoGlobal } from '../../../../../context'
import Swal from 'sweetalert2'

const DetalleCompra = (props) => {
 const { numero, mail, direccion, nombre, apellido, nuevoPedido, carrito, precioTotal } = React.useContext(CarritoGlobal);
 const {numeroValido, mailValido,nombreValido,apellidoValido, direccionValido, validaciones} = props 


  const inputsValidos = () => {
    return numeroValido && mailValido && direccionValido && nombreValido && apellidoValido
  } 
  
  const confirmarCompra = () => {
    if(inputsValidos()){
    nuevoPedido({
      Comprador: {
      nombre: nombre,
      apellido: apellido,
      mail: mail,
      numero: numero,
      direccion: direccion},
      productos: carrito,
      total: precioTotal
    });
  }else {
    Swal.fire({
      title: "Complete correctamente los casilleros señalados",
      icon: "error"
    })
    validaciones();
    console.log(apellidoValido)
  }




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