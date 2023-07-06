import { useNavigate, useParams } from "react-router-dom";
import TabsMenu from "../tabs"
import React from "react";
import { pedirProductos } from "../../listas/productos";
import ListadoItems from "./listado-items/listado-items";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

const categorias = [
    { id: "cel", titulo: "Celulares" },
    { id: "notebooks", titulo: "Notebooks" },
    { id: "pc", titulo: "Computadoras" }
];

const ContenedorProductos = () => {
    const [loading, setLoading] = React.useState(false);

    const { categoria } = useParams();

    const current = categorias.some(cat => cat.id === categoria) ? categoria : "cel";

    const navegar = useNavigate();

    const buscarCategoria = () => {
        switch (current) {
            case "cel":
                return ("Celulares");
            case "notebooks": 
                return ("Notebooks");
            case "pc" :
                return ("pcarmada")
            default :
                return ("Celulares")
        }
    };

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        pedirProductos(buscarCategoria())
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
    }, [categoria])

    React.useEffect(() => {

        if (!categorias.some(cat => cat.id === categoria)) { navegar("/productos/cel") };

    }, [categoria]);

    return (
        <div>
            <TabsMenu current={current} items={categorias} />
        <div>
            {loading ? <Container sx= {{display: "flex", justifyContent: "center", alignItems:"center", height:"60vh"}}><CircularProgress /> </Container> : <ListadoItems items={items}/> }
            
        </div>
        </div>
    )
}

export default ContenedorProductos;