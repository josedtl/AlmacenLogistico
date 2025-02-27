import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, Table, message, Select, Button, Col, Row, Typography, Modal, Spin, Input, Segmented, Avatar } from 'antd';


import MDCategoria from '../MerLista/ModalItem';
import MDTipoProducto from '../MerLista/ModalItem';
import MDMarca from '../MerLista/ModalItem';
import MDModelo from '../MerLista/ModalItem';

import ModalItem from './Presentacion/ModalItem';
import DataTable from './Presentacion/DataTable';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';

import MercaderiaService from '../../Service/MercaderiaService';
import GeneralService from '../../Service/GeneralService';
import MerListaService from '../../Service/MerListaService';

import { MercaderiaSaveModel } from '../../Models/MercaderiaEntity';
import { MerListaEntity } from '../../Models/MerListaEntity';
import { UnidadMedidaEntity } from '../../Models/UnidadMedidaEntity';
import { MercaderiaPresentacionSaveModel } from '../../Models/MercaderiaPresentacionEntity';
import { ProcessActionEnum } from '../../Lib/ResourceModel/Enum';
const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sMerLista = new MerListaService();
  const sMercaderia = new MercaderiaService();
  const sGeneralService = new GeneralService();
  const initialProducto = new MercaderiaSaveModel();
  const [Ent, setEnt] = useState<MercaderiaSaveModel>(initialProducto);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);

  const addItemToStateCategoria = async (item: MerListaEntity) => {
    const Resp_Categoria = await sMerLista.getItem(item.ListaId);
    setOptionsCategoria(Resp_Categoria);
    Ent.CategoriaId = Resp_Categoria[0].ListaId;
  };

  const addItemToStateMarca = async (item: MerListaEntity) => {
    const Resp_Marca = await sMerLista.getItem(item.ListaId);
    setOptionsMarca(Resp_Marca);
    Ent.MarcaId = Resp_Marca[0].ListaId;

  };
  const addItemToStateModelo = async (item: MerListaEntity) => {
    const Resp_Modelo = await sMerLista.getItem(item.ListaId);
    setOptionsModelo(Resp_Modelo);
    Ent.ModeloId = Resp_Modelo[0].ListaId;

  };
  const addItemToStateTipoProducto = async (item: MerListaEntity) => {
    const Resp_TipoProducto = await sMerLista.getItem(item.ListaId);
    setOptionsTipoProducto(Resp_TipoProducto);
    Ent.TipoProductoId = Resp_TipoProducto[0].ListaId;

  };


  const columns = [
    {
      title: 'Nº',
      dataIndex: 'Cont',
      key: 'Cont',
      width: '50px',
    },
    {
      title: 'UnidadMeida',
      dataIndex: 'UnidadMeida',
      key: 'UnidadMeida',

    },
    {
      title: 'Cantidad ',
      dataIndex: 'Cantidad',
      key: 'Cantidad',
      width: '80px',
    },
    {
      title: 'Action',
      key: 'action',
      width: '100px'
    },

  ];

  const [TabsItems] = useState<any>([
    {
      label: (
        < >
          {/* <AndroidOutlined /> */}
          <Title style={{ fontSize: '18px' }}>
            Presentación
          </Title>
        </>
      ),
      key: 1,
      children:
        <span>

          <Row>
            <Col xs={24}>
              <Table
                columns={columns}
                size="small"
                scroll={{ y: '100%' }}
              />
            </Col>
          </Row >
        </span>
    },

  ]);


  const [optionsCategoria, setOptionsCategoria] = useState<MerListaEntity[]>([]);
  const [optionsTipoProducto, setOptionsTipoProducto] = useState<MerListaEntity[]>([]);
  const [optionsMarca, setOptionsMarca] = useState<MerListaEntity[]>([]);
  const [optionsModelo, setOptionsModelo] = useState<MerListaEntity[]>([]);
  const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

  const handleSearchCategoria = async (value: string) => {
    try {
      const responseCategoria = await sMerLista.getItemLike("M002", value);
      setOptionsCategoria(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const handleSearchTipoProducto = async (value: string) => {
    try {
      const responseTipoProducto = await sMerLista.getItemLike("M003", value);
      setOptionsTipoProducto(responseTipoProducto);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };



  const handleSearchMarca = async (value: string) => {
    try {
      const responseMarca = await sMerLista.getItemLike("M004", value);
      setOptionsMarca(responseMarca);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const handleSearchModelo = async (value: string) => {
    try {
      const responseModelo = await sMerLista.getItemLike("M005", value);
      setOptionsModelo(responseModelo);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  function generarGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  const getCargarDatos = async () => {

    console.log(idNumero)
    if (idNumero > 0) {

      const Resp_Producto = await sMercaderia.GetCabeceraItem(idNumero);
      console.log(Resp_Producto);
      const Resp_Categoria = await sMerLista.getItem(Resp_Producto[0].CategoriaId);
      setOptionsCategoria(Resp_Categoria);

      const Resp_TipoProducto = await sMerLista.getItem(Resp_Producto[0].TipoProductoId);
      setOptionsTipoProducto(Resp_TipoProducto);

      const Resp_Marca = await sMerLista.getItem(Resp_Producto[0].MarcaId);
      setOptionsMarca(Resp_Marca);

      const Resp_Modelo = await sMerLista.getItem(Resp_Producto[0].ModeloId);
      setOptionsModelo(Resp_Modelo);


      setEnt(Resp_Producto[0]);
      const Resp_MPetalle = await sMercaderia.ObtenerDetalleMPresentacion(idNumero);
      if (Resp_MPetalle.length > 0) {

        Resp_MPetalle.map((data) => {
          data.keyItem = generarGuid();
          data.Action = ProcessActionEnum.Update;

        })

        setItems(Resp_MPetalle)
        Ent.DetalleItems = Resp_MPetalle
      }
    }

    setCargarPage(false);
  };
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValCodigo('');
    setValNombre('');
    setValDescripcion('');
    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });

  };
  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [selectedTipoProducto, setSelectedTipoProducto] = useState<number | undefined>(undefined);
  const [selectedMarca, setSelectedMarca] = useState<number | undefined>(undefined);
  const [selectedModelo, setSelectedModelo] = useState<number | undefined>(undefined);
  const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);

  const [ValCodigo, setValCodigo] = useState<InputStatus>('');
  const [ValCategoria, setValCategoria] = useState<InputStatus>('');
  const [ValTipoProducto, setValTipoProducto] = useState<InputStatus>('');
  const [ValMarca, setValMarca] = useState<InputStatus>('');
  const [ValModelo, setValModelo] = useState<InputStatus>('');
  const [ValNombre, setValNombre] = useState<InputStatus>('');
  const [ValDescripcion, setValDescripcion] = useState<InputStatus>('');
  const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');
  const [items, setItems] = useState<MercaderiaPresentacionSaveModel[]>([]);


  const onChangeCategoria = async (value: number) => {
    setValCategoria('');
    Ent.CategoriaId = value;
    setSelectedCategoria(value)
  };

  const onChangeTipoProducto = async (value: number) => {
    setValTipoProducto('');
    Ent.TipoProductoId = value;
    setSelectedTipoProducto(value)
  };


  const onChangeMarca = async (value: number) => {
    setValMarca('');
    Ent.MarcaId = value;
    setSelectedMarca(value)
  };


  const onChangeModelo = async (value: number) => {
    setValModelo('');
    Ent.ModeloId = value;
    setSelectedModelo(value)
  };

  const onChangeUM = async (value: number) => {
    setValUnidadMedida('');
    Ent.UnidadMedidaId = value;
    setSelectedUM(value)
  };

  // const CategoriaSelectLIst = () => {

  //   return (
  //     optionsCategoria.map((categoria) => (
  //       <Select.Option key={categoria.CategoriaId} value={categoria.CategoriaId}>
  //         {categoria.Nombre}
  //       </Select.Option>
  //     ))
  //   )
  // }




  const [modal, contextHolder] = Modal.useModal();
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const AddProducto = async () => {


    Ent.Action = Ent.MercaderiaId == 0 ? 1 : 3;
    Ent.DetalleItems = items;
    console.log(Ent);
    const savedItem = await sMercaderia.saveItem(Ent);
    if (savedItem) {

      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });
    } else {
    }
  }


  const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    selectedCategoria;
    selectedTipoProducto;
    selectedMarca;
    selectedModelo;
    selectedUM;
    if (Ent.Codigo === '') {
      setValCodigo('error');
      messageAdd.open({ type: 'error', content: 'Ingrese Codigo.', });
      return;
    }
    if (Ent.CategoriaId === 0) {
      setValCategoria('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una categoria.', });
      return;
    }
    if (Ent.TipoProductoId === 0) {
      setValTipoProducto('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una tipo de producto.', });
      return;
    }

    if (Ent.MarcaId === 0) {
      setValMarca('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una marca.', });
      return;
    }


    if (Ent.ModeloId === 0) {
      setValModelo('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Modelo.', });
      return;
    }

    if (Ent.Nombre === '') {
      setValNombre('error');
      messageAdd.open({ type: 'error', content: 'Ingrese un Nombre.', });
      return;
    }

    if (Ent.Descripcion === '') {
      setValDescripcion('error');
      messageAdd.open({ type: 'error', content: 'Ingrese un Nombre.', });
      return;
    }

    if (Ent.UnidadMedidaId === 0) {
      setValUnidadMedida('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una unidad de medida.', });
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
          Ent.CodUsuario = "adm";
          Ent.Action = 1;
          Ent.FechaRegistro = new Date();
          Ent.EstadoRegistro = true

          AddProducto();
        },
        onCancel() {
          console.log('Cancel');
        },
    });

  };

  const event_ActualizarPresentacion = (item: any) => {

  };
  const event_AgregarDetalle = (item: any) => {
    const itemIndex = items.findIndex((data) => data.keyItem === item.keyItem);

    if (itemIndex == -1) {
      setItems([...items, item]);
      console.log(items);
      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });

    }
  };

  const event_EliminarDetalle = (item: any) => {
    if (item.OrdenPedidoDetalleId > 0) {

      const itemIndex = items.findIndex((data) => data.MercaderiaPresentacionId === item.OrdenPedidoDetalleId);
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



    };
  };
  useEffect(() => {
    async function cargarItem() {

      setCargarPage(true);
      const Resp_UM = await sGeneralService.GetUnidadMedidaItems();
      setOptionsUM(Resp_UM);
      await getCargarDatos();
    }


    cargarItem();


  }, []);
  const AgregarButton_Presentacion = () => {

    return (
      <ModalItem buttonLabel="" addItemToState={event_AgregarDetalle} keyItem={''} />
    )


  }

  const filterItems = items.filter(d => d.Action != ProcessActionEnum.Delete);
  const Guardar_TotalAlter = async (e: React.MouseEvent<HTMLDivElement>) => {

    selectedCategoria;
    selectedTipoProducto;
    selectedMarca;
    selectedModelo;
    selectedUM;
    if (Ent.Codigo === '') {
      setValCodigo('error');
      messageAdd.open({ type: 'error', content: 'Ingrese Codigo.', });
      return;
    }
    if (Ent.CategoriaId === 0) {
      setValCategoria('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una categoria.', });
      return;
    }
    if (Ent.TipoProductoId === 0) {
      setValTipoProducto('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una tipo de producto.', });
      return;
    }

    if (Ent.MarcaId === 0) {
      setValMarca('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una marca.', });
      return;
    }


    if (Ent.ModeloId === 0) {
      setValModelo('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Modelo.', });
      return;
    }

    if (Ent.Nombre === '') {
      setValNombre('error');
      messageAdd.open({ type: 'error', content: 'Ingrese un Nombre.', });
      return;
    }

    if (Ent.Descripcion === '') {
      setValDescripcion('error');
      messageAdd.open({ type: 'error', content: 'Ingrese un Nombre.', });
      return;
    }

    if (Ent.UnidadMedidaId === 0) {
      setValUnidadMedida('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una unidad de medida.', });
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
        Ent.CodUsuario = "adm";
        Ent.Action = 1;
        Ent.FechaRegistro = new Date();
        Ent.EstadoRegistro = true

        AddProducto();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> Producto  {params.Id}</Title> */}
          <Title level={3}> {Ent.MercaderiaId > 0 ? 'Producto' : 'Agregar Producto'}</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Button
            style={ButtonSaveFlotante}
            onClick={Guardar_Total}
            size={"large"}
            icon={<SaveFilled />}
          /> */}




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

                      {/* <Col xs={12}>

                        <div style={{ padding: 4 }} onClick={Guardar_TotalAlter}>
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
                      </Col> */}

                      <Col xs={24}>

                        <div style={{ padding: 4 }} onClick={Guardar_TotalAlter}>
                          <Avatar style={{
                            backgroundColor: "#15616d",
                            borderColor: "#15616d",

                          }}
                            // onClick={Guardar_Total}
                            shape="square"
                            size={40}
                            icon={<SaveFilled />} />
                          <div>Guardar ss</div>
                        </div>
                      </Col>
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
        <Col xs={24} sm={10} md={8} lg={7} xl={6}>


          <Row>
            <Col span={24}>
              <label>Codigo</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Categoria</label>
            </Col>
            <Col span={24}>
              <Select
                status={ValCategoria}
                showSearch
                style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchCategoria}
                value={Ent.CategoriaId === 0 ? null : Ent.CategoriaId}
                key={Ent.CategoriaId}
                onChange={onChangeCategoria}
              >
                {optionsCategoria.map((categoria) => (
                  <Select.Option key={categoria.ListaId} value={categoria.ListaId}>
                    {categoria.Nombre}
                  </Select.Option>
                ))}
              </Select>
              <MDCategoria buttonLabel="Enlace"
                addItemToState={addItemToStateCategoria}
                item={new MerListaEntity()}
                CodigoTabla={'M002'}
                title={"Categoria"} />
            </Col>
          </Row>




          <Row>
            <Col span={24}>
              <label>Tipo Producto</label>
            </Col>
            <Col span={24}>
              <Select
                status={ValTipoProducto}
                showSearch
                style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchTipoProducto}
                value={Ent.TipoProductoId === 0 ? null : Ent.TipoProductoId}
                key={Ent.TipoProductoId}
                onChange={onChangeTipoProducto}
              >
                {optionsTipoProducto.map((TipoProducto) => (
                  <Select.Option key={TipoProducto.ListaId} value={TipoProducto.ListaId}>
                    {TipoProducto.Nombre}
                  </Select.Option>
                ))}
              </Select>
              <MDTipoProducto buttonLabel="Enlace"
                addItemToState={addItemToStateTipoProducto}
                item={new MerListaEntity()}
                CodigoTabla={'M003'}
                title={"Tipo Producto"} />




            </Col>
          </Row>



          <Row>
            <Col span={24}>
              <label>Marca</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValMarca}
                style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchMarca}
                value={Ent.MarcaId === 0 ? null : Ent.MarcaId}
                key={Ent.MarcaId}
                onChange={onChangeMarca}
              >
                {optionsMarca.map((Marca) => (
                  <Select.Option key={Marca.ListaId} value={Marca.ListaId}>
                    {Marca.Nombre}
                  </Select.Option>
                ))}
              </Select>

              <MDMarca buttonLabel="Enlace"
                addItemToState={addItemToStateMarca}
                item={new MerListaEntity()}
                CodigoTabla={'M004'}
                title={"Marca"} />



            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Modelo</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValModelo}
                style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchModelo}
                value={Ent.ModeloId === 0 ? null : Ent.ModeloId}
                key={Ent.ModeloId}
                onChange={onChangeModelo}
              >
                {optionsModelo.map((Modelo) => (
                  <Select.Option key={Modelo.ListaId} value={Modelo.ListaId}>
                    {Modelo.Nombre}
                  </Select.Option>
                ))}
              </Select>
              <MDModelo buttonLabel="Enlace"
                addItemToState={addItemToStateModelo}
                item={new MerListaEntity()}
                CodigoTabla={'M005'}
                title={"Modelo"} />



            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <label>Nombre</label>
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="Nombre"
                status={ValNombre}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Nombre === null ? "" : Ent.Nombre}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Descripcion</label>
            </Col>
            <Col span={24}>
              <Input
                type="TextArea"

                name="Descripcion"
                status={ValDescripcion}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Descripcion === null ? "" : Ent.Descripcion}
              />

            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Unidad de Medida</label>
            </Col>
            <Col span={24}>
              <Select
                allowClear
                status={ValUnidadMedida}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.UnidadMedidaId === 0 ? null : Ent.UnidadMedidaId}
                key={Ent.UnidadMedidaId}
                onChange={onChangeUM}
              >
                {optionsUM.map((UM) => (
                  <Select.Option key={UM.UnidadMedidaId} value={UM.UnidadMedidaId}>
                    {UM.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>






          {/* <Row>
             <Col span={12}>

              <Row>
                <Col span={24}>
                  <label>Reserva</label>
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    name="Reserva"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeText}
                    value={Ent.Reserva === null ? "" : Ent.Reserva}
                  />
                </Col>
              </Row>


            </Col>
            <Col span={12}>


              <Row>
                <Col span={24}>
                  <label>Stock</label>
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    name="Stock"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeText}
                    value={Ent.Stock === null ? "" : Ent.Stock}
                  />
                </Col>
              </Row>


            </Col> 
          </Row> */}

        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          {/* <Tabs
            style={{ marginLeft: '20px' }}
            type="line" items={TabsItems} /> */}


          <Tabs
            // tabBarExtraContent={AgregarButton_Presentacion()}
            key={'TabGeneral'}
            type="card"

            items={new Array(1).fill(null).map((_, i) => {
              i;
              return {
                label: (
                  < >
                    <Row>
                      <Col xs={12}>
                        <Title style={{ fontSize: '18px' }}>
                          Presentación
                        </Title>
                      </Col>

                      <Col xs={12}>
                        <ModalItem buttonLabel="" addItemToState={event_AgregarDetalle} item={new MercaderiaPresentacionSaveModel()} keyItem={''} />
                      </Col>
                    </Row>
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
                        <DataTable DataList={filterItems} updateState={event_ActualizarPresentacion} deleteItemFromState={event_EliminarDetalle} EsTabla={false} />

                      </Col>
                    </Row >
                  </span>,
              };
            })}
          />
        </Col>
      </Row>
    </Spin >
  );
};


export default Save;