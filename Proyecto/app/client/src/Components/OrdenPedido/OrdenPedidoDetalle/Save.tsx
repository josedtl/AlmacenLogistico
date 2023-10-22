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
import dayjs from 'dayjs';

function Page() {

  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sGeneral = new GeneralService();
  const sOrdenPedido = new OrdenPedidoService();
  const [items, setItems] = useState<OrdenPedidoDetalleEntity[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled, setDisabled] = useState(false);
  const { Title } = Typography;
  const [Busqueda, setBusqueda] = useState<string>('');
  const [Ent, setEnt] = useState<OrdenPedidoEntity>(new OrdenPedidoEntity());

  const addItemToState = (item: OrdenPedidoDetalleEntity) => {
    setItems([...items, item]);
    messageAdd.open({
      type: 'success',
      content: 'Se guardó correctamente.',
    });

  };
  const toggle = () => {
    setDisabled(!disabled);
  };
  const updateState = (item: OrdenPedidoDetalleEntity) => {
    const itemIndex = items.findIndex((data) => data.OrdenPedidoDetalleId === item.OrdenPedidoDetalleId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
    messageAdd.open({
      type: 'success',
      content: 'Se actualizó correctamente.',
    });

  };
  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.OrdenPedidoDetalleId !== id);
    setItems(updatedItems);
    messageAdd.open({
      type: 'error',
      content: 'Se eliminó correctamente.',
    });
  };

  const filterItems = items.filter(fdata =>
    fdata.NomProducto.toLowerCase().includes(Busqueda.toLowerCase())
  );

  const [TabsItems, setTabsItems] = useState<any>([
    {
      label: (
        < >
          {/* <AndroidOutlined /> */}
          <Title style={{ fontSize: '18px' }}>
            Producto- Detalle
          </Title>
        </>
      ),
      key: 1,
      children:
        <span>

          <Row>
            <Col xs={24}>
              <ModalItem buttonLabel="" addItemToState={addItemToState} item={new OrdenPedidoDetalleEntity()} />
              <DataTable DataList={filterItems} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />

            </Col>
          </Row >
        </span>
    },

  ]);
  const [optionsTipoProceso, setOptionsTipoProceso] = useState<TipoProcesoEntity[]>([]);
  const [selectedTipoRequerimeinto, setSelectedTipoRequerimeinto] = useState<number | undefined>(undefined);


  const onChangeTipoProceso = async (value: number) => {
    // setValUnidadMedida('');
    Ent.TipoProcesoId = value;
    setSelectedTipoRequerimeinto(value)
  };



  useEffect(() => {
    getCargarDatos();
  }, []);

  const getCargarDatos = async () => {
    setCargarPage(true);

    const Resp_TR = await sGeneral.GetTipoProcesoItems();
    setOptionsTipoProceso(Resp_TR);
    if (idNumero > 0) {

      const Resp_Producto = await sOrdenPedido.GetItemCabecera(idNumero);

      setEnt(Resp_Producto[0]);
      console.log(Ent);
    }

    setCargarPage(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value.toUpperCase());
  };
  type PositionType = 'left' | 'right';
  const operations = <ModalItem buttonLabel="" addItemToState={addItemToState} item={new OrdenPedidoDetalleEntity()} />
    ;
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
    right: <Button>Right Extra Action</Button>,
  };
  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    const fecha: Date = new Date(dateString + "T00:00:00");
    // 2023-10-22T04:18:43
    // Verifica si la conversión fue exitosa y si la fecha es válida
    if (!isNaN(fecha.getTime())) {
      // Asigna la fecha convertida a la propiedad Ent.FechaEmision
      Ent.FechaEmision = fecha;
      console.log(Ent.FechaEmision);
      console.log(Ent);
      console.log(dateString);
      console.log(date?.date);
    } else {
      // Maneja el caso en el que la cadena de fecha no es válida
      console.error('Fecha no válida:', dateString);
    }
  };
  const [modal, contextHolder] = Modal.useModal();
  const dateFormat = 'YYYY/MM/DD';
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
            // onClick={Guardar_Total}
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
                type="text"
                name="NomEstadoProceso"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
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
                name="Codigo"
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
                name="Codigo"
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
                // value={null}
                value={dayjs(Ent.FechaEmision, dateFormat)}
                style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                size='large' />

            </Col>
          </Row>
















        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          {/* <ModalItem buttonLabel="" addItemToState={addItemToState} item={new OrdenPedidoDetalleEntity()} />
          <DataTable DataList={filterItems} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />
           */}
          <Tabs
            tabBarExtraContent={operations}
            style={{ marginLeft: '20px' }}
            type="line"
            // items={TabsItems}

            items={new Array(1).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: (
                  < >
                    {/* <AndroidOutlined /> */}
                    <Title style={{ fontSize: '18px' }}>
                      Producto- Detalle
                    </Title>
                  </>
                ),
                key: id,
                children:
                  <span>

                    <Row>
                      <Col xs={24}>
                        {/* <ModalItem buttonLabel="" addItemToState={addItemToState} item={new OrdenPedidoDetalleEntity()} /> */}
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


    // <Spin spinning={CargarPage} tip="Cargando" size="large">
    //   {contextHolderAdd}
    //   <Row >

    //     <Col xs={18} sm={18} md={12} lg={12} xl={12}>
    //       <Title level={2}> OrdenPedidoDetalle</Title>
    //     </Col>

    //     <Col xs={6} sm={6} md={12} lg={12} xl={12}>
    //       <ModalItem buttonLabel="" addItemToState={addItemToState} item={new OrdenPedidoDetalleEntity()} />
    //     </Col>

    //     <Col xs={24} sm={24} md={12} lg={12} xl={12}>
    //       <Button
    //         onClick={getItems}
    //         style={ButtonMainSecondaryLeft}
    //         size={SizeMainButtonSecondary}
    //         icon={IconLoad}
    //       />
    //       <Button
    //         onClick={toggle}
    //         style={ButtonMainSecondaryLeft}
    //         size={SizeMainButtonSecondary}
    //         icon={disabled ? IconTabla : IconCard}
    //       />

    //       <Button
    //         style={ButtonMainSecondaryLeft}
    //         size={SizeMainButtonSecondary}
    //         icon={IconReport}
    //       />
    //       <Button
    //         style={ButtonMainSecondaryRight}
    //         size={SizeMainButtonSecondary}
    //         icon={IconFiltro}
    //       />

    //     </Col>

    //     <Col xs={24} sm={24} md={12} lg={12} xl={12}>

    //       <Input
    //         placeholder='Buscar OrdenPedidoDetalle'
    //         type="text"
    //         name="Nombre"
    //         onChange={onChange}
    //         value={Busqueda === null ? "" : Busqueda}
    //         style={InputSearchMain}
    //         size={SizeMainButtonSecondary}
    //       />
    //     </Col>

    //   </Row>
    //   <Card>
    //     <DataTable DataList={filterItems} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />
    //   </Card>
    // </Spin>
  );
}

export default Page;




