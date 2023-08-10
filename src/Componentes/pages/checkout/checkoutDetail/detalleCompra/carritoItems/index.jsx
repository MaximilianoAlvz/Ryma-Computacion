import React from 'react'
import { CarritoGlobal } from '../../../../../../context';
import { Container, Typography } from '@mui/material';
import CartaItemCheckout from './cartaItem';

const CarritoCheckout = () => {
    const { carrito } = React.useContext(CarritoGlobal);

    const [precioTotal, setPrecioTotal] = React.useState(0);

    const sumarPrecio = () => {
      let totalAcumulado = 0
      carrito.forEach((item) => setPrecioTotal(totalAcumulado += item.precio))
    } ;

    const [overflow, setOverflow] = React.useState();

    const carritoOverflow = () => { 
  
      if (carrito.length > 3) {
        setOverflow("scroll")
  
      } else {
        setOverflow("hidden");
      }
    };

    React.useEffect(() => {
            sumarPrecio();
            carritoOverflow();
            if(carrito.length < 1) {
                setPrecioTotal(0)
            }
    },[carrito])

    return (
        <div style={{display:"flex", height:"100%", flexDirection: "column", justifyContent:"space-between"}}>

            <div style={{ width: "100%", maxHeight: "55vh", overflowY: `${overflow}`, display: "flex", flexDirection: "column", gap: "2em" }}>

                {carrito.map((item, index) => <CartaItemCheckout item={item} key={index} />)}

            </div>

            <Container sx={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr 1fr 0.5fr", width: "80%", justifyItems: "center", alignItems: "center" }} >
                <Typography sx={{ fontWeight: 700 }}>TOTAL</Typography>
                <Typography sx={{ fontWeight: 700, gridColumn: 4 }}>${precioTotal}</Typography>
            </Container>
        </div>
    )
}

export default CarritoCheckout