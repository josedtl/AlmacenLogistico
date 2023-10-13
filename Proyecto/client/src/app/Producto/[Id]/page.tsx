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



const page = ({ params }: any) => {

  const sGeneral = new GeneralService();


  const initialProducto = new ProductoEntity();
  const [Ent, setEnt] = useState<ProductoEntity>(initialProducto);

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
      title: 'Producto',
      dataIndex: 'Nombre',
      key: 'Nombre',

    },
    {
      title: 'UM',
      dataIndex: 'FechaRegistro',
      key: 'FechaRegistro',
      width: '80px',
    },
    {
      title: 'Solicitado',
      dataIndex: 'CodUsuario',
      key: 'CodUsuario',
      width: '100px',
    }, {
      title: 'Reservado',
      dataIndex: 'CodUsuario',
      key: 'CodUsuario',
      width: '100px',
    }, {
      title: 'Faltante',
      dataIndex: 'CodUsuario',
      key: 'CodUsuario',
      width: '100px',
    }, {
      title: 'Atendido',
      dataIndex: 'CodUsuario',
      key: 'CodUsuario',
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
      label: `Detalle`,
      key: 1,
      children:
        <span>


          <Row>
            <Col xs={24}>

              <Button
                style={{
                  float: "left",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: "0px",
                  marginRight: "10px",
                  marginBottom: '5px'
                }}
                size={"middle"}
                icon={<DeleteOutlined />}
              />

              <Button
                style={{
                  float: "right",
                  color: "#15616d",
                  backgroundColor: "#E5F8FA",
                  borderColor: "#15616d",
                  marginTop: "0px",
                  marginRight: "10px",
                  marginBottom: '5px'
                }}
                size={"middle"}
                icon={<FileAddOutlined />}
              />
            </Col>
          </Row>
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
    {
      label: `Historial`,
      key: 2,
      children:
        <h1>
          Content of card tab  2
        </h1>
    },
  ]);

  const handleTabChange = (key: any) => {
    setActiveTab(key);



  };

  const DTInput = (props: any) => {
    const { Header, inputName } = props; // Destructuring de las props

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
          />
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


  const getItems = async () => {
    const Resp_Categoria = await sGeneral.GetCategoriaItem(52);
    setOptionsCategoria(Resp_Categoria);
    Ent.CategoriaId = 52;

    const Resp_TipoProducto = await sGeneral.GetTipoProductoItem(52);
    setOptionsTipoProducto(Resp_TipoProducto);
    Ent.CategoriaId = 52;

    const Resp_Marca = await sGeneral.GetMarcaItem(52);
    setOptionsMarca(Resp_Marca);
    Ent.CategoriaId = 52;

    const Resp_Modelo = await sGeneral.GetModeloItem(52);
    setOptionsModelo(Resp_Modelo);
    Ent.CategoriaId = 52;
  };
  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [selectedTipoProducto, setSelectedTipoProducto] = useState<number | undefined>(undefined);
  const [selectedMarca, setSelectedMarca] = useState<number | undefined>(undefined);
  const [selectedModelo, setSelectedModelo] = useState<number | undefined>(undefined);

  const onChangeCategoria = async (value: number) => {
    Ent.CategoriaId = value;
    setSelectedCategoria(value)
  };

  const onChangeTipoProducto = async (value: number) => {
    Ent.TipoProductoId = value;
    setSelectedCategoria(value)
  };


  const onChangeMarca = async (value: number) => {
    Ent.MarcaId = value;
    setSelectedCategoria(value)
  };


  const onChangeModelo = async (value: number) => {
    Ent.ModeloId = value;
    setSelectedCategoria(value)
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

  useEffect(() => {
    getItems();
  }, []);




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

  return (
    <Layout>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={3}> Producto  {params.Id}</Title>
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
            size={"large"}
            icon={<SaveFilled />}
          />

        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={10} md={8} lg={7} xl={6}>
          <DTInput inputName="Codigo" Header="Codigo" />
          {/* <DTSelect
            Header={"Categoria Prueba"}
            onSearch={handleSearchCategoria}
            value={Ent.CategoriaId}
            key={Ent.CategoriaId}
            onChange={onChangeCategoria}
            Lista={CategoriaSelectLIst()}
          /> */}


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
                {CategoriaSelectLIst()}
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


          <DTInput inputName="TipoProducto" Header="TipoProducto" />
          <DTInput inputName="Marca" Header="Marca" />
          <DTInput inputName="Modelo" Header="Modelo" />
          <DTInput inputName="Nombre" Header="Nombre" />
          <DTInput inputName="Descripcion" Header="Descripcion" />
          <DTInput inputName="UnidadMedida" Header="UnidadMedida" />
          <DTInput inputName="Stock" Header="Stock" />
          <DTInput inputName="Reserva" Header="Reserva" />

          <DTDatePicker Header="Fecha de Emision" />
        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          <Tabs style={{ marginLeft: '20px' }}
            type="card" items={TabsItems} />
        </Col>
      </Row>
    </Layout>
  );
};

export default page;