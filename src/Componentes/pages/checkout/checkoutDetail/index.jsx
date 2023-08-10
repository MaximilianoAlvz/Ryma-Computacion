import React from 'react'
import FormularioCheckout from './formulario'
import DetalleCompra from './detalleCompra'
import { CarritoGlobal } from '../../../../context';

const CheckoutDetail = () => {

  const[nombreValido, setNombreValido] = React.useState();
  const[apellidoValido, setApellidoValido] = React.useState(true);
  const[mailValido, setMailValido] = React.useState(true);
  const[numeroValido, setNumeroValido] = React.useState(true);
  const[direccionValido, setDireccionValido] = React.useState(true);
  const {nombre, apellido, mail, direccion, numero} = React.useContext(CarritoGlobal);

  const validacionNombre = (nombre) => {
    let regex = /^[a-zA-Z]+\s?[a-zA-Z]*$/;
    let Test = regex.test(nombre);
    if(Test) {
      setNombreValido(true)
    }else {
      setNombreValido(false)
    }
  }

  const validacionApellido = (apellido) => {
    let regex = /^[a-zA-Z]+\s?[a-zA-Z]*$/;
    let Test = regex.test(apellido);
    if(Test) {
      setApellidoValido(true)
    }else {
      setApellidoValido(false)
    }
  }

  const validacionMail = (mail) => {
    let regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
    let Test = regex.test(mail);
    if(Test) {
      setMailValido(true)
    }else {
      setMailValido(false)
    }
  }

  const validacionNumero = (numero) => {
    let regex = /^\+?\d{10,13}$/;
    let Test = regex.test(numero);
    if(Test) {
      setNumeroValido(true)
    }else {
      setNumeroValido(false)
    }
  }

  const validacionDireccion = (direccion) => {
    let regex = /^[A-Za-z]+\s\d+(\s\d+)*$/;
    let Test = regex.test(direccion);
    if(Test) {
      setDireccionValido(true)
    }else {
      setDireccionValido(false)
    }
  }

  const validaciones = () =>{
    validacionDireccion(direccion);
    validacionApellido(apellido);
    validacionMail(mail);
    validacionNombre(nombre);
    validacionNumero(numero);
  }



  return (
    <div style={{ height:"87vh",display:"flex", justifyContent:"center", alignItems:"center", gap:"1em"}}>
        <FormularioCheckout 
        nombreValido = {nombreValido} validacionNombre = {validacionNombre}
        apellidoValido = {apellidoValido} validacionApellido = {validacionApellido}
        mailValido = {mailValido} validacionMail = {validacionMail}
        numeroValido = {numeroValido} validacionNumero = {validacionNumero}
        direccionValido = {direccionValido} validacionDireccion = {validacionDireccion}
        /> 
        <DetalleCompra 
        nombreValido = {nombreValido} 
        apellidoValido = {apellidoValido} 
        mailValido = {mailValido} 
        numeroValido = {numeroValido} 
        direccionValido = {direccionValido}
        validaciones= {validaciones}/>
    </div>
  )
}

export default CheckoutDetail