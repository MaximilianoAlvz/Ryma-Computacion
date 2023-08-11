import React from 'react'
import { CarritoGlobal } from '../../../../../context'

const FormularioCheckout = (props) => {

  const {obtenerApellido, obtenerDireccion, obtenerMail, obtenerNombre, obtenerNumero} = React.useContext(CarritoGlobal)

  const {validacionNombre, nombreValido, validacionApellido, apellidoValido, validacionNumero, numeroValido, validacionMail, mailValido, validacionDireccion, direccionValido} = props;

  const nombreInput = (e) => {
    obtenerNombre(e.target.value);
    validacionNombre(e.target.value);
  }
  const apellidoInput = (e) => {
    obtenerApellido(e.target.value);
    validacionApellido(e.target.value);
  }
  const mailInput = (e) => {
    obtenerMail(e.target.value);
    validacionMail(e.target.value);
  }
  const numeroInput = (e) => {
    obtenerNumero(e.target.value);
    validacionNumero(e.target.value);
  }
  const direccionInput = (e) => {
    obtenerDireccion(e.target.value)
    validacionDireccion(e.target.value);
  }
  return (
    <form style={{display:"flex", flexDirection:"column", width:"60%", height:"80%", justifyContent:"center",padding:"1em", border:"1px solid grey", gap:"0.5em"}}>
        <label style={{fontWeight:700}}>Nombre:</label>
        <input type='text' style={{height:"4vh", border: `1px solid ${nombreValido !== false ? "black" : "red"}`}} onBlur={nombreInput}></input>
        <label style={{fontWeight:700}}>Apellido:</label>
        <input type='text' style={{height:"4vh", border: `1px solid ${apellidoValido !== false? "black" : "red"}`}} onBlur={apellidoInput}></input>
        <label style={{fontWeight:700}}>Email:</label>
        <input type="email" style={{height:"4vh", border: `1px solid ${mailValido !== false ? "black" : "red"}`}} onBlur={mailInput}></input>
        <label style={{fontWeight:700}}>Telefono:</label>
        <input type="tel" style={{height:"4vh", border: `1px solid ${numeroValido !== false? "black" : "red"}`}} onBlur={numeroInput}></input>
        <label style={{fontWeight:700}}>Dirección:</label>
        <input type="text" style={{height:"4vh", border: `1px solid ${direccionValido !== false ? "black" : "red"}`}} onBlur={direccionInput}></input>
    </form>
  )
}

export default FormularioCheckout