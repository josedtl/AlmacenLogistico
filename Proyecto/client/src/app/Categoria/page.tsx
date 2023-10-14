"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import DataTable from '@/Components/Categoria/DataTable';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import ModalItem from '@/Components/Categoria/ModalItem';
import CategoriaService from '@/Service/CategoriaService';
import { Col, Row, Typography, Card, Button, Modal } from 'antd';
import { RedoOutlined, DownloadOutlined } from '@ant-design/icons';

import { message } from 'antd';

function Page() {
  const sCategoria = new CategoriaService();

  const [items, setItems] = useState<CategoriaEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const [messageAdd, contextHolderAdd] = message.useMessage();

  const handleClose = () => {
    setOpen(false);
  };

  const addItemToState = (item: CategoriaEntity) => {
    setItems([...items, item]);


    messageAdd.open({
      type: 'success',
      content: 'Se guardó correctamente.',
    });

  };

  const updateState = (item: CategoriaEntity) => {
    const itemIndex = items.findIndex((data) => data.CategoriaId === item.CategoriaId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
    messageAdd.open({
      type: 'success',
      content: 'Se actualizó correctamente.',
    });

  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.CategoriaId !== id);
    setItems(updatedItems);
    messageAdd.open({
      type: 'error',
      content: 'Se eliminó correctamente.',
    });
  };

  const getItems = async () => {
    setOpen(true);
    const itemsg = await sCategoria.getItems();
    setItems(itemsg);
    setOpen(false);

  };

  useEffect(() => {
    getItems();
  }, []);
  const { Title } = Typography;


  return (
    <Layout>
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={2}> Categoria</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ModalItem buttonLabel="" addItemToState={addItemToState} item={new CategoriaEntity()} />
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




