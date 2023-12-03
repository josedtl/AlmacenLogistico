import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, Table, message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';
import { CategoriaEntity } from '../../Models/CategoriaEntity';
import { TipoProductoEntity } from '../../Models/TipoProductoEntity';
import { MarcaEntity } from '../../Models/MarcaEntity';
import { ModeloEntity } from '../../Models/ModeloEntity';
import { ProductoEntity } from '../../Models/ProductoEntity';
import GeneralService from '../../Service/GeneralService';
import { UnidadMedidaEntity } from '../../Models/UnidadMedidaEntity';
import ProductoService from '../../Service/ProductoService';
import MDCategoria from '../Categoria/ModalItem';
import MDTipoProducto from '../TipoProducto/ModalItem';
import MDMarca from '../Marca/ModalItem';
import MDModelo from '../Modelo/ModalItem';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../Styles/Button'

const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sGeneral = new GeneralService();
  const sProducto = new ProductoService();
  const initialProducto = new ProductoEntity();
  const [Ent, setEnt] = useState<ProductoEntity>(initialProducto);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);

  const addItemToStateCategoria = async (item: CategoriaEntity) => {
    const Resp_Categoria = await sGeneral.GetCategoriaItem(item.CategoriaId);
    setOptionsCategoria(Resp_Categoria);
    Ent.CategoriaId = Resp_Categoria[0].CategoriaId;

  };

  const addItemToStateMarca = async (item: MarcaEntity) => {
    const Resp_Marca = await sGeneral.GetMarcaItem(item.MarcaId);
    setOptionsMarca(Resp_Marca);
    Ent.MarcaId = Resp_Marca[0].MarcaId;

  };
  const addItemToStateModelo = async (item: ModeloEntity) => {
    const Resp_Modelo = await sGeneral.GetModeloItem(item.ModeloId);
    setOptionsModelo(Resp_Modelo);
    Ent.ModeloId = Resp_Modelo[0].ModeloId;

  };
  const addItemToStateTipoProducto = async (item: TipoProductoEntity) => {
    const Resp_TipoProducto = await sGeneral.GetTipoProductoItem(item.TipoProductoId);
    setOptionsTipoProducto(Resp_TipoProducto);
    Ent.TipoProductoId = Resp_TipoProducto[0].TipoProductoId;

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
      title: 'Moneda',
      dataIndex: 'Moneda',
      key: 'Moneda',
      width: '100px',
    }, {
      title: 'ValorVenta',
      dataIndex: 'ValorVenta',
      key: 'ValorVenta',
      width: '100px',
    }, {
      title: 'ValorCompra',
      dataIndex: 'ValorCompra',
      key: 'ValorCompra',
      width: '100px',
    }, {
      title: 'Fecha Vigencia',
      dataIndex: 'FechaVigencia',
      key: 'FechaVigencia',
      width: '100px',
    }, {
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
            Tarifa
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


  const [optionsCategoria, setOptionsCategoria] = useState<CategoriaEntity[]>([]);
  const [optionsTipoProducto, setOptionsTipoProducto] = useState<TipoProductoEntity[]>([]);
  const [optionsMarca, setOptionsMarca] = useState<MarcaEntity[]>([]);
  const [optionsModelo, setOptionsModelo] = useState<ModeloEntity[]>([]);
  const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

  const handleSearchCategoria = async (value: string) => {
    try {
      const responseCategoria = await sGeneral.GetCategoriaItemLike(value);
      setOptionsCategoria(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const handleSearchTipoProducto = async (value: string) => {
    try {
      const responseTipoProducto = await sGeneral.GetTipoProductoItemLike(value);
      setOptionsTipoProducto(responseTipoProducto);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };



  const handleSearchMarca = async (value: string) => {
    try {
      const responseMarca = await sGeneral.GetMarcaItemLike(value);
      setOptionsMarca(responseMarca);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const handleSearchModelo = async (value: string) => {
    try {
      const responseModelo = await sGeneral.GetModeloItemLike(value);
      setOptionsModelo(responseModelo);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };



  const getCargarDatos = async () => {

    console.log(idNumero)
    if (idNumero > 0) {

      const Resp_Producto = await sProducto.getItem(idNumero);

      const Resp_Categoria = await sGeneral.GetCategoriaItem(Resp_Producto[0].CategoriaId);
      setOptionsCategoria(Resp_Categoria);

      const Resp_TipoProducto = await sGeneral.GetTipoProductoItem(Resp_Producto[0].TipoProductoId);
      setOptionsTipoProducto(Resp_TipoProducto);

      const Resp_Marca = await sGeneral.GetMarcaItem(Resp_Producto[0].MarcaId);
      setOptionsMarca(Resp_Marca);

      const Resp_Modelo = await sGeneral.GetModeloItem(Resp_Producto[0].ModeloId);
      setOptionsModelo(Resp_Modelo);


      setEnt(Resp_Producto[0]);
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
    const savedItem = await sProducto.saveItem(Ent);
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
        Ent.Action = Ent.ProductoId == 0 ? 1 : 3;
        AddProducto();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  };


  useEffect(() => {
    async function cargarItem() {

      setCargarPage(true);
      const Resp_UM = await sGeneral.GetUnidadMedidaItems();
      setOptionsUM(Resp_UM);
      await getCargarDatos();
    }


    cargarItem();


  }, []);

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> Producto  {params.Id}</Title> */}
          <Title level={3}> {Ent.ProductoId > 0 ? 'Producto' : 'Agregar Producto'}</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            style={ButtonAddMain}
            onClick={Guardar_Total}
            size={"large"}
            icon={<SaveFilled />}
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
                  <Select.Option key={categoria.CategoriaId} value={categoria.CategoriaId}>
                    {categoria.Nombre}
                  </Select.Option>
                ))}
              </Select>
              <MDCategoria buttonLabel="Enlace"
                addItemToState={addItemToStateCategoria}
                item={new CategoriaEntity()} />
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
                  <Select.Option key={TipoProducto.TipoProductoId} value={TipoProducto.TipoProductoId}>
                    {TipoProducto.Nombre}
                  </Select.Option>
                ))}
              </Select>
              <MDTipoProducto buttonLabel="Enlace"
                addItemToState={addItemToStateTipoProducto}
                item={new TipoProductoEntity()} />




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
                  <Select.Option key={Marca.MarcaId} value={Marca.MarcaId}>
                    {Marca.Nombre}
                  </Select.Option>
                ))}
              </Select>

              <MDMarca buttonLabel="Enlace"
                addItemToState={addItemToStateMarca}
                item={new MarcaEntity()} />



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
                  <Select.Option key={Modelo.ModeloId} value={Modelo.ModeloId}>
                    {Modelo.Nombre}
                  </Select.Option>
                ))}
              </Select>
              <MDModelo buttonLabel="Enlace"
                addItemToState={addItemToStateModelo}
                item={new ModeloEntity()} />



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






          <Row>
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
          </Row>

        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          <Tabs
            style={{ marginLeft: '20px' }}
            type="line" items={TabsItems} />
        </Col>
      </Row>
    </Spin>
  );
};


export default Save;