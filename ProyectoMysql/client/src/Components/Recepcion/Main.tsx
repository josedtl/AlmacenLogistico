import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { RecepcionEntity } from '../../Models/RecepcionEntity';
import RecepcionService from '../../Service/RecepcionService';
import { Col, Row, Typography, Card, Button, Spin, Input, Select } from 'antd';
import { ButtonMainSecondaryLeft, ButtonMainSecondaryRight, InputSearchMain, ButtonAddMain, ButtonMainSBuscarRight, ButtonMainLimpiar } from '../../Styles/Button'
import { SizeMainButtonSecondary, SizeButtonPrimary } from '../../Styles/Type'
import { IconLoad, IconTabla, IconCard, IconReport, IconFiltro, IconAdd } from '../../Styles/Icons'
import { Link } from "react-router-dom";
function Main() {
  useEffect(() => {
    getItems();
  }, []);
  const sRecepcion = new RecepcionService();

  const [items, setItems] = useState<RecepcionEntity[]>([]);
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled, setDisabled] = useState(false);
  const [Busqueda, setBusqueda] = useState<string>('');
  const toggle = () => {
    setDisabled(!disabled);
  };

  const updateState = (item: RecepcionEntity) => {
    const itemIndex = items.findIndex((data) => data.RecepcionId === item.RecepcionId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.RecepcionId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    const itemsg = await sRecepcion.GetItemOPMain();
    setItems(itemsg);
    setCargarPage(false);
    console.log(itemsg);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value.toUpperCase());
  };
  const filterItems = items.filter(fdata =>
    fdata.Codigo.toLowerCase().includes(Busqueda.toLowerCase())
  );

  const { Title } = Typography;
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">
      <Row>

        <Col xs={18} sm={18} md={12} lg={12} xl={12}>
          <Title level={2}> Recepción</Title>
        </Col>

        <Col xs={6} sm={6} md={12} lg={12} xl={12}>
          <Link to={`/RecepcionSave/0`}>
            <Button
              style={ButtonAddMain}
              size={SizeButtonPrimary}
              icon={IconAdd}
            >
              Agregar

            </Button>


          </Link>
        </Col>

      

      </Row>


      <Row>


        <Col xs={2} sm={2} md={2} lg={2} xl={2}>

          <Button
            type='dashed'
            onClick={getItems}
            style={ButtonMainLimpiar}
            size={SizeMainButtonSecondary}
          // icon={IconFiltro}
          >
            Todos
          </Button>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>

          <Button
            type='dashed'
            style={ButtonMainLimpiar}
            size={SizeMainButtonSecondary}
          // onClick={Limpiar_Event}
          // icon={IconFiltro}
          >
            Limpiar
          </Button>
        </Col>


        <Col xs={24} sm={5} md={5} lg={5} xl={5}>
          <Row>
            <Col span={24}>
              <label>Tipo</label>
            </Col>
            <Col span={24}>
              <Select
                // status={ValCategoria}
                showSearch
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px', paddingRight: '1px', paddingLeft: '1px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
              // onSearch={handleSearchTipoProducto}
              // value={EntFitro.TipoId === 0 ? null : EntFitro.TipoId}
              // key={EntFitro.TipoId}
              // onChange={onChangeTipoProducto}
              >
                {/* {optionsTipoProducto.map((Tipo) => (
          <Select.Option key={Tipo.ListaId} value={Tipo.ListaId}>
            {Tipo.Nombre}
          </Select.Option>
        ))} */}
              </Select>

            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={5} md={5} lg={5} xl={5}>

          <Row>
            <Col span={24}>
              <label>Codigo</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValCodigo}
                type="text"
                name="Nombre"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
              // value={EntFitro.Nombre === null ? "" : EntFitro.Nombre}
              />
            </Col>
          </Row>
          {/* <Input
    placeholder='Buscar Nombre'
    type="text"
    name="Nombre"
    onChange={onChange}
    value={Busqueda === null ? "" : Busqueda}
    style={InputSearchMain}
    size={SizeMainButtonSecondary}
  /> */}
        </Col>



        <Col xs={24} sm={8} md={8} lg={8} xl={8}>

          <Row>
            <Col span={24}>
              <label>Responsable</label>
            </Col>
            <Col span={24}>
              <Select
                // status={ValCategoria}
                showSearch
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
              // onSearch={handleSearchCategoria}
              // value={EntFitro.CategoriaId === 0 ? null : EntFitro.CategoriaId}
              // key={EntFitro.CategoriaId}
              // onChange={onChangeCategoria}
              >
                {/* {optionsCategoria.map((categoria) => (
          <Select.Option key={categoria.ListaId} value={categoria.ListaId}>
            {categoria.Nombre}
          </Select.Option>
        ))} */}
              </Select>

            </Col>
          </Row>
        </Col>








        <Col xs={24} sm={2} md={2} lg={2} xl={2}>
          <Button
            style={ButtonMainSBuscarRight}
            size={SizeMainButtonSecondary}
          // onClick={Buscar_Event}

          // icon={IconFiltro}
          >
            Buscar
          </Button>


        </Col>


      </Row>
      <Card>
        <DataTable DataList={filterItems} updateState={updateState} deleteItemFromState={deleteItemFromState} EsTabla={disabled} />
      </Card>

    </Spin>

  );
}

export default Main;




