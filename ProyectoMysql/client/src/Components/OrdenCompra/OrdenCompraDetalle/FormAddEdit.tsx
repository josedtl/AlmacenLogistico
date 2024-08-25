import React, { useState, useEffect } from "react";
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { Button, Col, Row, Form, Radio } from 'antd';
import DataTableOrden from './FiltroOrden/DataTableOrden';
import DataTableItem from './FiltroDetalle/DataTableItem';
import type { RadioChangeEvent } from 'antd';

//service
import OrdenCompraService from '../../../Service/OrdenCompraService';



//entity
import { OrdenCompraDetalleEntity } from '../../../Models/OrdenCompraDetalleEntity'
import { OrdenPedidoFiltroOCOModel } from "../../../Models/OrdenPedidoEntity";
import { OrdenPedidoFiltroOCDModel } from '../../../Models/OrdenPedidoDetalleEntity'


const AddEditForm: React.FC<PropsModel> = (props) => {

    const initialOrdenCompraDetalle = new OrdenCompraDetalleEntity();
    const [Ent, setEnt] = useState<OrdenCompraDetalleEntity>(initialOrdenCompraDetalle);




    const [ItemsListaAlter, setItemsListaAlter] = useState<any[]>([]);
    setItemsListaAlter;
    const sOrdenCompra = new OrdenCompraService();

    const [selectedOption, setSelectedOption] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        setSelectedOption(e.target.value);

    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {

            Ent.UnidadMedidaId = 1;
            // Ent.key =props.keyItem;
            console.log(Ent);
            if (Ent.keyItem === '') {
                Ent.keyItem = generarGuid();
                props.addItemToState(Ent);
                setEnt(new OrdenCompraDetalleEntity());
            }
            else {
                props.updateState(Ent);
            }
            props.toggle();
        } catch (e) {
            console.log(e);
        }
    };
    function generarGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const [optionsOrden, setoptionsOrden] = useState<OrdenPedidoFiltroOCOModel[]>([]);
    const [optionsDetalle, setoptionsDetalle] = useState<OrdenPedidoFiltroOCDModel[]>([]);

    const [CargarPage, setCargarPage] = React.useState(true);


    useEffect(() => {
        CargarPage;
        getItems();
    }, []);


    const getItems = async () => {
        setDisabled;

        const f_Orden = await sOrdenCompra.getObtenerFiltroOCO();
        setoptionsOrden(f_Orden);

        const f_Detalle = await sOrdenCompra.getObtenerFiltroOCD();
        setoptionsDetalle(f_Detalle);

        setCargarPage(false);
    }

    const [disabled, setDisabled] = useState(false);

    const TipoTabla = () => {
        if (selectedOption == 0) {

            return <DataTableOrden DataList={optionsOrden} EsTabla={disabled}
                keyItem={ItemsListaAlter} />

        }
        else {
            return <DataTableItem DataList={optionsDetalle} EsTabla={disabled} keyItem={ItemsListaAlter} />
        }

    }


    return (

        <>

            <Row>
                <Col span={24}>
                    <Row>

                        <Radio.Group
                            style={{ marginTop: '5px', marginBottom: '10px' }}>
                            <Radio value={0} onChange={onChange}   >Por Orden</Radio>
                            <Radio value={1} onChange={onChange}   >Por Item</Radio>
                        </Radio.Group>

                    </Row>
                </Col>

            </Row>


            <Col xs={24} >
                {TipoTabla()}

            </Col>

            <Form.Item>
                <Button
                    onClick={submitFormAdd}
                    style={ButtonAcceptModel}>
                    Aceptar
                </Button>
            </Form.Item>
        </>
    );
}

export default AddEditForm;




