import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import ItemCounter from '../../../itemCounter';
import { CarritoGlobal } from '../../../../context';

const Item = ({ data }) => {

  const [contador, setContador] = React.useState(1);
  const {agregarItem} = React.useContext(CarritoGlobal);
  
  const agregarCarrito = () => {
    agregarItem ({
      titulo: data.tittle,
      imagen: data.image,
      precio: data.price * contador,
      cantidad: contador
    });
  }

  return (
    <Card sx={{ maxWidth: 345, display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
      <CardMedia
        component="img"
        alt={data.tittle}
        height="240"
        image={data.image}
      />
      <CardContent>
        <Link to={`/producto/${data.id}`} style={{ textDecoration: "none", color: "black" }}>
          <Typography gutterBottom variant="h5" component="div">
          ${data.price}
          </Typography>
        </Link>
        <Link to={`/producto/${data.id}`} style={{ textDecoration: "none" }}>
        <Typography variant="body2" color="text.secondary">
          {data.tittle}
        </Typography>
        </Link>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
        <ItemCounter contador = {contador} setContador={setContador} />
        <Button size="small" onClick={agregarCarrito}>Añadir a Carrito</Button>
      </CardActions>
    </Card>
  );
}

export default Item;