import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { ReservaResumenModel ,ReservaPedidoModel} from '../../../Models/ReservaEntity';
import ModalItem from './ModalItem';
import ReservaService from '../../../Service/ReservaService';
import { Tabs, message, Col, Row, Typography, Modal, Spin, Input, Flex, Layout } from 'antd';

import { useParams } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
function Page() {

  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sReserva = new ReservaService();
  const [items, setItems] = useState<ReservaPedidoModel[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  messageAdd;
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled] = useState(false);
  const { Title } = Typography;
  const [Ent, setEnt] = useState<ReservaResumenModel>(new ReservaResumenModel());
  const [KeyTabs, setKeyTabs] = useState<String>('');
  KeyTabs;
  const addItemToState = (item: ReservaPedidoModel) => {

    item;

  
 

  };

  const updateState = (item: ReservaPedidoModel) => {
    item;
 
  };
  const deleteItemFromState = (item: ReservaPedidoModel) => {
    item;
    // const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);
    // const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    // setItems(newArray);
    // messageAdd.open({
    //   type: 'error',
    //   content: 'Se eliminó correctamente.',
    // });



  };

  const filterItems = items;






  useEffect(() => {
    setKeyTabs(generarGuid());
    const dateEmison = moment(new Date()).format('YYYY-MM-DD')
    dateEmison;
    getCargarDatos(idNumero);
  }, []);

  const getCargarDatos = async (Id: number) => {
    try {

      setCargarPage(true);
      setEnt(new ReservaResumenModel())
      setItems([])
      if (Id > 0) {

        const Resp_Producto = await sReserva.ReservaResumen(Id);
        setEnt(Resp_Producto[0]);

        const Resp_OPDetalle = await sReserva.ReservaPedido(Id);

        if (Resp_OPDetalle.length > 0) {

          // Resp_OPDetalle.map((data) => {
          //   data.keyItem = generarGuid();
          //   data.Action = ProcessActionEnum.Update;

          // })
          console.log(Resp_OPDetalle);
          setItems(Resp_OPDetalle)
          Ent.DetalleItems = Resp_OPDetalle
        }




      }

      setCargarPage(false);
    } catch (e) { console.log(e); }
  };





  function generarGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const operations = <ModalItem buttonLabel="" addItemToState={addItemToState} item={new ReservaPedidoModel()} keyItem={''} />
    ;

  const [modal, contextHolder] = Modal.useModal();
  modal;



  const TituloSave = () => {
    return (

      <Title level={2}> { 'Reserva'}</Title>
    )

  }
  const CodigoSave = () => {
    return (

      <Title level={3}> {Ent.MercaderiaId > 0 ? `Código : ${Ent.Codigo}` : ''}</Title>
    )

  }

  const contentStyle: React.CSSProperties = {
    // margin:50,
    marginLeft: 50,
    marginRight: 50
    // textAlign: 'center',
    // minHeight: 400,
    // lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: '#0958d9',
  };


  const { Footer, Content } = Layout;
  Footer;
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">

      <Flex gap="middle" wrap="wrap" >

        <Layout style={{
          // height:'calc(100px + 100vh)',
          // marginTop: '0px',
          // marginLeft: '-10px'
        }}>


          {/* <Header style={headerStyle}>Header</Header> */}
          <Content style={contentStyle}>


            {contextHolder}
            {contextHolderAdd}
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                {TituloSave()}
                {/* <Title level={3}> {Ent.ReservaId > 0 ? 'Orden de Pedido' : 'Generar Orden de Pedido'}</Title> */}
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div style={{ float: "right" }}>

                  {CodigoSave()}
                </div>

              </Col>
            </Row>
            <Row>


              {/* {CorrelativoDiv()} */}

              <Col xs={3} >
                <Row>
                  <Col span={24}>
                    <label>Codigo</label>
                  </Col>
                  <Col span={24}>
                  <Input
                      type="string"
                      name="Stock"
                      style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                      readOnly={true}
                      value={Ent.Codigo}
                    />

                  </Col>
                </Row>
              </Col>
              <Col xs={15}>
                <Row>
                  <Col span={24}>
                    <label>Mercaderia</label>
                  </Col>
                  <Col span={24}>
                  <Input
                      type="string"
                      name="Stock"
                      style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                      readOnly={true}
                      value={Ent.Nombre}
                    />
                   

                  </Col>
                </Row>
              </Col>

              <Col xs={3} >
                <Row>
                  <Col span={24}>
                    <label>Stock</label>
                  </Col>
                  <Col span={24}>
                  <Input
                      type="string"
                      name="Stock"
                      style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                      readOnly={true}
                      value={Ent.Stock}
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={3} >
                <Row>
                  <Col span={24}>
                    <label>Reserva</label>
                  </Col>
                  <Col span={24}>
                  <Input
                      type="string"
                      name="Stock"
                      style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                      readOnly={true}
                      value={Ent.Reserva}
                    />
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
                              <DataTable DataList={filterItems} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />

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



