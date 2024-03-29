"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import DataTable from '@/Components/TipoProducto/DataTable';
import { TipoProductoEntity } from '@/Models/TipoProductoEntity';
import ModalItem from '@/Components/TipoProducto/ModalItem';
import TipoProductoService from '@/Service/TipoProductoService';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import { Card, Space, Button } from 'antd';
import { RedoOutlined, DownloadOutlined } from '@ant-design/icons';
function Page() {
  const sTipoProducto = new TipoProductoService();

  const [items, setItems] = useState<TipoProductoEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const addItemToState = (item: TipoProductoEntity) => {
    setItems([...items, item]);
  };

  const updateState = (item: TipoProductoEntity) => {
    const itemIndex = items.findIndex((data) => data.TipoProductoId === item.TipoProductoId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.TipoProductoId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    setOpen(true);
    const itemsg = await sTipoProducto.getItems();
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
          <Title level={2}> TipoProducto</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

          <ModalItem buttonLabel="" addItemToState={addItemToState} item={new TipoProductoEntity()} />


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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Layout >
  );
}

export default Page;




