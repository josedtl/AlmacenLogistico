"use client"
import React, { useState } from 'react';
import Layout from '@/Silder/Layout';
import { Button, Col, Row, Space, Typography } from 'antd';
import { SaveFilled, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Tabs, Table, DatePicker } from 'antd';
import DataTable from '@/Components/OrdenPedido/DataTable';
import { ProductoDetalleModel } from '@/Models/OrdenPedido/ProductoDetalleModel';
import ModalItem from '@/Components/OrdenPedido/ModalItem';
const page = () => {




  const { TabPane } = Tabs;
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');
  const [items, setItems] = useState<ProductoDetalleModel[]>([]);


  const updateState = (item: ProductoDetalleModel) => {
    const itemIndex = items.findIndex((data) => data.OrdenPedidoDetalleId === item.OrdenPedidoDetalleId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.OrdenPedidoDetalleId !== id);
    setItems(updatedItems);
  };
  const addItemToState = (item: ProductoDetalleModel) => {
    console.log(item);
    setItems([...items, item]);
  };


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
      title: 'CodUsuario',
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

              <ModalItem buttonLabel="" addItemToState={addItemToState} item={new ProductoDetalleModel()} />


            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              {/* 

              <Table
                columns={columns}
                size="small"
                scroll={{ y: '100%' }}
              /> */}
              <DataTable DataList={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />

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

  return (
    <Layout>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={3}> Orden Pedido</Title>
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
          <DTInput inputName="Documento" Header="Documento" />
          <DTInput inputName="Solicitado" Header="Solicitado" />
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