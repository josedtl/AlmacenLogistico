"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import { Button, Col, Row, Space, Typography } from 'antd';
import { SaveFilled, DeleteOutlined, FileAddOutlined, SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Tabs, Table, DatePicker, AutoComplete, Select } from 'antd';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import { TipoProductoEntity } from '@/Models/TipoProductoEntity';
import { MarcaEntity } from '@/Models/MarcaEntity';
import { ModeloEntity } from '@/Models/ModeloEntity';

import { ProductoEntity } from '@/Models/Producto/ProductoEntity';
import GeneralService from '@/Service/GeneralService';
import GeneralGQLService from '@/Service/GeneralGQLService';
import { UnidadMedidaEntity } from '@/Models/UnidadMedidaEntity';
import ProductoService from '@/Service/ProductoService';
import { Console } from 'console';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
const page = ({ params }: any) => {

  const sGeneral = new GeneralService();
  const sGeneralGQL = new GeneralGQLService();
  const sProducto = new ProductoService();
  const initialProducto = new ProductoEntity();
  const [Ent, setEnt] = useState<ProductoEntity>(initialProducto);
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');




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
      width: '100px',
      render: (text: any, record: any) => (
        <span>

          {/* <Button
                    type='dashed'
                    onClick={() => deleteItem(record.CategoriaId)}
                    style={{ float: "right", marginRight: "10px", color: "#C64541", backgroundColor: "white", borderColor: "#C64541" }}
                    size={size}
                    icon={<DeleteFilled />}
                />
                <ModalItem
                    buttonLabel="Edit"
                    item={record}
                    updateState={props.updateState}
                /> */}



        </span>
      ),
    },

  ];

  const [TabsItems, setTabsItems] = useState<any>([
    {
      label: (
        <span>
          <AndroidOutlined />
          Tarifa
        </span>
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

  const handleTabChange = (key: any) => {
    setActiveTab(key);



  };

  const DTInput = (props: any) => {
    const { Header, inputName, onChange, value } = props; // Destructuring de las props

    return (
      <Row>
        <Col span={24}>
          <label>{Header}</label>
        </Col>
        <Col span={24}>
          <Input
            type="text"
            name={inputName}
            style={{ marginTop: '5px', marginBottom: '10px' }}
            onChange={onChange}
            value={value === null ? "" : value}
          />
        </Col>
      </Row>
    );
  };

  const DTTextArea = (props: any) => {
    const { Header, inputName } = props; // Destructuring de las props

    return (
      <Row>
        <Col span={24}>
          <label>{Header}</label>
        </Col>
        <Col span={24}>
          <TextArea rows={4}
            style={{ marginTop: '5px', marginBottom: '10px' }}
            name={inputName} />
          {/* <Input
            type="text"
            name={inputName}
            style={{ marginTop: '5px', marginBottom: '10px' }}
          /> */}
        </Col>
      </Row>
    );
  };

  const DTDatePicker = (props: any) => {
    const { Header, inputName } = props; // Destructuring de las props

    return (
      <Row>
        <Col span={24}>
          <label>{Header}</label>
        </Col>
        <Col span={24}>
          <DatePicker name={inputName} style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }} />
        </Col>
      </Row>
    );
  };

  const [optionsCategoria, setOptionsCategoria] = useState<CategoriaEntity[]>([]);
  const [optionsTipoProducto, setOptionsTipoProducto] = useState<TipoProductoEntity[]>([]);
  const [optionsMarca, setOptionsMarca] = useState<MarcaEntity[]>([]);
  const [optionsModelo, setOptionsModelo] = useState<ModeloEntity[]>([]);
  const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

  const handleSearchCategoria = async (value: string) => {
    try {
      const responseCategoria = await sGeneral.getCategoriaItemLike(value);
      setOptionsCategoria(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const handleSearchTipoProducto = async (value: string) => {
    try {
      const responseTipoProducto = await sGeneral.getTipoProductoItemLike(value);
      setOptionsTipoProducto(responseTipoProducto);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };



  const handleSearchMarca = async (value: string) => {
    try {
      const responseMarca = await sGeneral.getMarcaItemLike(value);
      setOptionsMarca(responseMarca);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const handleSearchModelo = async (value: string) => {
    try {
      const responseModelo = await sGeneral.getModeloItemLike(value);
      setOptionsModelo(responseModelo);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };
  const onSelect = (value: string) => {
    console.log('Seleccionaste la categoría:', value);
  };


  const getCargarDatos = async () => {

    const Resp_UM = await sGeneralGQL.GetUnidadMedidaItems();
    setOptionsUM(Resp_UM);

    if (params.Id > 0) {

      const Resp_Producto = await sProducto.getItem(params.Id);

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
  };
  const [error, setError] = useState(false);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Ejecutado")
    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });

    setError(Ent.Nombre.length < 3);
  };
  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [selectedTipoProducto, setSelectedTipoProducto] = useState<number | undefined>(undefined);
  const [selectedMarca, setSelectedMarca] = useState<number | undefined>(undefined);
  const [selectedModelo, setSelectedModelo] = useState<number | undefined>(undefined);
  const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);

  const onChangeCategoria = async (value: number) => {
    Ent.CategoriaId = value;
    setSelectedCategoria(value)
  };

  const onChangeTipoProducto = async (value: number) => {
    Ent.TipoProductoId = value;
    setSelectedTipoProducto(value)
  };


  const onChangeMarca = async (value: number) => {
    Ent.MarcaId = value;
    setSelectedMarca(value)
  };


  const onChangeModelo = async (value: number) => {
    Ent.ModeloId = value;
    setSelectedModelo(value)
  };

  const onChangeUM = async (value: number) => {
    Ent.UnidadMedidaId = value;
    setSelectedUM(value)
  };

  const CategoriaSelectLIst = () => {

    return (
      optionsCategoria.map((categoria) => (
        <Select.Option key={categoria.CategoriaId} value={categoria.CategoriaId}>
          {categoria.Nombre}
        </Select.Option>
      ))
    )
  }




  const DTSelect = (props: any) => {
    const { Header, onSearch, value, key, onChange, Lista } = props; // Destructuring de las props

    return (
      <Row>
        <Col span={24}>
          <label>{Header}</label>
        </Col>
        <Col span={24}>
          <Select
            showSearch
            style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
            defaultActiveFirstOption={false}
            filterOption={false}
            onSearch={onSearch}
            value={value === 0 ? null : value}
            key={key}
            onChange={onChange}
          >
            {Lista}
          </Select>
          <Button
            style={{
              width: '14%',
              float: "right",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginTop: '5px', marginBottom: '10px'
            }}
            icon={<SearchOutlined />}
          />



        </Col>
      </Row>


    );
  };
  // const Guardar_Total = async () => {
  //   console.log(Ent);

  // };


  const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(Ent.Nombre);

    // if (Ent.Nombre === '') {
    //     console.log('El nombre no puede ser un número');
    //     setError(Ent.Nombre.length < 3);
    //     return;
    // }
    Ent.CodUsuario = "adm";
    Ent.Action = 1;
    Ent.FechaRegistro = new Date();
    Ent.EstadoRegistro = true

    Ent.Action = Ent.ProductoId == 0 ? 1 : 3;

    const savedItem = await sProducto.saveItem(Ent);
    console.log(savedItem);
    // if (savedItem) {
    //     if (FlaState) props.updateState(savedItem);
    //     else props.addItemToState(savedItem);

    //     props.toggle();
    // }


  };


  useEffect(() => {
    getCargarDatos();
  }, []);

  return (
    <Layout>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> Producto  {params.Id}</Title> */}
          <Title level={3}> Producto</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            style={{
              float: "right",
              color: "white",
              backgroundColor: "#15616d",
              borderColor: "#15616d",
              marginTop: "25px",
              marginRight: "10px"
            }}
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
              <Button
                style={{
                  width: '14%',
                  float: "right",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: '5px', marginBottom: '10px'
                }}
                icon={<SearchOutlined />}
              />



            </Col>
          </Row>




          <Row>
            <Col span={24}>
              <label>Tipo Producto</label>
            </Col>
            <Col span={24}>
              <Select
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
              <Button
                style={{
                  width: '14%',
                  float: "right",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: '5px', marginBottom: '10px'
                }}
                icon={<SearchOutlined />}
              />



            </Col>
          </Row>



          <Row>
            <Col span={24}>
              <label>Marca</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
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
              <Button
                style={{
                  width: '14%',
                  float: "right",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: '5px', marginBottom: '10px'
                }}
                icon={<SearchOutlined />}
              />



            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Modelo</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
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
              <Button
                style={{
                  width: '14%',
                  float: "right",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: '5px', marginBottom: '10px'
                }}
                icon={<SearchOutlined />}
              />



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
                showSearch
                style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
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
              <Button
                style={{
                  width: '14%',
                  float: "right",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: '5px', marginBottom: '10px'
                }}
                icon={<SearchOutlined />}
              />



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
    </Layout>
  );
};




export default page;