import React from 'react'
import FormularioCheckout from './formulario'
import DetalleCompra from './detalleCompra'

const CheckoutDetail = () => {
  return (
    <div style={{ height:"87vh",display:"flex", justifyContent:"center", alignItems:"center", gap:"1em"}}>
        <FormularioCheckout/> 
        <DetalleCompra/>
    </div>
  )
}

export default CheckoutDetail