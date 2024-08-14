import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, Table, message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';


import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../Styles/Button'

import MercaderiaService from '../../Service/MercaderiaService';
import GeneralService from '../../Service/GeneralService';
import MerListaService from '../../Service/MerListaService';

import { MerListaEntity } from '../../Models/MerListaEntity';
import { UnidadMedidaEntity } from '../../Models/UnidadMedidaEntity';
import { TarifaEntity } from '../../Models/TarifaEntity';
const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sMerLista = new MerListaService();
  const sMercaderia = new MercaderiaService();
  const sGeneralService = new GeneralService();

  const initialProducto = new TarifaEntity();
  const [Ent, setEnt] = useState<TarifaEntity>(initialProducto);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);


  const [optionsMercaderia, setOptionsMercaderia] = useState<MerListaEntity[]>([]);
  const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

  const handleSearchMercaderia = async (value: string) => {
    try {
      const responseModelo = await sMerLista.getItemLike("M005", value);
      setOptionsMercaderia(responseModelo);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };



  const getCargarDatos = async () => {

    console.log(idNumero)
    if (idNumero > 0) {

      const Resp_Producto = await sMercaderia.GetCabeceraItem(idNumero);
      console.log(Resp_Producto);

      const Resp_Mercaderia = await sMerLista.getItem(Resp_Producto[0].ModeloId);
      setOptionsMercaderia(Resp_Mercaderia);


    }

    setCargarPage(false);
  };
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });

  };
  const [selectedModelo, setSelectedModelo] = useState<number | undefined>(undefined);
  const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);
  const [selectedMoneda, setSelectedMoneda] = useState<number | undefined>(undefined);
  const [selectedImpuesto, setSelectedImpuesto] = useState<number | undefined>(undefined);

  const [ValModelo, setValModelo] = useState<InputStatus>('');
  const [ValImpuesto, setValImpuesto] = useState<InputStatus>('');
  const [ValMoneda, setValMoneda] = useState<InputStatus>('');
  const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');




  const onChangeModelo = async (value: number) => {
    setValModelo('');
    Ent.MercaderiaId = value;
    setSelectedModelo(value)
  };

  const onChangeUM = async (value: number) => {
    setValUnidadMedida('');
    Ent.UnidadMedidaId = value;
    setSelectedUM(value)
  };
  const onChangeMoneda = async (value: number) => {
    setValMoneda('');
    Ent.MonedaId = value;
    setSelectedMoneda(value)
  };
  const onChangeImpuesto = async (value: number) => {
    setValImpuesto('');
    Ent.PorcentajeImpuestoId = value;
    setSelectedImpuesto(value)
  };

  const [modal, contextHolder] = Modal.useModal();
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const AddProducto = async () => {

    Ent.Action = Ent.TarifaId == 0 ? 1 : 3;

    // const savedItem = await sMercaderia.saveItem(Ent);
    // if (savedItem) {

    //   messageAdd.open({
    //     type: 'success',
    //     content: 'Se guardó correctamente.',
    //   });
    // } else {
    // }
  }


  const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    selectedUM;


    if (Ent.MercaderiaId === 0) {
      setValModelo('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Modelo.', });
      return;
    }

    if (Ent.UnidadMedidaId === 0) {
      setValUnidadMedida('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una unidad de medida.', });
      return;
    }


    modal.confirm({
      title: 'Mensaje del Sistema',
      icon: <ExclamationCircleOutlined />,
      content: '¿Desea guardar el registro?',
      okText: 'Si',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        Ent.Action = 1;
        Ent.FechaCreacion = new Date();

        AddProducto();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  };


  useEffect(() => {
    async function cargarItem() {

      setCargarPage(true);
      const Resp_UM = await sGeneralService.GetUnidadMedidaItems();
      setOptionsUM(Resp_UM);
      await getCargarDatos();
    }


    cargarItem();


  }, []);

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={3}> {Ent.MercaderiaId > 0 ? 'Tarifa' : 'Agregar Tarifa'}</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            style={ButtonAddMain}
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
              <label>Producto</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValModelo}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchMercaderia}
                value={Ent.MercaderiaId === 0 ? null : Ent.MercaderiaId}
                key={Ent.MercaderiaId}
                onChange={onChangeModelo}
              >
                {optionsMercaderia.map((Mercaderia) => (
                  <Select.Option key={Mercaderia.ListaId} value={Mercaderia.ListaId}>
                    {Mercaderia.Nombre}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>


          <Row>
            <Col span={24}>
              <label>Unidad de Medida</label>
            </Col>
            <Col span={24}>
              <Select
                allowClear
                status={ValUnidadMedida}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
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


            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Moneda</label>
            </Col>
            <Col span={24}>
              <Select
                allowClear
                status={ValMoneda}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.MonedaId === 0 ? null : Ent.MonedaId}
                key={Ent.MonedaId}
                onChange={onChangeMoneda}
              >
                {optionsUM.map((UM) => (
                  <Select.Option key={UM.Nombre} value={UM.Nombre}>
                    {UM.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>% Impuesto</label>
            </Col>
            <Col span={24}>
              <Select
                allowClear
                status={ValImpuesto}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                value={Ent.MonedaId === 0 ? null : Ent.MonedaId}
                key={Ent.MonedaId}
                onChange={onChangeImpuesto}
              >
                {optionsUM.map((UM) => (
                  <Select.Option key={UM.Nombre} value={UM.Nombre}>
                    {UM.Nombre}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>
          <Row>

            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Precio Con Inpuesto</label>
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    name="PrecioConInpuesto"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeText}
                    value={Ent.PrecioConInpuesto === null ? "" : Ent.PrecioConInpuesto}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Precio Sin Inpuesto</label>
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    name="PrecioSinInpuesto"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeText}
                    value={Ent.PrecioSinInpuesto === null ? "" : Ent.PrecioSinInpuesto}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          <Tabs
            style={{ marginLeft: '20px' }}
            type="line"
          />
        </Col>
      </Row>
    </Spin>
  );
};


export default Save;