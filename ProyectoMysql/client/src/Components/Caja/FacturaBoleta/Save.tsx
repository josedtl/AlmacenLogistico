import React, { useEffect, useState } from 'react';
// import DataTable from './OP_Interno/DataTable';
// import DataTable_Venta from './OP_Venta/DataTable';
// import DataTable_Stock from './Op_Stock/DataTable';
// import ModalItem from './OP_Interno/ModalItem';
// import ModalItem_Venta from './OP_Venta/ModalItem';
// import ModalItem_Stock from './Op_Stock/ModalItem';

import { Tabs, DatePicker, message, Select, Col, Row, Typography, Modal, Spin, Input, Segmented, Avatar } from 'antd';
import type { DatePickerProps } from 'antd';
import { useParams } from 'react-router-dom';
import { ExclamationCircleOutlined, TagOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/es';
import dayjs from 'dayjs';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'

import MDFiltro from '../../Entidad/EnlaceEntidad/ModalItem';

import { InputStatus } from 'antd/es/_util/statusUtils';
import { SaveFilled } from '@ant-design/icons';
//SERVICE
import GeneralService from '../../../Service/GeneralService';
import OrdenPedidoService from '../../../Service/OrdenPedidoService';
import SunatService from '../../../Service/SunatService';

//EMTITY
import { EntidadNombreCompletoModel } from '../../../Models/GeneralEntity';
import { ProcesoModel } from '../../../Models/ProcesoEntity';
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity';
import { OrdenPedidoEntity, OrdenPedidoCambioEstadoEDP } from '../../../Models/OrdenPedidoEntity';
import { DatosClienteItemModel } from '../../../Models/GeneralEntity'

import { TipoDocumentoItemModel, TipoOperacionItemModel } from '../../../Models/Sunat/SunatEntity'

function Page() {


  const [optionsTipoDocumento, setOptionsTipoDocumento] = useState<TipoDocumentoItemModel[]>([]);

  const [selectedTipoDocumento, setselectedTipoDocumento] = useState<number | undefined>(undefined);
  const [ValTipoDocumento, setValTipoDocumento] = useState<InputStatus>('');


  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [optionsEntidad, setOptionsEntidad] = useState<EntidadNombreCompletoModel[]>([]);
  const [ValResponsable, setValResponsable] = useState<InputStatus>('');


  // Instancia 
  const sOrdenPedido = new OrdenPedidoService();
  const sGeneral = new GeneralService();
  const sSunat = new SunatService();

  // Variables Globales
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());

  const [items, setItems] = useState<OrdenPedidoDetalleEntity[]>([]);
  const [Ent, setEnt] = useState<OrdenPedidoEntity>(new OrdenPedidoEntity());
  const [Ent_ev, setEnt_ev] = useState<OrdenPedidoCambioEstadoEDP>(new OrdenPedidoCambioEstadoEDP());
  const [FechaEmisionItem, setFechaEmisionItem] = useState<string>(moment(Ent.FechaEmision).format('DD/MM/YYYY hh:mm'));
  setEnt_ev;
  const [CargarPage, setCargarPage] = React.useState(true);
  const [KeyTabs, setKeyTabs] = useState<String>('');
  const [disabled] = useState(false);

  // Componentes
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const { Title } = Typography;

  // Load
  useEffect(() => {
    setKeyTabs(generarGuid());
    const dateEmison = moment(new Date()).format('YYYY-MM-DD')
    setFechaEmisionItem(dateEmison);
    voidCargarDatos(idNumero);
  }, []);

  const voidCargarDatos = async (Id: number) => {
    try {

      setCargarPage(true);
      setEnt(new OrdenPedidoEntity())
      setItems([])
      const Resp_TR = await sSunat.ObtenerTipodocumentoLista();
      setOptionsTipoDocumento(Resp_TR);
      Ent.Action = ProcessActionEnum.Add
      if (Id > 0) {

        const Resp_Producto = await sOrdenPedido.GetItemCabecera(Id);
        Resp_Producto[0].Action = ProcessActionEnum.Update

        setEnt(Resp_Producto[0]);

        const Resp_OPDetalle = await sOrdenPedido.GetItemCabeceraOP(Id);

        if (Resp_OPDetalle.length > 0) {

          Resp_OPDetalle.map((data) => {
            data.keyItem = generarGuid();
            data.Action = ProcessActionEnum.Update;

          })

          setItems(Resp_OPDetalle)
          Ent.DetalleItems = Resp_OPDetalle
        }

        const Resp_Item = await sGeneral.EntidadObtenerNombreCompletoItem(Resp_Producto[0].EntidadId);
        setOptionsEntidad(Resp_Item);

        const dateEmison = moment(Resp_Producto[0].FechaEmision).format('YYYY-MM-DD')
        setFechaEmisionItem(dateEmison);

      }

      setCargarPage(false);
    } catch (e) { console.log(e); }
  };

  // Evemtos

  const event_AgregarDetalle = (item: OrdenPedidoDetalleEntity) => {

    const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);

    if (itemIndex == -1) {
      setItems([...items, item]);

      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });

    }

  };

  const event_ActualizarDetalle = (item: OrdenPedidoDetalleEntity) => {

    if (item.OrdenPedidoDetalleId > 0) {

      const itemIndex = items.findIndex((data) => data.OrdenPedidoDetalleId === item.OrdenPedidoDetalleId);
      const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
      setItems(newArray);
      messageAdd.open({
        type: 'success',
        content: 'Se actualizó correctamente.',
      });
    } else {
      const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);
      const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
      setItems(newArray);
      messageAdd.open({
        type: 'success',
        content: 'Se actualizó correctamente.',
      });
    }
  };

  const event_EliminarDetalle = (item: OrdenPedidoDetalleEntity) => {


    if (item.OrdenPedidoDetalleId > 0) {

      const itemIndex = items.findIndex((data) => data.OrdenPedidoDetalleId === item.OrdenPedidoDetalleId);
      const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
      setItems(newArray);
      messageAdd.open({
        type: 'success',
        content: 'Se actualizó correctamente.',
      });
    } else {
      const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);
      const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
      setItems(newArray);
      messageAdd.open({
        type: 'success',
        content: 'Se actualizó correctamente.',
      });



    }



  };

  const event_AgregarCliente = async (item: DatosClienteItemModel) => {
    const Resp_Entidad = await sGeneral.EntidadObtenerNombreCompletoItem(item.EntidadId);
    setOptionsEntidad(Resp_Entidad);
    Ent.EntidadId = Resp_Entidad[0].EntidadId;
  };

  const filterItems = items.filter(d => d.Action != ProcessActionEnum.Delete);


  const onChangeTipoDocumento= async (value: number) => {
    setValTipoDocumento('');
    Ent.ProcesoId = value;
    setselectedTipoDocumento(value)
    selectedTipoDocumento;

  };

  function generarGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    date;
    setFechaEmisionItem(dateString);
  };
  const [modal, contextHolder] = Modal.useModal();
  const dateFormat = 'YYYY/MM/DD';

  const AddProducto = async () => {
    try {
      if (Ent.OrdenPedidoId === 0) {
        Ent.TipoProcesoId = 1;
        Ent.EstadoProcesoId = 1;
        Ent.FechaRegistro = new Date();
        Ent.EstadoRegistro = true
        Ent.Action = 1;
      }
      const fecha: Date = new Date(FechaEmisionItem + "T00:00:00");
      Ent.FechaEmision = new Date(fecha);
      Ent.CodUsuario = "adm";



      Ent.DetalleItems = items;

      console.log(Ent);
      const savedItem = await sOrdenPedido.saveItem(Ent);
      console.log(savedItem);

      if (savedItem) {

        setEnt(savedItem)
        setItems(savedItem.DetalleItems)
        voidCargarDatos(savedItem.OrdenPedidoId);
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
    e.preventDefault();
    KeyTabs;
    selectedCategoria;
    if (Ent.ProcesoId === 0) {
      setValTipoDocumento('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Tipo de Requerimiento.', });
      return;
    }
    if (Ent.EntidadId === 0) {
      setValResponsable('error');
      messageAdd.open({ type: 'error', content: 'Ingrese Nombre del Responsable .', });
      return;
    }

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

  const Enviar_Total = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    Ent_ev.OrdenPedidoId = Ent.OrdenPedidoId;
    Ent_ev.EstadoProcesoId = 2;



    modal.confirm({
      title: 'Mensaje del Sistema',
      icon: <ExclamationCircleOutlined />,
      content: '¿Desea guardar el registro?',
      okText: 'Si',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {

        await sOrdenPedido.enviarItem(Ent_ev);
        voidCargarDatos(Ent_ev.OrdenPedidoId);
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






  const search_Categoria = async (value: string) => {
    try {
      const responseCategoria = await sGeneral.EntidadBuscarNombreCompletoItem(value);
      setOptionsEntidad(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };
  const onchange_Categoria = async (value: number) => {
    setValResponsable('');
    Ent.EntidadId = value;
    setSelectedCategoria(value)
  };

  const TituloSave = () => {
    return (

      <Title level={3}> {Ent.OrdenPedidoId > 0 ? `Comprobante- ${Ent.NomEstadoProceso}` : 'Comprobante'}</Title>
    )
  }

  // const footerStyle: React.CSSProperties = {
  //   borderColor: "#15616d",
  // };

  // const { Footer } = Layout;


  // const Tabla_TipoRequerimiento = () => {
  //   if (Ent.ProcesoId === 1) {

  //     return (

  //       <DataTable_Stock DataList={filterItems} updateState={event_ActualizarDetalle} deleteItemFromState={event_EliminarDetalle} EsTabla={disabled} />


  //     )
  //   } else if (Ent.ProcesoId === 2) {
  //     return (
  //       <DataTable_Venta DataList={filterItems} updateState={event_ActualizarDetalle} deleteItemFromState={event_EliminarDetalle} EsTabla={disabled} />

  //     )
  //   } else if (Ent.ProcesoId === 3) {
  //     return (
  //       <DataTable DataList={filterItems} updateState={event_ActualizarDetalle} deleteItemFromState={event_EliminarDetalle} EsTabla={disabled} />
  //     )
  //   } else {
  //     return (
  //       <>
  //       </>)
  //   }

  // }


  // const AgregarButton_TipoRequerimiento = () => {
  //   if (Ent.ProcesoId === 1) {

  //     return (


  //       <ModalItem_Stock buttonLabel="" addItemToState={event_AgregarDetalle} item={new OrdenPedidoDetalleEntity()} keyItem={''} />

  //     )
  //   } else if (Ent.ProcesoId === 2) {
  //     return (
  //       <ModalItem_Venta buttonLabel="" addItemToState={event_AgregarDetalle} item={new OrdenPedidoDetalleEntity()} keyItem={''} />

  //     )
  //   } else if (Ent.ProcesoId === 3) {
  //     return (
  //       <ModalItem buttonLabel="" addItemToState={event_AgregarDetalle} item={new OrdenPedidoDetalleEntity()} keyItem={''} />
  //     )
  //   } else {
  //     return (
  //       <>
  //       </>)
  //   }

  // }



  const Method_VerEnviar = () => {
    if (Ent.OrdenPedidoId > 0 && Ent.EstadoProcesoId == 1) {

      return (
        <Col xs={12}>

          <div style={{ padding: 4 }} onClick={Enviar_Total}>
            <Avatar style={{
              backgroundColor: "#15616d",
              borderColor: "#15616d",

            }}

              shape="square"
              size={40}
              icon={<TagOutlined />} />
            <div>Enviar</div>
          </div>
        </Col>

      )

    } else {
      return (
        <>
        </>)
    }

  }


  const Method_VerGuardar = () => {
    if (Ent.EstadoProcesoId == 1 || Ent.EstadoProcesoId == 0) {

      return (
        <Col xs={12}>

          <div style={{ padding: 4 }} onClick={Guardar_Total}>
            <Avatar style={{
              backgroundColor: "#15616d",
              borderColor: "#15616d",

            }}
              // onClick={Guardar_Total}
              shape="square"
              size={40}
              icon={<SaveFilled />} />
            <div>Guardar</div>
          </div>
        </Col>

      )

    } else {
      return (
        <>
        </>)
    }

  }

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">

      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          {TituloSave()}
        </Col>

      </Row>
      <Row>

        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={2} >
          <Row>
            <Col span={24}>
              <label>Tipo Documento</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValTipoDocumento}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.ProcesoId === 0 ? null : Ent.ProcesoId}
                key={Ent.ProcesoId}
                onChange={onChangeTipoDocumento}
              >
                {optionsTipoDocumento.map((i) => (
                  <Select.Option key={i.TipoDocumentoId} value={i.TipoDocumentoId}>
                    {i.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={15} xxl={17}>
          <Row>
            <Col span={24}>
              <label>CLiente</label>
            </Col>
            <Col span={24}>

              <Select
                status={ValResponsable}
                showSearch
                style={{ width: '93%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={search_Categoria}
                value={Ent.EntidadId === 0 ? null : Ent.EntidadId}
                key={Ent.EntidadId}
                onChange={onchange_Categoria}
              >
                {optionsEntidad.map((categoria) => (
                  <Select.Option key={categoria.EntidadId} value={categoria.EntidadId}>
                    {categoria.Nombres}
                  </Select.Option>
                ))}
              </Select>
              <MDFiltro buttonLabel="dsdsd"
                addItemToState={event_AgregarCliente}
                item={new DatosClienteItemModel()}
                CodigoTabla={'M002'}
                title={"Cliente"} />

            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={3} >
          <Row>
            <Col span={24}>
              <label>Fecha de Emision</label>
            </Col>
            <Col span={24}>
              <DatePicker
                onChange={onChangeDate}
                value={dayjs(FechaEmisionItem, dateFormat)}
                style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                size='middle' />

            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={2} >
          <Row>
            <Col span={24}>
              <label>Código</label>
            </Col>
            <Col span={24}>
              <Input
                readOnly={true}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px', background: '#c5dfc7' }}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />


            </Col>
          </Row>
        </Col>

      </Row>








      <Row>

        {/* <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={2} >
          <Row>
            <Col span={24}>
              <label>IGV%</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValTipoRequerimiento}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.ProcesoId === 0 ? null : Ent.ProcesoId}
                key={Ent.ProcesoId}
                onChange={onChangeProceso}
              >
                {optionsProceso.map((ItemOp) => (
                  <Select.Option key={ItemOp.ProcesoId} value={ItemOp.ProcesoId}>
                    {ItemOp.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={2} >
          <Row>
            <Col span={24}>
              <label>Tipo de Operación</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValTipoRequerimiento}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.ProcesoId === 0 ? null : Ent.ProcesoId}
                key={Ent.ProcesoId}
                onChange={onChangeProceso}
              >
                {optionsProceso.map((ItemOp) => (
                  <Select.Option key={ItemOp.ProcesoId} value={ItemOp.ProcesoId}>
                    {ItemOp.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={2} >
          <Row>
            <Col span={24}>
              <label>Serie</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValTipoRequerimiento}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.ProcesoId === 0 ? null : Ent.ProcesoId}
                key={Ent.ProcesoId}
                onChange={onChangeProceso}
              >
                {optionsProceso.map((ItemOp) => (
                  <Select.Option key={ItemOp.ProcesoId} value={ItemOp.ProcesoId}>
                    {ItemOp.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={3} >
          <Row>
            <Col span={24}>
              <label>Fecha de Vencimiento</label>
            </Col>
            <Col span={24}>
              <DatePicker
                onChange={onChangeDate}
                value={dayjs(FechaEmisionItem, dateFormat)}
                style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                size='middle' />

            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={12} lg={4} xl={3} xxl={2} >
          <Row>
            <Col span={24}>
              <label>Código</label>
            </Col>
            <Col span={24}>
              <Input
                readOnly={true}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px', background: '#c5dfc7' }}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />


            </Col>
          </Row>
        </Col>

      </Row>










      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>

          <Tabs
            // tabBarExtraContent={AgregarButton_TipoRequerimiento()}
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

                        {/* {Tabla_TipoRequerimiento()} */}


                      </Col>
                    </Row >
                  </span>,
              };
            })}
          />
        </Col>

      </Row>


      <Row>



        <Col span={2}>


          <Segmented
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
            }}
            options={[

              {
                label: (

                  <>
                    <Row>

                      {Method_VerEnviar()}
                      {Method_VerGuardar()}

                    </Row>
                  </>


                ),
                value: 'Guardar',
              },
            ]}
          />

        </Col>
      </Row>

      <Row>



      </Row>


    </Spin>

  );
}

export default Page;




