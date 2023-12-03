import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { ClienteEntity } from '../../Models/ClienteEntity';
import ModalItem from './ModalItem';
import ClienteService from '../../Service/ClienteService';
import { Col, Row, Typography, Card, Button, Input, Spin, message } from 'antd';
import { ButtonMainSecondaryLeft, ButtonMainSecondaryRight, InputSearchMain } from '../../Styles/Button'
import { SizeMainButtonSecondary } from '../../Styles/Type'
import { IconLoad, IconTabla, IconCard, IconReport, IconFiltro } from '../../Styles/Icons'

function Page() {

  const sCliente = new ClienteService();
  const [items, setItems] = useState<ClienteEntity[]>([]);
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled, setDisabled] = useState(false);
  const { Title } = Typography;
  const [Busqueda, setBusqueda] = useState<string>('');


  const addItemToState = (item: ClienteEntity) => {

console.log(item);
    const itemIndex = items.findIndex((data) => data.ClienteId === item.ClienteId);

    if (itemIndex > -1) {
      const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];

      newArray[0].Nombre = newArray[0].Nombre + " " + newArray[0].ApellidoPaterno + " " + newArray[0].ApellidoMaterno
      setItems(newArray);
    }
    else {

      item.Nombre = item.Nombre + " " + item.ApellidoPaterno + " " + item.ApellidoMaterno

      setItems([...items, item]);
    }




    messageAdd.open({
      type: 'success',
      content: 'Se guardó correctamente.',
    });

  };
  const toggle = () => {
    setDisabled(!disabled);
  };
  const updateState = (item: ClienteEntity) => {
    const itemIndex = items.findIndex((data) => data.ClienteId === item.ClienteId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
    messageAdd.open({
      type: 'success',
      content: 'Se actualizó correctamente.',
    });

  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.ClienteId !== id);
    setItems(updatedItems);
    messageAdd.open({
      type: 'error',
      content: 'Se eliminó correctamente.',
    });
  };

  const getItems = async () => {
    const itemsg = await sCliente.getItems();
    setItems(itemsg);
    setCargarPage(false);
  };

  useEffect(() => {
    getItems();

  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value.toUpperCase());
  };

  const filterItems = items.filter(fdata =>
    fdata.Nombre.toLowerCase().includes(Busqueda.toLowerCase())
  );

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">
      {contextHolderAdd}
      <Row >

        <Col xs={18} sm={18} md={12} lg={12} xl={12}>
          <Title level={2}> Cliente</Title>
        </Col>

        <Col xs={6} sm={6} md={12} lg={12} xl={12}>
          <ModalItem buttonLabel="" addItemToState={addItemToState} item={new ClienteEntity()} />
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            onClick={getItems}
            style={ButtonMainSecondaryLeft}
            size={SizeMainButtonSecondary}
            icon={IconLoad}
          />
          <Button
            onClick={toggle}
            style={ButtonMainSecondaryLeft}
            size={SizeMainButtonSecondary}
            icon={disabled ? IconTabla : IconCard}
          />

          <Button
            style={ButtonMainSecondaryLeft}
            size={SizeMainButtonSecondary}
            icon={IconReport}
          />
          <Button
            style={ButtonMainSecondaryRight}
            size={SizeMainButtonSecondary}
            icon={IconFiltro}
          />

        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

          <Input
            placeholder='Buscar Cliente'
            type="text"
            name="Nombre"
            onChange={onChange}
            value={Busqueda === null ? "" : Busqueda}
            style={InputSearchMain}
            size={SizeMainButtonSecondary}
          />
        </Col>

      </Row>
      <Card>
        <DataTable DataList={filterItems} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />
      </Card>
    </Spin>
  );
}

export default Page;




