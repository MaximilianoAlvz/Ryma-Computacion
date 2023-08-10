import { useNavigate, useParams } from "react-router-dom";
import TabsMenu from "../tabs"
import React from "react";
import { pedirProductos } from "../../listas/productos";
import ListadoItems from "./listado-items/listado-items";
import { CircularProgress, Container} from "@mui/material";
import PaginacionProductos from "../paginacion-productos";

const categorias = [
    { id: "cel", titulo: "Celulares" },
    { id: "notebooks", titulo: "Notebooks" },
    { id: "pc", titulo: "Computadoras" }
];

const ContenedorProductos = () => {
    const [loading, setLoading] = React.useState(false);

///ARRANCA CODIGO PARA NAVEGAR EN CATEGORIAS

    const { categoria } = useParams();

    const current = categorias.some(cat => cat.id === categoria) ? categoria : "cel";

    const navegar = useNavigate();

    const buscarCategoria = () => {
        switch (current) {
            case "cel":
                return ("Celulares");
            case "notebooks":
                return ("Notebooks");
            case "pc":
                return ("pcarmada")
            default:
                return ("Celulares")
        }
    };

/// FINALIZA CODIGO PARA NAVEGAR ENTRE CATEGORIAS

/// COMIENZA CODIGO PARA LA PAGINACION DE LOS PRODUCTOS
const [paginaActual, setPaginaActual] = React.useState(1);
const [offset, setOffset] = React.useState(0);

const diferenciaOffset = (nuevoValor) => {
    const valorAnterior = paginaActual;

    const diferencia = nuevoValor - valorAnterior;
    
    if(diferencia >= 1) {
        setOffset(offset + 9);
    }else {
        setOffset (offset - 9);
    }

}

const handleChangePage = (_, newValue) => {
    setPaginaActual(newValue);
    diferenciaOffset(newValue);
    navegar("/productos/"+ current + "/" + newValue);

};

React.useEffect(() => {
    setPaginaActual(1);
    setOffset(0);
},[categoria]);

/// FINALIZA CODIGO PARA PAGINACION

///ARRANCA CODIGO PARA OBTENER LA LISTA DE ITEMS

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        pedirProductos(buscarCategoria(), offset)
            .then(res => res.json())
            .then(res => {
                const data = res.results?.map((elem) => ({
                    id: elem.id,
                    tittle: elem.title,
                    image: elem.thumbnail,
                    price: elem.price,
                }))
                setItems(data);
                setLoading(false);
            })
    }, [categoria, offset])

    React.useEffect(() => {

        if (!categorias.some(cat => cat.id === categoria)) { navegar("/productos/cel/1") };

    }, [categoria]);

    return (
        <div>
            <TabsMenu current={current} items={categorias} />
            <div>
                {loading ?
                    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}><CircularProgress /> </Container>
                    :
                    <ListadoItems items={items} />}
                {loading ? <></> 
                    :
                    <PaginacionProductos paginaActual = {paginaActual} cambiarPagina = {handleChangePage} /> }

            </div>
        </div>
    )
}

export default ContenedorProductos;