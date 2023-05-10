
import React, {  useState, useEffect } from "react";
import { Fragment } from "react";
import { AutoCompleteTipoProducto } from "./AutoComplete/AutoCompleteTipoProducto";

function About() {

    const [GetTipoProductoId, setTipoProductoId] = useState<number>(0);
    const [GetTextNom, SetTextNom] = useState<string>('');

    const Onclick_Guardar = () => {
        SetTextNom('');

    }


    return (<Fragment>

        <AutoCompleteTipoProducto
            Id={setTipoProductoId}
            placeholder={"Ingrese Producto"}
            headerItem={"Tipo"}
            GetText={GetTextNom}
            SetTextNom={SetTextNom}

        />
        <a className="btn btn-success"
            onClick={Onclick_Guardar}
        >
            <i className="material-icons">
            </i>
            <span>Limiar</span></a>
    </Fragment>)
}
export default About;