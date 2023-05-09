
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
function FormProducto() {

    const API = import.meta.env.VITE_REACT_API_URL


    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible(false);

    const [GetNomTipoProducto, setNomTipoProducto] = React.useState<string>('');
    const [GetTipoProductoId, setTipoProductoId] = React.useState<number>(0);
    const [GetModeloId, setModeloId] = React.useState<number>(0);
    const [GetMarcaId, setMarcaId] = React.useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<String>();
    const [DataUnidadedida, setDataUnidadedida] = useState<IUnidadMedida[]>([]);

    useEffect(() => {
        (async () => {
            try {
                getItems();
            } catch (e) {
                // Some fetch error
            }
        })();
    }, []);

 
    const Onclick_Guardar = () => {

        fetch(`${API}/api/Producto/Producto_Insert/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductoId: 0,
                TipoProductoId: GetTipoProductoId,
                MarcaId: GetMarcaId,
                ModeloId: GetModeloId,
                NombreProducto: '',
                UnidadMedidaId: selectedOption,
                PrecioVenta: 0,
                PrecioCompra: 0,
                FechaRegistro: new Date(),
                CodUsuario: 'dtimo',
                Estado: true
            })
        })
            .then(response => response.json())
            .then((item: IProducto) => {
                if (item.MarcaId > 0) {
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
            console.log(DataUnidadedida);
        }
        catch (e) {
            console.log(e)
        }
    };
    const items = DataUnidadedida.map((item) => {
        return (
            <option value={item.UnidadMedidaId}>{item.Nombre}</option>
        );
    });


    const onChangeHandler = (event: any) => {

        console.log("david");
    }
    const SeleccionPrueba = (event: any) => {

        console.log(event.target.key);
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
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
            </div>   <Alert  isOpen={visible} toggle={onDismiss}>
                            Se grabo la informacion correctamente
                        </Alert>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                     

                        <div className="mb-3">
                            <AutoCompleteTipoProducto
                                inputStyle={{ backgroundColor: "while" }}
                                optionsStyle={{ backgroundColor: "while" }}
                                iconColor="Turquoise"
                                Id={setTipoProductoId}
                                placeholder={"Ingrese Producto"}
                                headerItem={"Tipo"}
                            />
                        </div>



                        <div className="mb-3">
                            <AutoCompleteMarca
                                inputStyle={{ backgroundColor: "while" }}
                                optionsStyle={{ backgroundColor: "while" }}
                                iconColor="Turquoise"
                                placeholder={"Ingrese Marca"}
                                headerItem={"Marca"}
                                Id={setMarcaId}
                            />
                        </div>
                        <div className="mb-3">
                            <AutoCompleteModelo
                                inputStyle={{ backgroundColor: "while" }}
                                optionsStyle={{ backgroundColor: "while" }}
                                iconColor="Turquoise"
                                Id={setModeloId}
                                placeholder={"Ingrese Modelo"}
                                headerItem={"Modelo"}
                            />
                        </div>
                        <div className="mb-3">
                            <Label
                                className="font-weight-light"
                                for="exampleSelect">
                                Unidad de Medida
                            </Label>
                            <select className="form-control"

                                onChange={selectChange} >
                                <option selected disabled>
                                    Seleccionar unidad de Medida
                                </option>
                                {items}


                            </select>
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
        </div >
    )
}

export default FormProducto;