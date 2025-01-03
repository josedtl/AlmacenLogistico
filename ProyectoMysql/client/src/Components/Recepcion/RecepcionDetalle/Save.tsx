import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { RecepcionDetalleEntity } from '../../../Models/RecepcionDetalleEntity';
import { RecepcionEntity, RecepListaModel } from '../../../Models/RecepcionEntity';
import ModalItem from './ModalItem';
import GeneralService from '../../../Service/GeneralService';
import RecepcionService from '../../../Service/RecepcionService';
import { Tabs, DatePicker, message, Select, Col, Row, Typography, Modal, Spin, Input, Layout, Segmented, Avatar } from 'antd';
import type { DatePickerProps } from 'antd';
import { EntidadNombreCompletoModel } from '../../../Models/GeneralEntity';
import { useParams } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/es';
import dayjs from 'dayjs';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { InputStatus } from 'antd/es/_util/statusUtils';
import { SaveFilled } from '@ant-design/icons';
import { ProcesoModel } from '../../../Models/ProcesoEntity';
function Page() {

  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sGeneral = new GeneralService();
  const sRecepcion = new RecepcionService();
  const [items, setItems] = useState<RecepcionDetalleEntity[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled] = useState(false);
  const { Title } = Typography;
  const [Ent, setEnt] = useState<RecepcionEntity>(new RecepcionEntity());
  const [KeyTabs, setKeyTabs] = useState<String>('');
  const [FechaEmisionItem, setFechaEmisionItem] = useState<string>(moment(Ent.FechaRecepcion).format('DD/MM/YYYY hh:mm'));
  const addItemToState = (item: RecepcionDetalleEntity) => {

    const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);

    if (itemIndex == -1) {
      setItems([...items, item]);
      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });

    }
    else {
      setItems([...items, item]);
      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });

      const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
      setItems(newArray);
      messageAdd.open({
        type: 'success',
        content: 'Se actualizó correctamente.',
      });
    }

  };

  const updateState = (item: RecepcionDetalleEntity) => {

    if (item.RecepcionDetalleId > 0) {

      const itemIndex = items.findIndex((data) => data.RecepcionDetalleId === item.RecepcionDetalleId);
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
  const deleteItemFromState = (item: RecepcionDetalleEntity) => {


    if (item.RecepcionDetalleId > 0) {

      const itemIndex = items.findIndex((data) => data.RecepcionDetalleId === item.RecepcionDetalleId);
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
    // const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);
    // const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    // setItems(newArray);
    // messageAdd.open({
    //   type: 'error',
    //   content: 'Se eliminó correctamente.',
    // });



  };

  const filterItems = items.filter(d => d.Action != ProcessActionEnum.Delete);


  // const [optionsTipoProceso, setOptionsTipoProceso] = useState<TipoProcesoEntity[]>([]);
  const [optionsProceso, setOptionsProceso] = useState<ProcesoModel[]>([]);
  const [optionsTipoComprobante, setOptionsTipoComprobante] = useState<RecepListaModel[]>([]);
  const [selectedTipoRequerimeinto, setSelectedTipoRequerimeinto] = useState<number | undefined>(undefined);
  const [selectedTipoComprobante, setSelectedTipoComprobante] = useState<number | undefined>(undefined);

  const onChangeTipoProceso = async (value: number) => {
    // setValUnidadMedida('');
    Ent.ProcesoId = value;
    setSelectedTipoRequerimeinto(value)
    selectedTipoRequerimeinto;
  };

  const onChangeTipoComprobante = async (value: number) => {
    // setValUnidadMedida('');
    Ent.TipoComprobanteId = value;
    setSelectedTipoComprobante(value)
    selectedTipoComprobante;
  };



  useEffect(() => {
    setKeyTabs(generarGuid());
    const dateEmison = moment(new Date()).format('YYYY-MM-DD')
    setFechaEmisionItem(dateEmison);
    getCargarDatos(idNumero);
  }, []);

  const getCargarDatos = async (Id: number) => {
    try {

      setCargarPage(true);
      setEnt(new RecepcionEntity())
      setItems([])
      const Resp_TR = await sGeneral.ProcesoObtenerTipo("RC001");
      setOptionsProceso(Resp_TR);

      const Resp_TipoComprobante = await sGeneral.RecepListaObtenerItems("C002");
      setOptionsTipoComprobante(Resp_TipoComprobante);

      Ent.Action = ProcessActionEnum.Add



      if (Id > 0) {

        const Resp_Producto = await sRecepcion.ObtenerItem(Id);
        Resp_Producto[0].Action = ProcessActionEnum.Update
        setEnt(Resp_Producto[0]);

        console.log(Id);
        const Resp_OPDetalle = await sRecepcion.ObtenerDetalleItem(Id);

        // if (Resp_OPDetalle.length > 0) {

        Resp_OPDetalle.map((data) => {
          data.keyItem = generarGuid();
          data.Action = ProcessActionEnum.Update;

        })
        console.log(Resp_OPDetalle);
        setItems(Resp_OPDetalle)
        Ent.DetalleItems = Resp_OPDetalle
        // }



        const Resp_Item = await sGeneral.EntidadObtenerNombreCompletoItem(Resp_Producto[0].EntidadId);
        setOptionsEntidad(Resp_Item);

        const dateEmison = moment(Resp_Producto[0].FechaRecepcion).format('YYYY-MM-DD')
        setFechaEmisionItem(dateEmison);

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
  // item={new RecepcionDetalleEntity()}
  const operations = <ModalItem buttonLabel="" addItemToState={addItemToState} item={new RecepcionDetalleEntity()} keyItem={''} />
    ;

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    date;
    setFechaEmisionItem(dateString);
  };
  const [modal, contextHolder] = Modal.useModal();
  const dateFormat = 'YYYY/MM/DD';


  const AddProducto = async () => {
    try {
      Ent.DetalleItems = items;

      console.log(Ent);
      const savedItem = await sRecepcion.saveItem(Ent);
      if (savedItem) {
        setEnt(savedItem)
        // setItems(savedItem.DetalleItems)
        getCargarDatos(savedItem.RecepcionId);
        messageAdd.open({
          type: 'success',
          content: 'Se guardó correctamente.',
        });
        // window.location.reload();


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
    modal.confirm({
      title: 'Mensaje del Sistema',
      icon: <ExclamationCircleOutlined />,
      content: '¿Desea guardar el registro?',
      okText: 'Si',
      okType: 'danger',
      cancelText: 'No',
      onOk() {

        const fecha: Date = new Date(FechaEmisionItem + "T00:00:00");
        Ent.EstadoProcesoId = 1;
        Ent.FechaRecepcion = new Date(fecha);
        Ent.CodUsuario = "adm";
        Ent.Action = 1;
        Ent.FechaRegistro = new Date();
        Ent.Action = Ent.RecepcionId == 0 ? 1 : 3;
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



  // let color = "while";

  // if (Ent.ValorEstadoProceso === 0) {
  //   color = "green";
  // } else if (Ent.ValorEstadoProceso === 2) {
  //   color = "green";
  // } else if (Ent.ValorEstadoProceso === 3) {
  //   color = "blue";
  // }
  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [optionsEntidad, setOptionsEntidad] = useState<EntidadNombreCompletoModel[]>([]);
  const [ValCategoria, setValCategoria] = useState<InputStatus>('');
  const handleSearchCategoria = async (value: string) => {
    try {
      const responseCategoria = await sGeneral.EntidadBuscarNombreCompletoItem(value);
      setOptionsEntidad(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };
  const onChangeCategoria = async (value: number) => {
    setValCategoria('');
    Ent.EntidadId = value;
    setSelectedCategoria(value)
  };
  // const CorrelativoDiv = () => {

  //   if (Ent.RecepcionId > 0) {
  //     return (

  //       <>
  //         <Row>
  //           <Col span={24}>
  //             <label>Estado</label>
  //           </Col>
  //           <Col span={24}>
  //             <Input
  //               // status={ValCodigo}
  //               prefix={
  //                 <CaretRightOutlined style={{ color, fontSize: '20px' }} />}
  //               type="text"
  //               name="NomEstadoProceso"
  //               style={{ marginTop: '5px', marginBottom: '10px' }}
  //               // onChange={onChange}
  //               readOnly={true}
  //               value={Ent.NomEstadoProceso === null ? "" : Ent.NomEstadoProceso}
  //             />
  //           </Col>
  //         </Row>

  //         <Row>
  //           <Col span={24}>
  //             <label>Codigo</label>
  //           </Col>
  //           <Col span={24}>
  //             <Input
  //               // status={ValCodigo}
  //               type="text"
  //               name="Codigo"
  //               style={{ marginTop: '5px', marginBottom: '10px', background: 'Silver' }}
  //               onChange={onChange}
  //               readOnly={true}
  //               value={Ent.Codigo === null ? "" : Ent.Codigo}
  //             />
  //           </Col>
  //         </Row>
  //       </>
  //     )
  //   }
  // }


  // const FechaUsuario = () => {
  //   if (Ent.RecepcionId > 0) {
  //     return (

  //       <Row>
  //         <Col span={12}>

  //           <Row>
  //             <Col span={24}>
  //               <label>Fecha Registro</label>
  //             </Col>
  //             <Col span={24}>
  //               <Input
  //                 type="string"
  //                 name="FechaRegistro"
  //                 style={{ marginTop: '5px', marginBottom: '10px' }}
  //                 readOnly={true}
  //                 value={moment(Ent.FechaRegistro).format('DD/MM/YYYY hh:mm')}
  //               />
  //             </Col>
  //           </Row>


  //         </Col>
  //         <Col span={12}>


  //           <Row>
  //             <Col span={24}>
  //               <label>Usuario</label>
  //             </Col>
  //             <Col span={24}>
  //               <Input
  //                 type="string"
  //                 name="Stock"
  //                 style={{ marginTop: '5px', marginBottom: '10px' }}
  //                 readOnly={true}
  //                 value={Ent.CodUsuario}
  //               />
  //             </Col>
  //           </Row>


  //         </Col>
  //       </Row>
  //     )
  //   }

  // }

  const TituloSave = () => {
    return (

      <Title level={2}> {Ent.RecepcionId > 0 ? `Recepción - ${Ent.NomEstadoProceso}` : 'Generar Recepción'}</Title>
    )

  }
  const CodigoSave = () => {
    return (

      <Title level={3}> {Ent.RecepcionId > 0 ? `Código : ${Ent.Codigo}` : ''}</Title>
    )

  }

  const footerStyle: React.CSSProperties = {
    // backgroundColor: "#C9E1E4",
    borderColor: "#15616d",
  };

  const { Footer, Content } = Layout;
  Content;
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">

      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {TituloSave()}
          {/* <Title level={3}> {Ent.RecepcionId > 0 ? 'Orden de Pedido' : 'Generar Orden de Pedido'}</Title> */}
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <div style={{ float: "right" }}>

            {CodigoSave()}
          </div> */}

        </Col>
      </Row>
      <Row>

        <Col xs={24} sm={8} md={6} lg={6} xl={3} xxl={3} >
          <Row>
            <Col span={24}>
              <label>Tipo de Recepción</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                // status={ValUnidadMedida}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.ProcesoId === 0 ? null : Ent.ProcesoId}
                key={Ent.ProcesoId}
                onChange={onChangeTipoProceso}
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
        <Col xs={24} sm={24} md={6} lg={6} xl={14} xxl={16} >
          <Row>
            <Col span={24}>
              <label>Proveedor</label>
            </Col>
            <Col span={24}>

              <Select
                status={ValCategoria}
                showSearch
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchCategoria}
                value={Ent.EntidadId === 0 ? null : Ent.EntidadId}
                key={Ent.EntidadId}
                onChange={onChangeCategoria}
              >
                {optionsEntidad.map((categoria) => (
                  <Select.Option key={categoria.EntidadId} value={categoria.EntidadId}>
                    {categoria.Nombres}
                  </Select.Option>
                ))}
              </Select>

            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={4} xxl={3} >
          <Row>
            <Col span={24}>
              <label>Fecha de Recepción</label>
            </Col>
            <Col span={24}>
              <DatePicker
                onChange={onChangeDate}
                value={dayjs(FechaEmisionItem, dateFormat)}
                // defaultValue={dayjs(FechaEmisionItem, dateFormat)}
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
        <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3} >
          <Row>
            <Col span={24}>
              <label>Tipo de Comprobante</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                // status={ValUnidadMedida}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.TipoComprobanteId === 0 ? null : Ent.TipoComprobanteId}
                key={Ent.TipoComprobanteId}
                onChange={onChangeTipoComprobante}
              >
                {optionsTipoComprobante.map((ItemOp) => (
                  <Select.Option key={ItemOp.ListaId} value={ItemOp.ListaId}>
                    {ItemOp.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>
        </Col>



        <Col xs={24} sm={12} md={8} lg={6} xl={2} xxl={2} >
          <Row>
            <Col span={24}>
              <label>Serie</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValNombres}
                type="text"
                name="SerieComprobante"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={Ent.SerieComprobante === null ? "" : Ent.SerieComprobante}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} xl={3} xxl={3} >
          <Row>
            <Col span={24}>
              <label>Correlativo</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValNombres}
                type="text"
                name="CorrelativoComprobante"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={Ent.CorrelativoComprobante === null ? "" : Ent.CorrelativoComprobante}
              />
            </Col>
          </Row>
        </Col>



        <Col xs={24} sm={12} md={24} lg={6} xl={15} xxl={16} >
          <Row>
            <Col span={24}>
              <label>Observación</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValNombres}
                type="text"
                name="Observacion"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={Ent.Observacion === null ? "" : Ent.Observacion}
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



      <Row>


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




