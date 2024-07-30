import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import ModalItem from './ModalItem';
import { Tabs, DatePicker, message, Select, Col, Row, Typography, Modal, Spin, Flex, Layout, Input } from 'antd';
import { useParams } from 'react-router-dom';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'

//entitys
import { DespachoEntity, DespachoCabeceraModel,DespachoDetalleModel } from '../../../Models/DespachoEntity'
import { OrdenPedidoEntity } from '../../../Models/OrdenPedidoEntity'
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'

//service
import DespachoService from '../../../Service/DespachoService'
import OrdenPedidoService from '../../../Service/OrdenPedidoService';
function Page() {

  // Variables Globales
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());

    // Instancia 
    const sDespacho = new DespachoService();

    const sOrdenPedido = new OrdenPedidoService();
    //const [items, setItems] = useState<DespachoDetalleEntity[]>([]);
    
  const [items, setItems] = useState<DespachoDetalleModel[]>([]);
    //const [Ent, setEnt] = useState<DespachoDetalleEntity>(new DespachoDetalleEntity());


    const [CargarPage, setCargarPage] = React.useState(true);
    const [KeyTabs, setKeyTabs] = useState<String>('');
    const [disabled] = useState(false);

    const [Ent, setEnt] = useState<DespachoCabeceraModel>(new DespachoCabeceraModel());

    // Componentes
    const [messageAdd, contextHolderAdd] = message.useMessage();
    const { Title } = Typography;
    const [modal, contextHolder] = Modal.useModal();
    const { Footer, Content } = Layout;


    // Load
    useEffect(() => {
        getCargarDatos(idNumero);
    }, []);
    const getCargarDatos = async (Id: number) => {


        setCargarPage(true);
        setEnt(new OrdenPedidoEntity())
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
                                        //    value={Ent.}
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
                                            // status={ValProveedor}
                                            showSearch
                                            style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                            defaultActiveFirstOption={false}
                                            filterOption={false}
                                        // onSearch={handleSearchCategoria}
                                        // value={Ent.EntidadId === 0 ? null : Ent.EntidadId}
                                        // key={Ent.EntidadId}
                                        // onChange={onChangeCategoria}
                                        >
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
                                            readOnly={true}
                                        //   value={Ent.CodUsuario}
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
                    </Content>


                </Layout>
            </Flex>

        </Spin>

    );






}

export default Page;