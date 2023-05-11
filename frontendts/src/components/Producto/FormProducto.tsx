
import React, { useState, useEffect } from "react";
import { ITipoProducto } from './ITipoProducto'
import { IMarca } from './IMarca'
import { IModelo } from './IModelo'
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { ListTipoProducto } from '../../Service/General';
import { IoIosSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { AutoCompleteTipoProducto } from '../AutoComplete/AutoCompleteTipoProducto'
import { AutoCompleteMarca } from "../AutoComplete/AutoCompleteMarca";
import { AutoCompleteModelo } from "../AutoComplete/AutoCompleteModelo";
import { IUnidadMedida } from '../../Models/General/IUnidadMedida'
import { IProducto } from "../../Models/Producto/IProducto";
import { IProductoMainItem } from "../../Models/Producto/IProductoMainItem";
import { useParams } from "react-router-dom"

function FormProducto() {

    const API = import.meta.env.VITE_REACT_API_URL

    const [GetTipoProductoId, setTipoProductoId] = useState<number>(0);
    const [GetTextNomTipoProducto, SetTextNomTipoProducto] = useState<string>('');

    const [GetModeloId, setModeloId] = React.useState<number>(0);
    const [GetTextNomModelo, SetTextNomModelo] = useState<string>('');

    const [GetMarcaId, setMarcaId] = React.useState<number>(0);
    const [GetTextNomMarca, SetTextNomMarca] = useState<string>('');


    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);

    const [selectedOption, setSelectedOption] = useState<String>();
    const [DataUnidadedida, setDataUnidadedida] = useState<IOpcionUnidadMedida[]>([]);
    const [GetValueUM, SetValueUM] = useState<string>('');
    const [GetCodigo, SetCodigo] = useState<string>('');
    const [GetCodigoInterno, SetCodigoInterno] = useState<string>('');
    const [GetDescripcion, SetDescripcion] = useState<string>('');


    let parames = useParams();


    interface IOpcionUnidadMedida {
        value: number,
        label: string;
    }

    useEffect(() => {
        (async () => {
            try {
                getItems();

                SetValueUM('0')

                getItemCabecera();
            } catch (e) {
                // Some fetch error
            }
        })();
    }, []);

    const getItemCabecera = async () => {
        try {

            fetch(`${API}/api/Producto/Get_ProductoMainItem/${parames.Id}`)
                .then((response) => response.json())
                .then((items) => {


                    SetCodigo(items[0].Codigo);
                    SetCodigoInterno(items[0].CodigoInterno);
                    setTipoProductoId(items[0].TipoProductoId);
                    SetTextNomTipoProducto(items[0].NomTipoProducto);
                    setMarcaId(items[0].MarcaId);
                    SetTextNomMarca(items[0].NomMarca);
                    setModeloId(items[0].ModeloId);
                    SetTextNomModelo(items[0].NomModelo);
                    SetValueUM(items[0].UnidadMedidaId)
                    SetDescripcion(items[0].Descripcion);
                }
                )
                .catch((err) => console.log(err));

        }
        catch (e) {
            console.log(e)
        }

        // DataUnidadedida.map((d) => {

        //     var test: IOpcionUnidadMedida = {
        //         value: d.UnidadMedidaId,
        //         label: d.Nombre
        //     };
        //     GetDatosUnidad.push(test);
        // })


        // console.log(GetDatosUnidad)
    };
    const Onclick_Guardar = () => {

        fetch(`${API}/api/Producto/Producto_Insert/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductoId: 0,
                Codigo: GetCodigo,
                CodigoInterno: GetCodigoInterno,
                TipoProductoId: GetTipoProductoId,
                MarcaId: GetMarcaId,
                ModeloId: GetModeloId,
                Descripcion: GetDescripcion,
                UnidadMedidaId: selectedOption,
                PrecioVenta: 0,
                PrecioCompra: 0,
                MonedaId: 0,
                FechaRegistro: new Date(),
                CodUsuario: 'dtimo',
                Estado: true
            })
        })
            .then(response => response.json())
            .then((item: IProducto) => {
                if (item.MarcaId > 0) {
                    SetTextNomTipoProducto('');
                    SetTextNomMarca('');
                    SetTextNomModelo('');
                    SetValueUM('0')
                    setVisible(true);
                } else {
                    console.log(item);
                    return
                }

            })
            .catch(err => console.log(err))

    };
    const getItems = async () => {
        try {

            fetch(`${API}/api/General/Get_UnidadMedidaItems/`)
                .then((response) => response.json())
                .then((items) => setDataUnidadedida(items))
                .catch((err) => console.log(err));



        }
        catch (e) {
            console.log(e)
        }

        // DataUnidadedida.map((d) => {

        //     var test: IOpcionUnidadMedida = {
        //         value: d.UnidadMedidaId,
        //         label: d.Nombre
        //     };
        //     GetDatosUnidad.push(test);
        // })


        // console.log(GetDatosUnidad)
    };
    const items = DataUnidadedida.map((item) => {
        return (
            <option value={item.value}>{item.label}</option>
        );
    });


    const onChangeHandlerCodigo = (event: any) => {

        SetCodigo(event.target.value)
    }
    const onChangeHandlerCodigoInterno = (event: any) => {

        SetCodigoInterno(event.target.value)
    }

    const onChangeHandlerDescripcion = (event: any) => {

        SetDescripcion(event.target.value)
    }


    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        SetValueUM(value)
        console.log(event.target.value);
    };

    return (
        <div className="container">

            <div className="col-sm-12">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>* <b>Producto</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <a className="btn btn-success"
                                onClick={Onclick_Guardar}
                            >
                                <i className="material-icons">
                                    <IoIosSave /></i>
                                <span>Guardar</span></a>
                            <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"><MdDelete /></i> <span>Borrar</span></a>


                        </div>

                    </div>
                </div>
            </div>   <Alert isOpen={visible} toggle={onDismiss}>
                Se grabo la informacion correctamente
            </Alert>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <Label for="validationCustom01" className="form-label">Codigo</Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={onChangeHandlerCodigo}
                                    value={GetCodigo}
                                    id="validationCustom01" required />

                            </div>

                            <div className="col">
                                <Label for="validationCustom02" className="form-label"> Codigo Interno</Label>
                                <input type="text"
                                    value={GetCodigoInterno}
                                    onChange={onChangeHandlerCodigoInterno}
                                    className="form-control" id="validationCustom02" required />

                            </div>
                        </div>

                        <div className="mb-3">

                            <AutoCompleteTipoProducto
                                Id={setTipoProductoId}
                                placeholder={"Ingrese Producto"}
                                headerItem={"Tipo"}
                                GetText={GetTextNomTipoProducto}
                                SetTextNom={SetTextNomTipoProducto}
                            />
                        </div>



                        <div className="mb-3">
                            <AutoCompleteMarca
                                Id={setMarcaId}
                                placeholder={"Ingrese Marca"}
                                headerItem={"Marca"}
                                GetText={GetTextNomMarca}
                                SetTextNom={SetTextNomMarca}
                            />
                        </div>
                        <div className="mb-3">
                            <AutoCompleteModelo
                                Id={setModeloId}
                                placeholder={"Ingrese Modelo"}
                                headerItem={"Modelo"}
                                GetText={GetTextNomModelo}
                                SetTextNom={SetTextNomModelo}
                            />
                        </div>
                        <div className="mb-3">
                            <Label
                                className="font-weight-bold"
                                for="exampleSelect">
                                Unidad de Medida
                            </Label>
                            <select className="form-control"
                                value={GetValueUM}
                                onChange={selectChange} >
                                <option value={0} selected disabled >
                                    Seleccionar ---------------------------------------------------------------
                                </option>
                                {items}



                            </select>
                        </div>


                        <div className="mb-3">
                            <Label for="validationCustom01" className="form-label">Descripcion</Label>
                            <Input type="textarea"
                                value={GetDescripcion}
                                onChange={onChangeHandlerDescripcion}
                                name="text" />
                        </div>





                    </div>
                </div>
            </div>
        </div >
    )
}

export default FormProducto;