import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { Select, Button, Col, Row, Space, Input, Form, message, Modal } from 'antd';
import MerListaService from '../../../Service/MerListaService';
import MercaderiaService from '../../../Service/MercaderiaService';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { UnidadMedidaEntity } from "../../../Models/UnidadMedidaEntity";
import GeneralService from '../../../Service/GeneralService';

const AddEditForm: React.FC<PropsModel> = (props) => {

    const sGeneralService = new GeneralService();
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
    const [ValCodigoUM, setValCodigoUM] = useState<string>('');
    const [ValProducto, setValProducto] = useState<InputStatus>('');
    const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

    const sMerLista = new MerListaService();
    const sMercaderiaService = new MercaderiaService();
    // useEffect(() => {
    //     const updatedPerson = props.item;
    //     updatedPerson.Action = updatedPerson.OrdenPedidoDetalleId > 0 ? 3 : 1;
    //     setFlaState(updatedPerson.OrdenPedidoDetalleId > 0);
    //     setEnt(updatedPerson);
    // }, []);

    useEffect(() => {

        getItems();
    }, []);


    const getItems = async () => {

        const updatedItem = props.item;
        const Resp_UM = await sGeneralService.GetUnidadMedidaItems();
        setOptionsUM(Resp_UM);
        if (updatedItem.MercaderiaId > 0) {

            const responseProducto = await sMercaderiaService.GetMercaderia_ItemOP(updatedItem.MercaderiaId);
            console.log(responseProducto);




        }



        updatedItem.Action = updatedItem.OrdenPedidoDetalleId > 0 ? ProcessActionEnum.Update : ProcessActionEnum.Add;
        setFlaState(updatedItem.key === '');
        setEnt(updatedItem);
    }

    const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');
    const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);
    selectedUM;
    const onChangeUM = async (value: number) => {
        setValUnidadMedida('');
        Ent.UnidadMedidaId = value;
        setSelectedUM(value)
    };
    const [modal, contextHolder] = Modal.useModal();
    modal;
    return (

        // <Form form={form} name="formItem" layout="vertical" autoComplete="off">
        <>

            {contextHolder}
            {contextHolderAdd}




            <Row>
                <Col span={24}>

                    <Row>
                        <Col span={24}>
                            <label>Unidad de Medida</label>
                        </Col>
                        <Col span={24}>

                            <Select
                                allowClear
                                status={ValUnidadMedida}
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                defaultActiveFirstOption={false}
                                filterOption={false}
                                value={Ent.UnidadMedidaId === 0 ? null : Ent.UnidadMedidaId}
                                key={Ent.UnidadMedidaId}
                                onChange={onChangeUM}
                            >
                                {optionsUM.map((UM) => (
                                    <Select.Option key={UM.UnidadMedidaId} value={UM.UnidadMedidaId}>
                                        {UM.Nombre}
                                    </Select.Option>
                                ))}
                            </Select>

                        </Col>
                    </Row>


                </Col>

            </Row>


            <Row>

                <Col span={24}>


                    <Row>
                        <Col span={24}>
                            <label>Cantidad</label>
                        </Col>
                        <Col span={24}>

                            <Input
                                // suffix={ValCodigoUM}
                                status={ValSolicitar}
                                type="number"
                                name="CantidadSolicitado"
                                style={{  marginTop: '5px', marginBottom: '10px' }}
                                onChange={onChange}
                                value={Ent.CantidadSolicitado === null ? 0 : Ent.CantidadSolicitado}
                            />



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




