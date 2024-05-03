import React from "react";

function ListaGit(props)
{
    return <li>{props.comando}: {props.descripcion}</li>
}

export default ListaGit;