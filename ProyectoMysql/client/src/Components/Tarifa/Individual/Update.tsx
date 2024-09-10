import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';


import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../../Styles/Button'
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'

import MercaderiaService from '../../../Service/MercaderiaService';
import GeneralService from '../../../Service/GeneralService';
import TarifaService from '../../../Service/TarifaService';

import { MercaderiaSaveModel } from '../../../Models/MercaderiaEntity';
import { UnidadMedidaEntity } from '../../../Models/UnidadMedidaEntity';
import { PorcentajeImporteEntity } from '../../../Models/PorcentajeImporteEntity';
import { MonedaEntity } from '../../../Models/MonedaEntity';
import { TarifaEntity } from '../../../Models/TarifaEntity';
const Save = () => {
    const { Id } = useParams();
    const idNumero = Number(Id?.toString());

    const sMercaderia = new MercaderiaService();

    const sGeneral = new GeneralService();
    const sTarifa = new TarifaService();


    const initialMercaderia = new TarifaEntity();
    const [Ent, setEnt] = useState<TarifaEntity>(initialMercaderia);
    const { Title } = Typography;
    const [CargarPage, setCargarPage] = React.useState(true);


    const [optionsMercaderia, setOptionsMercaderia] = useState<MercaderiaSaveModel[]>([]);
    const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

    const [optionsMoneda, setOptionsMoneda] = useState<MonedaEntity[]>([]);
    const [optionsImporte, setOptionsImporte] = useState<PorcentajeImporteEntity[]>([]);
    const [getPrecioSinImpuesto, setPrecioSinImpuesto] = useState<string>('0');
    const [getPrecioConImpuesto, setPrecioConImpuesto] = useState<string>('0');
    const [descuento, setDescuento] = useState<string>('0');

    const getCargarDatos = async () => {

        Ent.Action = ProcessActionEnum.Add
        console.log(idNumero)

        if (idNumero > 0) {

            const Resp_Tarifa = await sTarifa.GetObtenerItem(idNumero);
            setEnt(Resp_Tarifa[0]);

            setPrecioSinImpuesto(Resp_Tarifa[0].PrecioSinImpuesto.toString());
            setPrecioConImpuesto(Resp_Tarifa[0].PrecioConImpuesto.toString());

            const Resp_Mercaderia = await sMercaderia.GetObtenerMercaderiaTarifa(Resp_Tarifa[0].MercaderiaId);
            setOptionsMercaderia(Resp_Mercaderia);

        }

        setCargarPage(false);
    };

    const calcularDescuento = (precioSinImpuesto: number, precioConImpuesto: number) => {
        const descuento = (precioConImpuesto - precioSinImpuesto).toFixed(2);
        setDescuento(descuento);
    };
    const onChangeTextConImpuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValConImpuesto('');
        const decimal = parseFloat(e.target.value.toLowerCase());
        console.log(decimal);
        console.log(e.target.value)
        setPrecioConImpuesto(e.target.value);
        const porcentajeImpuesto = optionsImporte.find(option => option.PorcentajeImpuestoId === Ent.PorcentajeImpuestoId);

        if (porcentajeImpuesto === undefined) {
            console.error('Porcentaje de impuesto no encontrado.');
            return;
        }

        const valorImpuesto = porcentajeImpuesto.Valor;

        if (!isNaN(decimal) && e.target.value.trim() !== "") {
            const precioSinImpuestoCalculado = roundToTwoDecimals(decimal / (1 + valorImpuesto / 100)).toString();
            setPrecioSinImpuesto(precioSinImpuestoCalculado);
            calcularDescuento(parseFloat(precioSinImpuestoCalculado), decimal);
        }

    }

    const onChangeTextSinImpuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrecioSinImpuesto(e.target.value);
        setValSinImpuesto('');

        const decimal = parseFloat(e.target.value.toLowerCase());
        console.log(decimal);

        const porcentajeImpuesto = optionsImporte.find(option => option.PorcentajeImpuestoId === Ent.PorcentajeImpuestoId);

        if (porcentajeImpuesto === undefined) {
            console.error('Porcentaje de impuesto no encontrado.');
            return;
        }

        const valorImpuesto = porcentajeImpuesto.Valor;

        if (!isNaN(decimal) && e.target.value.trim() !== "") {
            const precioConImpuestoCalculado = roundToTwoDecimals(decimal * (1 + valorImpuesto / 100)).toString();
            setPrecioConImpuesto(precioConImpuestoCalculado);
            calcularDescuento(decimal, parseFloat(precioConImpuestoCalculado));

        }
    }


    const roundToTwoDecimals = (num: number): number => {

        return Number(num.toFixed(2));
    };

    const [ValConImpuesto, setValConImpuesto] = useState<InputStatus>('');
    const [ValSinImpuesto, setValSinImpuesto] = useState<InputStatus>('');


    const [modal, contextHolder] = Modal.useModal();
    const [messageAdd, contextHolderAdd] = message.useMessage();



    const AddTarifa = async () => {

        Ent.Action = Ent.TarifaId == 0 ? 1 : 3;
        Ent.PrecioConImpuesto = Number(getPrecioConImpuesto);
        Ent.PrecioSinImpuesto = Number(getPrecioSinImpuesto);

        const savedItem = await sTarifa.saveItem(Ent);
        if (savedItem) {
            messageAdd.open({
                type: 'success',
                content: 'Se guardó correctamente.',
            });
        } else {
            messageAdd.open({
                type: 'error',
                content: 'Error al guardar el item.',
            });
        }
    }


    const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();



        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea guardar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                Ent.FechaCreacion = new Date();
                Ent.Action = Ent.TarifaId == 0 ? ProcessActionEnum.Add : ProcessActionEnum.Update;

                AddTarifa();
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    };


    useEffect(() => {
        async function cargarItem() {

            setCargarPage(true);
            const Resp_UM = await sGeneral.GetUnidadMedidaItems();
            setOptionsUM(Resp_UM);

            const Resp_Moneda = await sGeneral.GetMonedaItems();
            setOptionsMoneda(Resp_Moneda);

            const Resp_Importe = await sGeneral.GetPorcentajeImporteItems();
            setOptionsImporte(Resp_Importe);

            await getCargarDatos();
        }


        cargarItem();


    }, []);

    return (
        <Spin spinning={CargarPage} tip="Cargando" size="large">


            {contextHolder}
            {contextHolderAdd}
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Title level={3}> {Ent.TarifaId > 0 ? 'Tarifa' : 'Agregar Tarifa'}</Title>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Button
                        style={ButtonAddMain}
                        onClick={Guardar_Total}
                        size={"large"}
                        icon={<SaveFilled />}
                    />

                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={10} md={8} lg={7} xl={6}>





                    <Row>
                        <Col span={24}>
                            <label>Mercaderia</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                value={optionsMercaderia.find(m => m.MercaderiaId === Ent.MercaderiaId)?.Nombre || ''}
                               // style={{ marginTop: '5px', marginBottom: '10px' }}
                               style={{
                                marginTop: '5px',
                                marginBottom: '10px',
                                backgroundColor: '#FFF', // Color de fondo claro
                                cursor: 'not-allowed', // Cambia el cursor para indicar que está deshabilitado
                                color: 'black'
                            }}
                            />
                        </Col>
                    </Row>


                    <Row>
                        <Col span={24}>
                            <label>Unidad de Medida</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                value={optionsUM.find(UM => UM.UnidadMedidaId === Ent.UnidadMedidaId)?.Nombre || ''}
                               // style={{ marginTop: '5px', marginBottom: '10px' }} 
                               style={{
                                marginTop: '5px',
                                marginBottom: '10px',
                                backgroundColor: '#FFF', // Color de fondo claro
                                cursor: 'not-allowed', // Cambia el cursor para indicar que está deshabilitado
                                color: 'black'
                            }}/>

                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <label>Moneda</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                value={optionsMoneda.find(m => m.MonedaId === Ent.MonedaId)?.Simbolo + ' - '
                                    + optionsMoneda.find(m => m.MonedaId === Ent.MonedaId)?.CodMoneda || ''}
                               // style={{ marginTop: '5px', marginBottom: '10px' }}
                                style={{
                                    marginTop: '5px',
                                    marginBottom: '10px',
                                    backgroundColor: '#FFF', // Color de fondo claro
                                    cursor: 'not-allowed', // Cambia el cursor para indicar que está deshabilitado
                                    color: 'black'
                                }}
                            />

                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            <Col span={12}>
                                <label>% Impuesto</label>
                            </Col>
                            <Col span={24}>

                                <Input style={{
                                            marginTop: '5px',
                                            marginBottom: '10px',
                                            backgroundColor: '#FFF', // Color de fondo claro
                                            cursor: 'not-allowed', // Cambia el cursor para indicar que está deshabilitado
                                            color: 'black'
                                        }}
                                    value={optionsImporte.find(PI => PI.PorcentajeImpuestoId === Ent.PorcentajeImpuestoId)?.Nombre + ' - ' +
                                        optionsImporte.find(PI => PI.PorcentajeImpuestoId === Ent.PorcentajeImpuestoId)?.Valor || ''}
                                />
                            </Col>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <label>Descuento</label>
                                </Col>
                                <Col span={24}>
                                    <Input
                                        type="number"
                                        value={descuento} disabled
                                        style={{
                                            marginTop: '5px',
                                            marginBottom: '10px',
                                            backgroundColor: '#FFF', // Color de fondo claro
                                            cursor: 'not-allowed', // Cambia el cursor para indicar que está deshabilitado
                                            color: 'black'
                                        }}
                                    // style={{ marginTop: '5px', marginBottom: '10px' }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>


                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <label>Precio Sin Impuesto</label>
                                </Col>
                                <Col span={24}>
                                    <Input

                                        status={ValSinImpuesto}
                                        type="decimal"
                                        name="PrecioSinImpuesto"
                                        style={{ marginTop: '5px', marginBottom: '10px' }}
                                        onChange={onChangeTextSinImpuesto}
                                        value={getPrecioSinImpuesto === null ? "" : getPrecioSinImpuesto}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <label>Precio Con Impuesto</label>
                                </Col>
                                <Col span={24}>
                                    <Input
                                        status={ValConImpuesto}
                                        type="number"
                                        name="PrecioConImpuesto"
                                        style={{ marginTop: '5px', marginBottom: '10px' }}
                                        onChange={onChangeTextConImpuesto}
                                        value={getPrecioConImpuesto === null ? "" : getPrecioConImpuesto}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} sm={14} md={16} lg={17} xl={18}>
                    <Tabs
                        style={{ marginLeft: '20px' }}
                        type="line"
                    />
                </Col>
            </Row>
        </Spin>
    );
};


export default Save;