export const detalleProducto = (id) => {
    return (fetch(`https://api.mercadolibre.com/items/${id}`))
}