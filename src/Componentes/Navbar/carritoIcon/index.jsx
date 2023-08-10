import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CarritoGlobal } from '../../../context';
import { useNavigate } from 'react-router-dom';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CarritoIcon = () => {
  const navegar = useNavigate();

const navegarCarrito = () => {
  navegar("/carrito");}
const {itemsCarrito} = React.useContext(CarritoGlobal);

  return (
    <IconButton aria-label="cart" onClick={navegarCarrito}>
      <StyledBadge badgeContent={itemsCarrito} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
export default CarritoIcon;