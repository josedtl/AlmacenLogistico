import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { Select, Button, Col, Row, Space, Input, Form, message, Modal } from 'antd';
import MercaderiaService from '../../../Service/MercaderiaService';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { MercaderiaItemOPModel } from "../../../Models/MercaderiaEntity";
const AddEditForm: React.FC<PropsModel> = (props) => {

    const initialOrdenPedidoDetalle = new OrdenPedidoDetalleEntity();
    const [Ent, setEnt] = useState<OrdenPedidoDetalleEntity>(initialOrdenPedidoDetalle);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [ValSolicitar, setValSolicitar] = useState<InputStatus>('');
    const [ValDato, setValDato] = useState<InputStatus>('');
    const [messageAdd, contextHolderAdd] = message.useMessage();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValDato('');
        setValSolicitar('');
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

    };
    FlaState;
    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
           
            if (Ent.MercaderiaId === 0) {
                setValProducto('error');
                messageAdd.open({ type: 'error', content: 'Seleccione un Producto.', });
                return;
            }

            if (Ent.CantidadSolicitado <= 0) {
                setValSolicitar('error');
                messageAdd.open({ type: 'error', content: 'Seleccione un número', });
                return;
            }
    


            // Ent.CantidadSolicitado = 1;
            Ent.UnidadMedidaId = 1;
            // Ent.key =props.keyItem;
            console.log(Ent);
            if (Ent.keyItem === '') {
                Ent.keyItem = generarGuid();
                props.addItemToState(Ent);
                setEnt(new OrdenPedidoDetalleEntity());
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
    const [selectedPRoducto, setSelectedProducto] = useState<number | undefined>(undefined);
    const [ValCodigoUM, setValCodigoUM] = useState<string>('');
    const [ValProducto, setValProducto] = useState<InputStatus>('');

    const sMercaderiaService = new MercaderiaService();
    selectedPRoducto;


    const [optionsProducto, setOptionsProducto] = useState<MercaderiaItemOPModel[]>([]);


    const handleSearchProducto = async (value: string) => {
        try {
            const responseProducto = await sMercaderiaService.BuscarTotal(value);
            setOptionsProducto(responseProducto);

        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }
    };
    const onChangeProducto = async (value: number, Itemdata: any) => {
        try {
            setValProducto('');
            Itemdata;
            Ent.MercaderiaId = value;
            setSelectedProducto(value)

            const resp = await sMercaderiaService.GetMercaderia_ItemOP(value);
            setValCodigoUM(resp[0].CodigoUM);
            Ent.Stock = resp[0].Stock
            Ent.NomProducto = resp[0].Nombre;
            Ent.MercaderiaId = resp[0].MercaderiaId;
            Ent.CodigoUM = resp[0].CodigoUM;

            console.log(resp);

        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }


        // setValCategoria('');

    };
    useEffect(() => {
        // setEnt(new OrdenPedidoDetalleEntity());
   
        getItems();
    }, []);


    const getItems = async () => {

        const updatedItem = props.item;

        if (updatedItem.MercaderiaId > 0) {

            const responseProducto = await sMercaderiaService.GetMercaderia_ItemOP(updatedItem.MercaderiaId);
            console.log(responseProducto);
            if (responseProducto[0].CategoriaId > 0) {
  
                updatedItem.CategoriaId = responseProducto[0].CategoriaId;
                setOptionsProducto(responseProducto);

                console.log(responseProducto);
                setValCodigoUM(responseProducto[0].CodigoUM);
                updatedItem.Stock = responseProducto[0].Stock;
            } else {
      
                setOptionsProducto([]);
                setValCodigoUM("");
                updatedItem.Stock = 0;
            }



        }



        updatedItem.Action = updatedItem.OrdenPedidoDetalleId > 0 ? ProcessActionEnum.Update : ProcessActionEnum.Add;
        setFlaState(updatedItem.key === '');
        setEnt(updatedItem);
    }



    const [modal, contextHolder] = Modal.useModal();
    modal;
    return (

        <>

            {contextHolder}
            {contextHolderAdd}


            <Row>
                <Col span={24}>
                    <label>Producto</label>
                </Col>
                <Col span={24}>
                    <Select
                        status={ValProducto}
                        showSearch
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px', wordWrap: "break-word" }}
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        onSearch={handleSearchProducto}
                        value={Ent.MercaderiaId === 0 ? null : Ent.MercaderiaId}
                        key={Ent.NomProducto}
                        onChange={onChangeProducto}
                    >
                        {optionsProducto.map((Producto) => (
                            <Select.Option key={Producto.MercaderiaId} value={Producto.MercaderiaId}>
                                {Producto.Nombre}
                            </Select.Option>
                        ))}
                    </Select>

                </Col>
            </Row>
            <Row>
                <Col span={12}>

                    <Row>
                        <Col span={24}>
                            <label>Stock</label>
                        </Col>
                        <Col span={24}>
                            <Space direction="vertical" size="middle">

                                <Space.Compact>
                                    <Input
                                        readOnly={true}
                                        type="number"
                                        name="Stock"
                                        style={{ marginTop: '5px', marginBottom: '10px' }}
                                        // onChange={onChangeText}
                                        value={Ent.Stock === null ? 0 : Ent.Stock}
                                    />
                                    <Input
                                        readOnly={true}
                                        status={ValDato}
                                        type="text"
                                        style={{ width: '30%', marginTop: '5px', marginBottom: '10px' }}
                                        name="Nombre"
                                        value={ValCodigoUM}
                                    />
                                </Space.Compact>
                            </Space>
                        </Col>
                    </Row>


                </Col>
                <Col span={12}>


                    <Row>
                        <Col span={24}>
                            <label>Solicitar</label>
                        </Col>
                        <Col span={24}>
                            <Space direction="vertical" size="middle">

                                <Space.Compact>
                                    <Input
                                        // suffix={ValCodigoUM}
                                        status={ValSolicitar}
                                        type="number"
                                        name="CantidadSolicitado"
                                        style={{ width: '70%', marginTop: '5px', marginBottom: '10px' }}
                                        onChange={onChange}
                                        value={Ent.CantidadSolicitado === null ? 0 : Ent.CantidadSolicitado}
                                    />

                                    <Input
                                        readOnly={true}
                                        status={ValDato}
                                        type="text"
                                        style={{ width: '30%', marginTop: '5px', marginBottom: '10px' }}
                                        name="Nombre"
                                        value={ValCodigoUM}
                                    />
                                </Space.Compact>
                            </Space>

                        </Col>
                    </Row>


                </Col>
            </Row>

            <Form.Item>
                <Button
                    onClick={submitFormAdd}
                    style={ButtonAcceptModel}>
                    Aceptar
                </Button>
            </Form.Item>
        </>
        // </Form>
    );
}

export default AddEditForm;




