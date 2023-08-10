import React, { children } from 'react';
export const CarritoGlobal = React.createContext({
  carrito: []
});

const CarritoContext = ({children}) => {

  /// Context para el checkout
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [direccion, setDireccion] = React.useState("");
    const [pedidos, setPedidos] = React.useState([]);

    const nuevoPedido = (pedido) => {
      setPedidos([...pedidos, pedido]);
    }

    const obtenerNombre = (nombreForm) => {
      setNombre(nombreForm);
    };

    const obtenerApellido = (apellidoForm) => {
      setApellido(apellidoForm);
    };

    const obtenerMail = (mailForm) => {
      setMail(mailForm);
    };

    const obtenerNumero = (numeroForm) => {
      setNumero(numeroForm);
    };

    const obtenerDireccion = (direccionForm) => {
      setDireccion(direccionForm);
    };
  ///finaliza context checkout

    const [carrito, setCarrito] = React.useState([]);

    const itemsCarrito = carrito.length;

    const carritoInclude = (itemid) =>{
      return carrito.some((item) => item.titulo === itemid)
    }

    const removeItem = (itemid) => {
      const nuevoCarrito = carrito.filter((item) => item.titulo !== itemid);
      setCarrito(nuevoCarrito);
    }
    const agregarItem = (nuevoItem) =>{
      if (carritoInclude(nuevoItem.titulo)){
        alert("Este producto ya esta en el carrito")
      }else {
        setCarrito([...carrito, nuevoItem]);}
      } 

  return (
    <CarritoGlobal.Provider value = {{setCarrito,carrito, itemsCarrito, agregarItem, removeItem, obtenerApellido, obtenerDireccion, obtenerMail, obtenerNombre, obtenerNumero, numero, mail, direccion, nombre, apellido, nuevoPedido}}>
        {children}
    </CarritoGlobal.Provider>
  )
}

export default CarritoContext;