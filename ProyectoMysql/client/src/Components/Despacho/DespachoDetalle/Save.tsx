import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import ModalItem from './ModalItem';
import { Tabs, DatePicker, message, Select, Col, Row, Typography, Modal, Spin, Input, Segmented, Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import { SaveFilled } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { InputStatus } from 'antd/lib/_util/statusUtils'

//entitys
import { DespachoEntity, DespachoDetalleEntity, DespachoReservaOPModel } from '../../../Models/DespachoEntity'
import { EntidadNombreCompletoModel } from '../../../Models/GeneralEntity'

//service
import DespachoService from '../../../Service/DespachoService'

import GeneralService from '../../../Service/GeneralService';

function Page() {

    // Variables Globales
    const { Id } = useParams();
    const idNumero = Number(Id?.toString());

    // Instancia 
    const sDespacho = new DespachoService();

    const sGeneral = new GeneralService();

    const [CargarPage, setCargarPage] = React.useState(true);
    const [disabled] = useState(false);

    const [Ent, setEnt] = useState<DespachoEntity>(new DespachoEntity());
    const [EntDetalle, setEntDetalle] = useState<DespachoDetalleEntity[]>([]);
    const [EntDetalleReserva, setEntDetalleReserva] = useState<DespachoReservaOPModel[]>([]);


    const [ValEntregado, setValEntregado] = useState<InputStatus>('');

    const [optionsEntregado, setOptionsEntregado] = useState<EntidadNombreCompletoModel[]>([]);
    const [selectedEntregado, setSelectedEntregado] = useState<number | undefined>(undefined);

    // Componentes
    const [messageAdd, contextHolderAdd] = message.useMessage();
    const { Title } = Typography;
    const [modal, contextHolder] = Modal.useModal();

    const search_Persona = async (value: string) => {
        try {
            const responseCategoria = await sGeneral.EntidadBuscarNombreCompletoItem(value);
            setOptionsEntregado(responseCategoria);
        } catch (error) {
            console.error('Error al buscar Persona:', error);
        }
    };

    const onchange_Persona = async (value: number) => {
        setValEntregado('');
        Ent.EntidadEntregadoId = value;
        setSelectedEntregado(value);
        selectedEntregado;
    };

    // Load
    useEffect(() => {
        getCargarDatos(idNumero);
    }, []);

    const getCargarDatos = async (Id: number) => {
        setCargarPage(true);
        selectedEntregado;
        setEnt(new DespachoEntity())
        setEntDetalle([])
        if (Id > 0) {

            const Resp_Cabecera = await sDespacho.GetItemCabecera(Id);
            setEnt(Resp_Cabecera[0]);

            const Resp_Detalle = await sDespacho.GetItemDetalle(Id);
            setEntDetalle(Resp_Detalle);
            const Resp_DetalleItem = await sDespacho.GetDetalleOP(Id);
            setEntDetalleReserva(Resp_DetalleItem);


            // if (Resp_Detalle.length > 0) {

            //     Resp_Detalle.map((data) => {
            //         data.Action = ProcessActionEnum.Update;

            //     })

            //     setEntDetalle(Resp_Detalle);
            //     Ent.DetalleItems = Resp_Detalle
            // }

            // Ent.DetalleItems.map((detalle) => {
            //     detalle.DetalleReserva = Resp_DetalleItem.filter(d => d.OrdenPedidoDetalleId = detalle.OrdenPedidoDetalleId)
            // })

            // console.log(Ent);

        }




        setCargarPage(false);
    }



    const AddDespacho = async () => {
        try {
            Ent.DetalleItems = EntDetalle

            Ent.DetalleItems.map((detalle) => {
                detalle.DetalleReservaItem = EntDetalleReserva.filter(d => d.OrdenPedidoDetalleId = detalle.OrdenPedidoDetalleId)
            })

            const savedItem = await sDespacho.saveItem(Ent);
            savedItem;
            // if (EntDetalle.length > 0) {

            //     EntDetalle.map((data) => {
            //         data.Action = ProcessActionEnum.Update;

            //     })

            //     Ent.DetalleItems = EntDetalle
            // }




            // Ent.DetalleItems.map((detalle) => {
            //     detalle.DetalleReserva = EntDetalleReserva.filter(d => d.OrdenPedidoDetalleId = detalle.OrdenPedidoDetalleId)
            // })

            // console.log(Ent);







            //  Ent.DetalleItems = items;

            // const savedItem = await sDespacho.saveItem(Ent);


            // if (savedItem) {

            //     setEnt(savedItem)
            //     setItems(savedItem.DetalleItems)
            //     getCargarDatos(savedItem.DespachoId);
            //     messageAdd.open({
            //         type: 'success',
            //         content: 'Se guardó correctamente.',
            //     });


            // } else {

            // }

        }
        catch (e) {
            console.log(e);
        }

    }



    const Guardar_Total = async (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('guardado')
        e.preventDefault();

        if (Ent.EntidadEntregadoId === 0) {
            setValEntregado('error');
            messageAdd.open({ type: 'error', content: 'Seleccione al responsable', });
            return;
        }

        selectedEntregado
        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea guardar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {


                AddDespacho();

                let secondsToGo = 3;

                const instance = modal.success({
                    title: 'Mensaje de sistema',
                    content: `Se Registro correctamente`,
                });

                const timer = setInterval(() => {
                    secondsToGo -= 1;
                    instance.update({
                        content: `Se Registro correctamente, \nse cerraraen ${secondsToGo} Segundos.`,
                    });
                }, 1000);

                setTimeout(() => {
                    clearInterval(timer);
                    instance.destroy();
                }, secondsToGo * 1000);
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    };

    const operations = <ModalItem buttonLabel="" keyItem={''} />;

    // const contentStyle: React.CSSProperties = {

    //     marginLeft: 50,
    //     marginRight: 50

    // };




    return (
        <Spin spinning={CargarPage} tip="Cargando" size="large">

            {contextHolder}
            {contextHolderAdd}
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>


                    <Title level={2}> Despacho</Title>
                </Col>

            </Row>
            <Row>

                <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={3} >
                    <Row>
                        <Col span={24}>
                            <label>Tipo Requerimiento</label>
                        </Col>
                        <Col span={24}>
                            <Input

                                type="string"
                                name="Stock"
                                style={{ marginTop: '5px', marginBottom: '10px' }}
                                readOnly={true}
                                value={Ent.NomProceso}
                            />

                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={3} >
                    <Row>
                        <Col span={24}>
                            <label>Codigo</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                type="string"
                                name="Codigo"
                                style={{ marginTop: '5px', marginBottom: '10px' }}
                                readOnly={true}
                                value={Ent.Codigo}
                            />


                        </Col>
                    </Row>
                </Col>

                <Col xs={24} sm={16} md={12} lg={11} xl={11} xxl={15}>
                    <Row>
                        <Col span={24}>
                            <label>Responsable</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                type="string"
                                name="NomResponsable"
                                style={{ marginTop: '5px', marginBottom: '10px' }}
                                readOnly={true}
                                value={Ent.NomResponsable}
                            />


                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={8} md={12} lg={5} xl={5} xxl={3}>
                    <Row>
                        <Col span={24}>
                            <label>Fecha de Registro</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                type="text"
                                name="FechaRegistro"
                                style={{ marginTop: '5px', marginBottom: '10px' }}
                                readOnly={true}
                                value={Ent.FechaRegistro}
                            />
                        </Col>
                    </Row>
                </Col>

            </Row>

            <Row>

                <Col xs={24} sm={24} md={12} lg={15} xl={15} xxl={18}>
                    <Row>
                        <Col span={24}>
                            <label>Entregado a :</label>
                        </Col>
                        <Col span={24}>

                            <Select
                                status={ValEntregado}
                                showSearch
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                defaultActiveFirstOption={false}
                                filterOption={false}
                                onSearch={search_Persona}
                                value={Ent.EntidadEntregadoId === 0 ? null : Ent.EntidadEntregadoId}
                                key={Ent.EntidadEntregadoId}
                                onChange={onchange_Persona}
                            >
                                {optionsEntregado.map((Persona) => (
                                    <Select.Option key={Persona.EntidadId} value={Persona.EntidadId}>
                                        {Persona.Nombres}
                                    </Select.Option>
                                ))}
                            </Select>

                        </Col>
                    </Row>
                </Col>

                <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={3}>
                    <Row>
                        <Col span={24}>
                            <label>Hora</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                type="time"
                                name="Stock"
                                style={{ marginTop: '5px', marginBottom: '10px' }}
                            //  readOnly={true}
                            //   value={Ent.FechaHoraEntrega}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={12} lg={5} xl={5} xxl={3} >
                    <Row>
                        <Col span={24}>
                            <label>Fecha de Entrega</label>
                        </Col>
                        <Col span={24}>
                            <DatePicker
                                //   onChange={onChangeDate}
                                //   value={dayjs(FechaEmisionItem, dateFormat)}
                                style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                                size='middle' />

                        </Col>
                    </Row>
                </Col>


            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Tabs
                        tabBarExtraContent={operations}
                        // style={{ marginLeft: '20px' }}
                        key={'TabGeneral'}
                        type="card"

                        items={new Array(1).fill(null).map((_, i) => {
                            i;
                            return {
                                label: (
                                    < >
                                        <Title style={{ fontSize: '18px' }}>
                                            Detalle
                                        </Title>
                                    </>
                                ),
                                key: '1',
                                children:
                                    <span>

                                        <Row style={{

                                            height: 'calc(100px + 40vh)',
                                        }
                                        }>
                                            <Col xs={24}>
                                                <DataTable DataList={EntDetalle} EsTabla={disabled} />

                                            </Col>
                                        </Row >
                                    </span>,


                            };
                        })}
                    />
                </Col>


            </Row>

            <Col span={2}>
                <Segmented
                    style={{ float: "right" }}
                    options={[

                        {
                            label: (
                                <div style={{ padding: 4 }}
                                    onClick={Guardar_Total}
                                >
                                    <Avatar style={{
                                        backgroundColor: "#15616d",
                                        borderColor: "#15616d",

                                    }}
                                        shape="square"
                                        size={60}
                                        icon={<SaveFilled />} />
                                    <div>Guardar</div>
                                </div>
                            ),
                            value: 'Guardar',
                        },
                    ]}
                />

            </Col>



        </Spin>

    );






}

export default Page;