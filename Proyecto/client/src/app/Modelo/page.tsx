"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import DataTable from '@/Components/Modelo/DataTable';
import { ModeloEntity } from '@/Models/ModeloEntity';
import ModalItem from '@/Components/Modelo/ModalItem';
import ModeloService from '@/Service/ModeloService';
import { Col, Row ,Typography,Card,Button} from 'antd';
import { RedoOutlined,DownloadOutlined } from '@ant-design/icons';

function Page() {
  const sModelo = new ModeloService();

  const [items, setItems] = useState<ModeloEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const addItemToState = (item: ModeloEntity) => {
    setItems([...items, item]);
  };

  const updateState = (item: ModeloEntity) => {
    const itemIndex = items.findIndex((data) => data.ModeloId === item.ModeloId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.ModeloId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    setOpen(true);
    const itemsg = await sModelo.getItems();
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
          <Title level={2}> Modelo</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

          <ModalItem buttonLabel="" addItemToState={addItemToState} item={new ModeloEntity()} />


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




