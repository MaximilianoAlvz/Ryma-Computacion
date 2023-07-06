import React from 'react'
import { useParams } from 'react-router-dom';
import { detalleProducto } from '../../../../listas/producto';
import DetalleItem from './detalle-item';

const ItemPage = () => {
  const [item, setItem] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    detalleProducto(id)
      .then((res) => res.json())
      .then((res) => {
        const detalleItem = {
          titulo : res.title,
          imagen : res.thumbnail,
          precio : res.price
        };
        console.log(detalleItem);
        setItem(detalleItem);
      })
    },[id])

return (
  <div>
    <DetalleItem item = {item}/>
  </div>
)
}

export default ItemPage