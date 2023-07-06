import React from "react";
import Item from "./item";

const ListadoItems = ({items}) => {
    return (
        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", justifyContent:"center", gap: 10, marginTop:10}}>
            {
                items.map((item) => <Item key={item.id} data = {item}/> )
            }
        </div>
    )
}

export default ListadoItems;