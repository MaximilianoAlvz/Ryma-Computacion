export const pedirProductos = (categoria) => {
    return (fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}&limit=9`))
}