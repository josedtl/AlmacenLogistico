import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { ReservaResumenModel, ReservaPedidoModel, ReservaDetalleEntity } from '../../../Models/ReservaEntity';
import ModalItem from './ModalItem';
import ReservaService from '../../../Service/ReservaService';
import { Tabs, message, Col, Row, Typography, Modal, Spin, Input, Flex, Layout, Segmented, Avatar } from 'antd';
import { SaveFilled } from '@ant-design/icons';
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
  const [ItemReservaDetalle, setItemReservaDetalle] = useState<ReservaDetalleEntity[]>([]);
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

      <Title level={2}> {'Reserva'}</Title>
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

  const footerStyle: React.CSSProperties = {
    borderColor: "#15616d",
  };
  const sOrdenPedido = new ReservaService();
  const Guardar_Total = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    filterItems.forEach((d) => (
      ItemReservaDetalle.push(d)
    ));

    console.log(ItemReservaDetalle);
    const savedItem = await sOrdenPedido.ReservarMercaderiaDetalle(ItemReservaDetalle);

    if (savedItem) {
      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });


    } else {
    }


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

          <Footer style={footerStyle}>

            <Row>
              <Col span={5}>
                <Row>
                  <Col span={12}>
                    <label>Usuario : </label>
                  </Col>
                  <Col span={12}>
                    <label
                      className='CodUsuario'
                      style={{ marginTop: '5px', marginBottom: '10px' }}></label>

                    {/* <Input
          type="string"
          name="Stock"
          style={{ marginTop: '5px', marginBottom: '10px' }}
          readOnly={true}
          value={Ent.CodUsuario}
        /> */}
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <label>Fecha Modificación : </label>
                  </Col>
                  <Col span={12}>
                    <label
                      className='FechaRegistro'
                      style={{ marginTop: '5px', marginBottom: '10px' }}></label>
                    {/* <Input
          type="string"
          name="FechaRegistro"
          style={{ marginTop: '5px', marginBottom: '10px' }}
          readOnly={true}
          value={moment(Ent.FechaRegistro).format('DD/MM/YYYY hh:mm')}
        /> */}
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <label>Fecha Creación : </label>
                  </Col>
                  <Col span={12}>
                    <label
                      className='FechaRegistro'
                      style={{ marginTop: '5px', marginBottom: '10px' }}></label>
                    {/* <Input
          type="string"
          name="FechaRegistro"
          style={{ marginTop: '5px', marginBottom: '10px' }}
          readOnly={true}
          value={moment(Ent.FechaRegistro).format('DD/MM/YYYY hh:mm')}
        /> */}
                  </Col>
                </Row>




              </Col>
              <Col span={16}>

              </Col>

              <Col span={2}>
                {/* <Button
      style={ButtonAddMain}
      onClick={Guardar_Total}
      size={"large"}
      icon={IconSave}
    >
      Guardar
    </Button> */}

                <Segmented
                  style={{ float: "right" }}
                  options={[

                    {
                      label: (
                        <div style={{ padding: 4 }} onClick={Guardar_Total}>
                          <Avatar style={{
                            backgroundColor: "#15616d",
                            borderColor: "#15616d",

                          }}
                            // onClick={Guardar_Total}
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
            </Row>

            <Row>



            </Row>
          </Footer>

        </Layout>
      </Flex>

    </Spin>

  );
}

export default Page;




