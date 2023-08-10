import React from 'react'
import { CarritoGlobal } from '../../../../context'
import CarritoItemDetail from './carritoItem'
import { Button, Container, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom'

const CarritoDetail = () => {
  const [carritoVacio, setCarritoVacio] = React.useState(false);

  const navegar = useNavigate();
  const navegarProductos = () =>{
    navegar("/productos/celulares/1")
  }

  const navegarCheckout = () => {navegar("/checkout")}

  const { carrito } = React.useContext(CarritoGlobal);

  const [precioTotal, setPrecioTotal] = React.useState(0);
  const sumarPrecio = () => {
    let totalAcumulado = 0
    carrito.forEach((item) => setPrecioTotal(totalAcumulado += item.precio))
  } ;

  const [overflow, setOverflow] = React.useState();

  const carritoOverflow = () => {

    if (carrito.length > 5 ) {
      setOverflow("scroll")

    } else {
      setOverflow("hidden");
    }
  }
  React.useEffect(() => {
    sumarPrecio();
  },[carrito])

  React.useEffect(() => {

    carritoOverflow();

    if (carrito.length < 1) {
      setCarritoVacio(true);
      setPrecioTotal(0)
    } else {
      setCarritoVacio(false)
    }
  }, [carrito])

  return (
    <>
    { carritoVacio ?
      <Container sx={{height: "87vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Typography sx={{fontWeight: 600}}>SU CARRITO SE ENCUENTRA VACÍO, <span onClick={navegarProductos} style={{color:"blue", fontWeight:700}}>CONTINUE COMPRANDO</span></Typography>
      </Container>

      :

    <div style={{ display: "grid", gridTemplateRows:"1fr 5fr 1fr 0.5fr", gridTemplateColumns:"1fr", gap: "1em", height: "87vh", alignItems: "center", justifyItems: "center" }}>
      <Container sx={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr 1fr 0.5fr", width: "80%", justifyItems: "center", alignItems: "center" }}>
        <Typography sx={{ fontWeight: 700 }}>IMAGEN</Typography>
        <Typography sx={{ fontWeight: 700 }}>DESCRIPCIÓN</Typography>
        <Typography sx={{ fontWeight: 700 }}>CANTIDAD</Typography>
        <Typography sx={{ fontWeight: 700 }}>TOTAL</Typography>
      </Container>

        <div style={{width: "100%", maxHeight: "55vh", overflowY: `${overflow}`, display: "flex", flexDirection:"column", gap:"1em" }}>

          {carrito.map((item, index) => <CarritoItemDetail item={item} key={index} />)}

        </div>

      <Container sx={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr 1fr 0.5fr", width: "80%", justifyItems: "center", alignItems: "center" }} >
        <Typography sx={{ fontWeight: 700 }}>TOTAL</Typography>
        <Typography sx={{ fontWeight: 700, gridColumn: 4 }}>${precioTotal}</Typography>
      </Container>
      <Container sx={{width:"80%", display:"flex", justifyContent:"center", alignContent:"center"}}>

        <Button sx={{backgroundColor:"#1976d2", color:"white", width:"100%"}} onClick={navegarCheckout}>FINALIZAR COMPRA</Button>
      
      </Container>
    </div>}
    </>
  )
}

export default CarritoDetail