import React from 'react'
import { CarritoGlobal } from '../../../../../context'

const FormularioCheckout = () => {

  const {obtenerApellido, obtenerDireccion, obtenerMail, obtenerNombre, obtenerNumero} = React.useContext(CarritoGlobal)

  const nombreInput = (e) => {
    obtenerNombre(e.target.value)
  }
  const apellidoInput = (e) => {
    obtenerApellido(e.target.value)
  }
  const mailInput = (e) => {
    obtenerMail(e.target.value)
  }
  const numeroInput = (e) => {
    obtenerNumero(e.target.value)
  }
  const direccionInput = (e) => {
    obtenerDireccion(e.target.value)
  }
  return (
    <form style={{display:"flex", flexDirection:"column", width:"60%", height:"80%", justifyContent:"center",padding:"1em", border:"1px solid grey", gap:"0.5em"}}>
        <label style={{fontWeight:700}}>Nombre:</label>
        <input type='text' style={{height:"4vh"}} onChange={nombreInput}></input>
        <label style={{fontWeight:700}}>Apellido:</label>
        <input type='text' style={{height:"4vh"}} onChange={apellidoInput}></input>
        <label style={{fontWeight:700}}>Email:</label>
        <input type="email" style={{height:"4vh"}} onChange={mailInput}></input>
        <label style={{fontWeight:700}}>Telefono:</label>
        <input type="tel" style={{height:"4vh"}} onChange={numeroInput}></input>
        <label style={{fontWeight:700}}>Dirección:</label>
        <input type="text" style={{height:"4vh"}} onChange={direccionInput}></input>
    </form>
  )
}

export default FormularioCheckout