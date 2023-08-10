import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'

const PaginacionProductos = ({paginaActual, cambiarPagina}) => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", marginY: "1em"}}>
    <Stack spacing={2}>
    <Pagination count={10} page={paginaActual} onChange={cambiarPagina}/>
    </Stack>
    </Box>
  )
}

export default PaginacionProductos;