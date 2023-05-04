
import React, { useState, useEffect } from "react";
import { ITipoProducto } from './ITipoProducto'
import { IMarca } from './IMarca'
import { IModelo } from './IModelo'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './ProductoForm.css'
import { ListTipoProducto } from '../../Service/General';

function FormProducto() {

    const API = import.meta.env.VITE_REACT_API_URL
    const [dataTipoProducto, setdataTipoProducto] = useState<ITipoProducto[]>([]);
    const [dataMarca, setdataMarca] = useState<IMarca[]>([]);
    const [dataModelo, setdataModelo] = useState<IModelo[]>([]);

    const [text, setText] = React.useState('');

    const onChangeTipoProducto = (event: any) => {
        var Cont: number = event.target.value.length;
        var Lista: ITipoProducto[] = ListTipoProducto('a')

        console.log(Lista)

        if (Cont > 2) {

            fetch(`${API}/api/General/Get_TipoProductoItemsLike/` + event.target.value)
                .then((response) => response.json())
                .then((items) => setdataTipoProducto(items))
                .catch((err) => console.log(err));
        } else {
            setdataTipoProducto([])
        }

        setText(event.target.value);
    }

    const disabled = React.useMemo(() => {
        return !dataTipoProducto.some(d => d.Nombre === text);
    }, [text]);

    // useEffect(() => {
    //     getItems();
    //   }, []);

    return (
        <div className="container">

            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <div >
                            <Label for="exampleFormControlInput1" class="form-label">Tipo</Label>
                            <Input
                                className="form-control"
                                type="search"
                                list="list"
                                autoComplete="on"
                                value={text}
                                placeholder="Ingrese Tipo de Producto"
                                onChange={onChangeTipoProducto} />
                            <datalist id="list" style={{ display: "none", textAlign: "left" }} >
                                {dataTipoProducto.map(d => <option key={d.TipoProductoId} value={d.Nombre} />)}
                            </datalist>
                        </div>
                        {/* <div >
                            <Label for="exampleFormControlInput1" class="form-label">Marca</Label>
                            <Input
                                className="form-control"
                                type="search"
                                list="list"
                                autoComplete="on"
                                value={text}
                                placeholder="Ingrese Marca"
                                onChange={onChange} />
                            <datalist id="list" style={{ display: "none", textAlign: "left" }} >
                                {data.map(d => <option key={d.TipoProductoId} value={d.Nombre} />)}
                            </datalist>
                        </div>

                        <div >
                            <Label for="exampleFormControlInput1" class="form-label">Modelo</Label>
                            <Input
                                className="form-control"
                                type="search"
                                list="list"
                                autoComplete="on"
                                value={text}
                                placeholder="Ingrese Modelo"
                                onChange={onChange} />
                            <datalist id="list" style={{ display: "none", textAlign: "left" }} >
                                {data.map(d => <option key={d.TipoProductoId} value={d.Nombre} />)}
                            </datalist>
                        </div> */}
                    </div>
                </div>


            </div>



        </div>
    )
}

export default FormProducto;