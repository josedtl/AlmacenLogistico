import React, { useState, useEffect } from "react";
import { ITipoProducto } from '../Models/General/ITipoProducto'

const API = import.meta.env.VITE_REACT_API_URL

export function  ListTipoProducto (Nombre: string):ITipoProducto[]{
    const [dataTipoProducto, setdataTipoProducto] = useState<ITipoProducto[]>([]);
    fetch(`${API}/api/General/Get_TipoProductoItemsLike/` + Nombre)
        .then((response) => response.json())
        .then((items) => setdataTipoProducto(items))
        .catch((err) => console.log(err));


    return dataTipoProducto;
}