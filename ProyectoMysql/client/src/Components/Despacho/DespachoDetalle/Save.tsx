import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import ModalItem from './ModalItem';
import { Tabs, DatePicker, message, Select, Col, Row, Typography, Modal, Spin, Flex, Layout, Input, Segmented, Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { SaveFilled } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { InputStatus } from 'antd/lib/_util/statusUtils'

//entitys
import { DespachoEntity, DespachoCabeceraModel, DespachoDetalleModel } from '../../../Models/DespachoEntity'
import { OrdenPedidoEntity } from '../../../Models/OrdenPedidoEntity'
import { EntidadNombreCompletoModel } from '../../../Models/GeneralEntity'

//service
import DespachoService from '../../../Service/DespachoService'
import OrdenPedidoService from '../../../Service/OrdenPedidoService';

import GeneralService from '../../../Service/GeneralService';

function Page() {

    // Variables Globales
    const { Id } = useParams();
    const idNumero = Number(Id?.toString());

    // Instancia 
    const sDespacho = new DespachoService();

    const sOrdenPedido = new OrdenPedidoService();
    const sGeneral = new GeneralService();

    //const [items, setItems] = useState<DespachoDetalleEntity[]>([]);

    const [items, setItems] = useState<DespachoDetalleModel[]>([]);
    //const [Ent, setEnt] = useState<DespachoDetalleEntity>(new DespachoDetalleEntity());


    const [CargarPage, setCargarPage] = React.useState(true);
    const [KeyTabs, setKeyTabs] = useState<String>('');
    const [disabled] = useState(false);

    const [Ent, setEnt] = useState<DespachoEntity>(new DespachoEntity());

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

    const { Footer, Content } = Layout;
    const onchange_Persona = async (value: number) => {
        setValEntregado('');
        Ent.EntidadId = value;
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
        setItems([])
        if (Id > 0) {

            const Resp_Cabecera = await sDespacho.GetItemCabecera(Id);
            Resp_Cabecera[0].Action = ProcessActionEnum.Update

            setEnt(Resp_Cabecera[0]);

            const Resp_Detalle = await sDespacho.GetItemDetalle(Id);

            if (Resp_Detalle.length > 0) {

                Resp_Detalle.map((data) => {
                    data.Action = ProcessActionEnum.Update;

                })

                setItems(Resp_Detalle);
                Ent.DetalleItems = Resp_Detalle
            }
        }

        setCargarPage(false);
    }



    const AddProducto = async () => {
        try {

            Ent.Action = Ent.DespachoId == 0 ? 1 : 3;
            if (Ent.DespachoId === 0) {
                Ent.FechaRegistro = new Date();
                Ent.Action = 1;
            }

            Ent.DetalleItems = items;

            // console.log(Ent);
            const savedItem = await sDespacho.saveItem(Ent);
            console.log ('NADA')
            console.log(savedItem);

            if (savedItem) {

                setEnt(savedItem)
                setItems(savedItem.DetalleItems)
                getCargarDatos(savedItem.DespachoId);
                messageAdd.open({
                    type: 'success',
                    content: 'Se guardó correctamente.',
                });


            } else {

            }

        }
        catch (e) {
            console.log(e);
        }

    }



    const Guardar_Total = async (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('guardado')
        e.preventDefault();
        KeyTabs;

        if (Ent.EntidadEntregadoId === 0) {
            setValEntregado('error');
            messageAdd.open({ type: 'error', content: 'Seleccione al responsable', });
            return;
        }

        selectedEntregado
        console.log(Ent.Action);
        console.log(Ent);
        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea guardar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {


                AddProducto();

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

    const contentStyle: React.CSSProperties = {

        marginLeft: 50,
        marginRight: 50

    };




    return (
        <Spin spinning={CargarPage} tip="Cargando" size="large">

            <Flex gap="middle" wrap="wrap" >

                <Layout style={{
                }}>


                    <Content style={contentStyle}>


                        {contextHolder}
                        {contextHolderAdd}
                        <Row>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>


                                <Title level={2}> Despacho</Title>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>


                            </Col>
                        </Row>
                        <Row>

                            <Col xs={3} >
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
                            <Col xs={18}>
                                <Row>
                                    <Col span={24}>
                                        <label>Responsable</label>
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            type="string"
                                            name="Stock"
                                            style={{ marginTop: '5px', marginBottom: '10px' }}
                                            readOnly={true}
                                            value={Ent.NomResponsable}
                                        />


                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={3} >
                                <Row>
                                    <Col span={24}>
                                        <label>Fecha de Registro</label>
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            type="string"
                                            name="Stock"
                                            style={{ marginTop: '5px', marginBottom: '10px' }}
                                            readOnly={true}
                                        // value={Ent.FechaRegistro}
                                        />

                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                        <Row>

                            <Col xs={15}>
                                <Row>
                                    <Col span={24}>
                                        <label>Entregado a :</label>
                                    </Col>
                                    <Col span={24}>

                                        <Select
                                            status={ValEntregado}
                                            showSearch
                                            style={{ width: '95%', marginTop: '5px', marginBottom: '10px' }}
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

                            <Col xs={3} >
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
                            <Col xs={3} >
                                <Row>
                                    <Col span={24}>
                                        <label>Fecha de Registro</label>
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
                                                            <DataTable DataList={items} EsTabla={disabled} />

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
                    </Content>


                </Layout>
            </Flex>

        </Spin>

    );






}

export default Page;