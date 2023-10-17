"use client"
import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { CategoriaEntity } from '../../Models/CategoriaEntity';
import ModalItem from './ModalItem';
import CategoriaService from '../../Service/CategoriaService';
import { Col, Row, Typography, Card, Button, Input ,Spin} from 'antd';
import { RedoOutlined, TableOutlined, DatabaseOutlined ,FileTextOutlined} from '@ant-design/icons';

import { message } from 'antd';

function Page() {
  const sCategoria = new CategoriaService();

  const [items, setItems] = useState<CategoriaEntity[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled, setDisabled] = useState(false);
  const addItemToState = (item: CategoriaEntity) => {
    setItems([...items, item]);
    messageAdd.open({
      type: 'success',
      content: 'Se guardó correctamente.',
    });

  };
  const toggle = () => {
    setDisabled(!disabled);
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
    const itemsg = await sCategoria.getItems();
    setItems(itemsg);
    setCargarPage(false);
  };

  useEffect(() => {
    getItems();

  }, []);
  const { Title } = Typography;

  const [Busqueda, setBusqueda] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setBusqueda(e.target.value.toUpperCase());

  };

  const filteredUsuarios = items.filter(fdata =>
    fdata.Nombre.toLowerCase().includes(Busqueda.toLowerCase())
  );


  return (
            <Spin spinning={CargarPage} tip="Cargando" size="large">
      {contextHolderAdd}
      <Row >
        <Col xs={18} sm={18} md={12} lg={12} xl={12}>
          <Title level={2}> Categoria</Title>
        </Col>

        <Col xs={6} sm={6} md={12} lg={12} xl={12}>
          <ModalItem buttonLabel="" addItemToState={addItemToState} item={new CategoriaEntity()} />
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            onClick={getItems}
            style={{
              float: "left",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginRight: "10px"
            }}

            size={"large"}
            icon={<RedoOutlined />}
          />
          <Button
            onClick={toggle}
            style={{
              float: "left",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginRight: "10px"
            }}
            size={"large"}
            icon={disabled ? <TableOutlined /> : <DatabaseOutlined />}
          />

          <Button
            style={{
              float: "right",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginRight: "5px",
              marginBottom:"5px",
            }}
            size={"large"}
            icon={<FileTextOutlined />}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Input
            placeholder='Buscar Categoria'
            type="text"
            name="Nombre"
            onChange={onChange}
            value={Busqueda === null ? "" : Busqueda}
            style={{
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
            }}
            size={"large"}
          />
        </Col>

      </Row>
      <Card>
        <DataTable DataList={filteredUsuarios} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />
      </Card>
      </Spin>
  );
}

export default Page;




