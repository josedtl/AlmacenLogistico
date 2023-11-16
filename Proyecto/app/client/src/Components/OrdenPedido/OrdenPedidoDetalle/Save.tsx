import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity';
import { OrdenPedidoEntity } from '../../../Models/OrdenPedidoEntity';
import ModalItem from './ModalItem';
import GeneralService from '../../../Service/GeneralService';
import OrdenPedidoService from '../../../Service/OrdenPedidoService';
import { Tabs, DatePicker, message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';
import type { DatePickerProps } from 'antd';
import { IconSave } from '../../../Styles/Icons'
import { ButtonAddMain } from '../../../Styles/Button'
import { TipoProcesoEntity } from '../../../Models/GeneralEntity';
import { useParams } from 'react-router-dom';
import { ExclamationCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/es';
import dayjs from 'dayjs';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
function Page() {

  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sGeneral = new GeneralService();
  const sOrdenPedido = new OrdenPedidoService();
  const [items, setItems] = useState<OrdenPedidoDetalleEntity[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled] = useState(false);
  const { Title } = Typography;
  const [Ent, setEnt] = useState<OrdenPedidoEntity>(new OrdenPedidoEntity());
  const [FechaEmisionItem, setFechaEmisionItem] = useState<string>(moment(Ent.FechaEmision).format('DD/MM/YYYY hh:mm'));
  const addItemToState = (item: OrdenPedidoDetalleEntity) => {

    const itemIndex = items.findIndex((data) => data.key === item.key);

    if (itemIndex == -1) {
      console.log(item);
      setItems([...items, item]);
      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });

    }
    else {
      console.log(item);
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

  const updateState = (item: OrdenPedidoDetalleEntity) => {
    console.log(item);
    console.log(items);
    const itemIndex = items.findIndex((data) => data.key === item.key);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
    messageAdd.open({
      type: 'success',
      content: 'Se actualizó correctamente.',
    });

  };
  const deleteItemFromState = (item: OrdenPedidoDetalleEntity) => {

    const itemIndex = items.findIndex((data) => data.key === item.key);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
    messageAdd.open({
      type: 'error',
      content: 'Se eliminó correctamente.',
    });
  };

  const filterItems = items.filter(d => d.Action != ProcessActionEnum.Delete);


  const [optionsTipoProceso, setOptionsTipoProceso] = useState<TipoProcesoEntity[]>([]);
  const [selectedTipoRequerimeinto, setSelectedTipoRequerimeinto] = useState<number | undefined>(undefined);


  const onChangeTipoProceso = async (value: number) => {
    // setValUnidadMedida('');
    Ent.TipoProcesoId = value;
    setSelectedTipoRequerimeinto(value)
    selectedTipoRequerimeinto;
  };




  useEffect(() => {
    const dateEmison = moment(new Date()).format('YYYY-MM-DD')
    setFechaEmisionItem(dateEmison);
    getCargarDatos(idNumero);
  }, []);

  const getCargarDatos = async (Id: number) => {
    try {

      setCargarPage(true);

      const Resp_TR = await sGeneral.GetTipoProcesoItems();
      setOptionsTipoProceso(Resp_TR);
      Ent.Action = ProcessActionEnum.Add
      if (Id > 0) {

        const Resp_Producto = await sOrdenPedido.GetItemCabecera(Id);
        Resp_Producto[0].Action = ProcessActionEnum.Update
        setEnt(Resp_Producto[0]);

        const Resp_OPDetalle = await sOrdenPedido.GetItemCabeceraOP(Id);

        Resp_OPDetalle.map((data) => {
          data.key = generarGuid();
          data.Action = ProcessActionEnum.Update;
        })
        setItems(Resp_OPDetalle)
        Ent.DetalleItems = Resp_OPDetalle

        const dateEmison = moment(Resp_Producto[0].FechaEmision).format('YYYY-MM-DD')
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
  const operations = <ModalItem buttonLabel="" addItemToState={addItemToState} item={new OrdenPedidoDetalleEntity()} />
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
      const savedItem = await sOrdenPedido.saveItem(Ent);
      if (savedItem) {
        setEnt(savedItem)
        setItems(savedItem.DetalleItems)
        getCargarDatos(savedItem.OrdenPedidoId);
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

        const fecha: Date = new Date(FechaEmisionItem + "T00:00:00");
        Ent.TipoProcesoId = 1;
        Ent.ProcesoId = 1;
        Ent.EstadoProcesoId = 1;
        Ent.ResponsableId = 0;
        Ent.FechaEmision = new Date(fecha);
        Ent.CodUsuario = "adm";
        Ent.Action = 1;
        Ent.FechaRegistro = new Date();
        Ent.EstadoRegistro = true
        Ent.Action = Ent.OrdenPedidoId == 0 ? 1 : 3;
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



  let color = "while";

  if (Ent.ValorEstadoProceso === 0) {
    color = "green";
  } else if (Ent.ValorEstadoProceso === 2) {
    color = "green";
  } else if (Ent.ValorEstadoProceso === 3) {
    color = "blue";
  }




  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> OrdenPedido  {params.Id}</Title> */}
          <Title level={3}> {Ent.OrdenPedidoId > 0 ? 'Orden Pedido' : 'Generar Orden Pedido'}</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            style={ButtonAddMain}
            onClick={Guardar_Total}
            size={"large"}
            icon={IconSave}
          />

        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={10} md={8} lg={7} xl={6}>


          <Row>
            <Col span={24}>
              <label>Estado</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValCodigo}
                prefix={


                  <CaretRightOutlined style={{ color, fontSize: '20px' }} />}
                type="text"
                name="NomEstadoProceso"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                // onChange={onChange}
                value={Ent.NomEstadoProceso === null ? "" : Ent.NomEstadoProceso}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Codigo</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <label>Tipo Requerimiento</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                // status={ValUnidadMedida}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.TipoProcesoId === 0 ? null : Ent.TipoProcesoId}
                key={Ent.TipoProcesoId}
                onChange={onChangeTipoProceso}
              >
                {optionsTipoProceso.map((ItemOp) => (
                  <Select.Option key={ItemOp.TipoProcesoId} value={ItemOp.TipoProcesoId}>
                    {ItemOp.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Nº Documento</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValCodigo}
                type="text"
                name="NumDocumentoResponsable"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={Ent.NumDocumentoResponsable === null ? "" : Ent.NumDocumentoResponsable}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <label>Responsable</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValCodigo}
                type="text"
                name="NomResponsable"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={Ent.NomResponsable === null ? "" : Ent.NomResponsable}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Fecha de Emision</label>
            </Col>
            <Col span={24}>
              <DatePicker
                onChange={onChangeDate}
                value={dayjs(FechaEmisionItem, dateFormat)}
                // defaultValue={dayjs(FechaEmisionItem, dateFormat)}
                style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                size='large' />

            </Col>
          </Row>
















        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
  
          <Tabs
            tabBarExtraContent={operations}
            style={{ marginLeft: '20px' }}
            type="line"

            items={new Array(1).fill(null).map((_, i) => {
              i;
              return {
                label: (
                  < >
                    <Title style={{ fontSize: '18px' }}>
                      Producto- Detalle
                    </Title>
                  </>
                ),
                key: 'ddsdsd',
                children:
                  <span>

                    <Row>
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
    </Spin>

  );
}

export default Page;




