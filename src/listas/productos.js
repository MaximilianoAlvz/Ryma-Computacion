export const pedirProductos = (categoria, start) => {
    return (fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}&offset=${start}&limit=9`))
}