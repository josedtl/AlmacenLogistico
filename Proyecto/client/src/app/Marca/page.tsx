"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import DataTable from '@/Components/Marca/DataTable';
import { MarcaEntity } from '@/Models/MarcaEntity';
import ModalItem from '@/Components/Marca/ModalItem';
import MarcaService from '@/Service/MarcaService';
import { Col, Row, Typography, Card, Button } from 'antd';
import { RedoOutlined, DownloadOutlined } from '@ant-design/icons';

function Page() {
  const sMarca = new MarcaService();

  const [items, setItems] = useState<MarcaEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const addItemToState = (item: MarcaEntity) => {
    setItems([...items, item]);
  };

  const updateState = (item: MarcaEntity) => {
    const itemIndex = items.findIndex((data) => data.MarcaId === item.MarcaId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.MarcaId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    setOpen(true);
    const itemsg = await sMarca.getItems();
    setItems(itemsg);
    setOpen(false);

  };

  useEffect(() => {
    getItems();
  }, []);
  const { Title } = Typography;
  return (
    <Layout>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={2}> Marca</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

          <ModalItem buttonLabel="" addItemToState={addItemToState} item={new MarcaEntity()} />


          <Button
            onClick={getItems}
            style={{
              float: "right",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginTop: "25px",
              marginRight: "10px"
            }}
            size={"large"}
            icon={<RedoOutlined />}


          />
          <Button
            style={{
              float: "right",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginTop: "25px",
              marginRight: "10px"
            }}
            size={"large"}
            icon={<DownloadOutlined />}


          />


        </Col>
      </Row>
      <Card>
        <DataTable DataList={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
      </Card>
    </Layout >
  );
}

export default Page;




