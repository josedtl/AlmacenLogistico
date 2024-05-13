import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { ReservaEntity ,ReservaPedidoModel} from '../../../Models/ReservaEntity';
import ModalItem from './ModalItem';
import ProcesoService from '../../../Service/ProcesoService';
import ReservaService from '../../../Service/ReservaService';
import { Tabs, DatePicker, message, Select, Col, Row, Typography, Modal, Spin, Input, Flex, Layout, Segmented, Avatar } from 'antd';
import type { DatePickerProps } from 'antd';
import { ProcesoModel } from '../../../Models/ProcesoEntity';
import { useParams } from 'react-router-dom';
import { ExclamationCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/es';
import dayjs from 'dayjs';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { InputStatus } from 'antd/es/_util/statusUtils';
import { EntDatoModel } from '../../../Models/EntDatoEntity';
import EntDatoService from '../../../Service/EntDatoService';
import { SaveFilled } from '@ant-design/icons';
function Page() {

  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sEntDato = new EntDatoService();
  const sReserva = new ReservaService();
  const sProceso = new ProcesoService();
  const [items, setItems] = useState<ReservaPedidoModel[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled] = useState(false);
  const { Title } = Typography;
  const [Ent, setEnt] = useState<ReservaEntity>(new ReservaEntity());
  const [KeyTabs, setKeyTabs] = useState<String>('');
  const addItemToState = (item: ReservaPedidoModel) => {



  
 

  };

  const updateState = (item: ReservaPedidoModel) => {

 
  };
  const deleteItemFromState = (item: ReservaPedidoModel) => {

    // const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);
    // const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    // setItems(newArray);
    // messageAdd.open({
    //   type: 'error',
    //   content: 'Se eliminó correctamente.',
    // });



  };

  const filterItems = items;


  const [optionsProceso, setOptionsProceso] = useState<ProcesoModel[]>([]);
  const [selectedTipoRequerimeinto, setSelectedTipoRequerimeinto] = useState<number | undefined>(undefined);





  useEffect(() => {
    setKeyTabs(generarGuid());
    const dateEmison = moment(new Date()).format('YYYY-MM-DD')
    getCargarDatos(idNumero);
  }, []);

  const getCargarDatos = async (Id: number) => {
    try {

      setCargarPage(true);
      setEnt(new ReservaEntity())
      setItems([])
      if (Id > 0) {

        // const Resp_Producto = await sReserva.g(Id);
        // Resp_Producto[0].Action = ProcessActionEnum.Update
        // setEnt(Resp_Producto[0]);

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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });


  };
  const operations = <ModalItem buttonLabel="" addItemToState={addItemToState} item={new ReservaPedidoModel()} keyItem={''} />
    ;

  const [modal, contextHolder] = Modal.useModal();
  const dateFormat = 'YYYY/MM/DD';





  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [optionsCategoria, setOptionsCategoria] = useState<EntDatoModel[]>([]);
  const [ValCategoria, setValCategoria] = useState<InputStatus>('');
  const handleSearchCategoria = async (value: string) => {
    try {
      const responseCategoria = await sEntDato.GetNomCompletoItemLike(value);
      setOptionsCategoria(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };


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
  const footerStyle: React.CSSProperties = {
    // backgroundColor: "#C9E1E4",
    borderColor: "#15616d",
  };

  const { Footer, Content } = Layout;
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




