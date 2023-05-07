
import React, { useState, useEffect } from "react";
import { ITipoProducto } from './ITipoProducto'
import { IMarca } from './IMarca'
import { IModelo } from './IModelo'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ListTipoProducto } from '../../Service/General';
import { IoIosSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";
function FormProducto() {

    const API = import.meta.env.VITE_REACT_API_URL
    const [dataTipoProducto, setdataTipoProducto] = useState<ITipoProducto[]>([]);
    const [dataMarca, setdataMarca] = useState<IMarca[]>([]);
    const [dataModelo, setdataModelo] = useState<IModelo[]>([]);

    const [text, setText] = React.useState('');
    const [textMarca, setTextMarca] = React.useState('');
    const [textModelo, setTextModelo] = React.useState('');

    const onChangeTipoProducto = (event: any) => {
        event.preventDefault();
        var Cont: number = event.target.value.length;


        if (Cont > 2) {

            fetch(`${API}/api/General/Post_TipoProductoItemsLikePost/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: event.target.value
                })
            }).then((response) => response.json())
                .then((items) => setdataTipoProducto(items))
                .catch((err) => console.log(err));



        } else {
            setdataTipoProducto([])
        }

        setText(event.target.value);
    }

    const onChangeMarca = (event: any) => {
        event.preventDefault();
        var Cont: number = event.target.value.length;


        if (Cont > 2) {



            fetch(`${API}/api/General/Get_MarcaItemsLike/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: event.target.value
                })
            }).then((response) => response.json())
                .then((items) => setdataMarca(items))
                .catch((err) => console.log(err));



        } else {
            setdataMarca([])
        }

        setTextMarca(event.target.value);
    }


    const onChangeModelo = (event: any) => {
        event.preventDefault();
        var Cont: number = event.target.value.length;


        if (Cont > 2) {


            fetch(`${API}/api/General/Get_ModeloItemsLike/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: event.target.value
                })
            }).then((response) => response.json())
                .then((items) => setdataModelo(items))
                .catch((err) => console.log(err));



        } else {
            setdataModelo([])
        }

        setTextModelo(event.target.value);
    }





    // useEffect(() => {
    //     getItems();
    //   }, []);

    return (
        <div className="container">

            <div className="col-sm-12">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>* <b>Producto</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"><IoIosSave/></i> <span>Guardar</span></a>
                            <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"><MdDelete/></i> <span>Borrar</span></a>


                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
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
                        <div className="mb-3">
                            <Label for="exampleFormControlInput1" class="form-label">Marca</Label>
                            <Input
                                className="form-control"
                                type="search"
                                list="listMarca"
                                autoComplete="on"
                                value={textMarca}
                                placeholder="Ingrese Marca"
                                onChange={onChangeMarca} />
                            <datalist id="listMarca" style={{ display: "none", textAlign: "left" }} >
                                {dataMarca.map(d => <option key={d.MarcaId} value={d.Nombre} />)}
                            </datalist>
                        </div>

                        <div className="mb-3">
                            <Label for="exampleFormControlInput1" class="form-label">Modelo</Label>
                            <Input
                                className="form-control"
                                type="search"
                                list="listModelo"
                                autoComplete="on"
                                value={textModelo}
                                placeholder="Ingrese Modelo"
                                onChange={onChangeModelo} />
                            <datalist id="listModelo" style={{ display: "none", textAlign: "left" }} >
                                {dataModelo.map(d => <option key={d.ModeloId} value={d.Nombre} />)}
                            </datalist>
                        </div>




                        <div className="row">
                            <div className="col">
                                <Label for="validationCustom01" className="form-label">Valor Compra</Label>
                                <input type="number" className="form-control"
                                    id="validationCustom01" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>

                            <div className="col">
                                <Label for="validationCustom02" className="form-label">Valor Venta</Label>
                                <input type="number" className="form-control" id="validationCustom02" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>





                    </div>
                </div>


            </div>



        </div>
    )
}

export default FormProducto;