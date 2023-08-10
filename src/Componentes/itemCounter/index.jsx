import { Box, Button } from '@mui/material'
import React from 'react'

const ItemCounter = ({contador, setContador}) => {

    const sumarContador = () =>{
        setContador(contador + 1);
    };

    const restarContador = () => {
        if (contador <= 1) {
            return;
        }
        setContador(contador - 1)
    };

  return (
    <Box sx={{display:"flex", alignItems: "center"}}>
        <Button onClick={restarContador}>-</Button>
            <Box padding={1.4}>{contador}</Box>
        <Button onClick={sumarContador}>+</Button>
    </Box>
  )
}

export default ItemCounter