import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';


import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../../Styles/Button'

import MercaderiaService from '../../../Service/MercaderiaService';
import GeneralService from '../../../Service/GeneralService';
import MerListaService from '../../../Service/MerListaService';
import TarifaService from '../../../Service/TarifaService';

import { MercaderiaSaveModel } from '../../../Models/MercaderiaEntity';
import { UnidadMedidaEntity } from '../../../Models/UnidadMedidaEntity';
import { PorcentajeImporteEntity } from '../../../Models/PorcentajeImporteEntity';
import { MonedaEntity } from '../../../Models/MonedaEntity';
import { TarifaEntity } from '../../../Models/TarifaEntity';
const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());

  const sMerLista = new MerListaService();
  const sMercaderia = new MercaderiaService();

  const sGeneral = new GeneralService();
  const sTarifa = new TarifaService();


  const initialMercaderia = new TarifaEntity();
  const [Ent, setEnt] = useState<TarifaEntity>(initialMercaderia);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);


  const [optionsMercaderia, setOptionsMercaderia] = useState<MercaderiaSaveModel[]>([]);
  const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

  const [optionsMoneda, setOptionsMoneda] = useState<MonedaEntity[]>([]);
  const [optionsImporte, setOptionsImporte] = useState<PorcentajeImporteEntity[]>([]);
  const [getPrecioSinImpuesto, setPrecioSinImpuesto] = useState<string>('0');
  const [getPrecioConImpuesto, setPrecioConImpuesto] = useState<string>('0');

  const getCargarDatos = async () => {

    console.log(idNumero)
    if (idNumero > 0) {

      const Resp_Mercaderia = await sMercaderia.GetObtenerMercaderiaTarifa(Ent.MercaderiaId);
      setOptionsMercaderia(Resp_Mercaderia);
    }

    setCargarPage(false);
  };

  
  const onChangeTextConImpuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const ValorCI = Number(e.target.value);
    // const str = "123.45";
    setValConImpuesto('');
    const decimal = parseFloat(e.target.value.toLowerCase());
    console.log(decimal);
    console.log(e.target.value)
    setPrecioConImpuesto(e.target.value);
    const porcentajeImpuesto = optionsImporte.find(option => option.PorcentajeImpuestoId === Ent.PorcentajeImpuestoId);

    if (porcentajeImpuesto === undefined) {
      console.error('Porcentaje de impuesto no encontrado.');
      return;
    }

    const valorImpuesto = porcentajeImpuesto.Valor;

    if (!isNaN(decimal) && e.target.value.trim() !== "") {
      setPrecioSinImpuesto(roundToTwoDecimals(decimal / (1 + valorImpuesto / 100)).toString());
    }

  }

  const onChangeTextSinImpuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrecioSinImpuesto(e.target.value);
    setValSinImpuesto('');

    const decimal = parseFloat(e.target.value.toLowerCase());
    console.log(decimal);

    const porcentajeImpuesto = optionsImporte.find(option => option.PorcentajeImpuestoId === Ent.PorcentajeImpuestoId);

    if (porcentajeImpuesto === undefined) {
      console.error('Porcentaje de impuesto no encontrado.');
      return;
    }

    const valorImpuesto = porcentajeImpuesto.Valor;

    if (!isNaN(decimal) && e.target.value.trim() !== "") {


      setPrecioConImpuesto(roundToTwoDecimals(decimal * (1 + valorImpuesto / 100)).toString());

    }
  }


  const roundToTwoDecimals = (num: number): number => {

    return Number(num.toFixed(2));
  };
  // const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   setEnt({
  //     ...Ent,
  //     [e.target.name]: e.target.value.toUpperCase()
  //   });


  // };


  const [selectedMercaderia, setSelectedMercaderia] = useState<number | undefined>(undefined);
  selectedMercaderia;
  const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);
  const [selectedMoneda, setSelectedMoneda] = useState<number | undefined>(undefined);
  const [selectedImpuesto, setSelectedImpuesto] = useState<number | undefined>(undefined);

  const [ValMercaderia, setValMercaderia] = useState<InputStatus>('');
  const [ValImpuesto, setValImpuesto] = useState<InputStatus>('');
  const [ValMoneda, setValMoneda] = useState<InputStatus>('');
  const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');

  const [ValConImpuesto, setValConImpuesto] = useState<InputStatus>('');
  const [ValSinImpuesto, setValSinImpuesto] = useState<InputStatus>('');

  const handleSearchMercaderia = async (value: string) => {
    try {
      const responseMercaderia = await sMercaderia.GetBuscarItem(value);
      setOptionsMercaderia(responseMercaderia);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };


  const onChangeMercaderia = async (value: number) => {
    setValMercaderia('');
    Ent.MercaderiaId = value;
    setSelectedMercaderia(value)
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



  const AddTarifa = async () => {

    Ent.Action = Ent.TarifaId == 0 ? 1 : 3;
    Ent.PrecioConImpuesto = Number(getPrecioConImpuesto);
    Ent.PrecioSinImpuesto = Number(getPrecioSinImpuesto);

    console.log(Ent);
    const savedItem = await sTarifa.saveItem(Ent);
    console.log(savedItem);
    // if (savedItem) {
    //   messageAdd.open({
    //     type: 'success',
    //     content: 'Se guardó correctamente.',
    //   });
    // } else {
    //   messageAdd.open({
    //     type: 'error',
    //     content: 'Error al guardar el item.',
    //   });
    // }
  }


  const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    selectedUM;
    selectedMoneda;
    selectedImpuesto;

    if (Ent.MercaderiaId === 0) {
      setValMercaderia('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Mercaderia.', });
      return;
    }

    if (Ent.UnidadMedidaId === 0) {
      setValUnidadMedida('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una unidad de medida.', });
      return;
    }
    if (Ent.MonedaId === 0) {
      setValMoneda('error');
      messageAdd.open({ type: 'error', content: 'Seleccione una Moneda.', });
      return;
    }
    if (Ent.PorcentajeImpuestoId === 0) {
      setValImpuesto('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Impuesto.', });
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

        AddTarifa();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  };


  useEffect(() => {
    async function cargarItem() {

      setCargarPage(true);
      const Resp_UM = await sGeneral.GetUnidadMedidaItems();
      setOptionsUM(Resp_UM);

      const Resp_Moneda = await sGeneral.GetMonedaItems();
      setOptionsMoneda(Resp_Moneda);

      const Resp_Importe = await sGeneral.GetPorcentajeImporteItems();
      setOptionsImporte(Resp_Importe);

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
              <label>Mercaderia</label>
            </Col>
            <Col span={24}>
              <Select
                showSearch
                status={ValMercaderia}
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchMercaderia}
                value={Ent.MercaderiaId === 0 ? null : Ent.MercaderiaId}
                key={Ent.MercaderiaId}
                onChange={onChangeMercaderia}
              >
                {optionsMercaderia.map((Mercaderia) => (
                  <Select.Option key={Mercaderia.MercaderiaId} value={Mercaderia.MercaderiaId}>
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
                {optionsMoneda.map((M) => (
                  <Select.Option key={M.MonedaId} value={M.MonedaId}>
                    {M.Simbolo} - {M.CodMoneda}
                  </Select.Option>
                ))}
              </Select>


            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Col span={12}>
                <label>% Impuesto</label>
              </Col>
              <Col span={24}>
                <Select
                  allowClear
                  status={ValImpuesto}
                  style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                  defaultActiveFirstOption={false}
                  filterOption={false}
                  value={Ent.PorcentajeImpuestoId === 0 ? null : Ent.PorcentajeImpuestoId}
                  key={Ent.PorcentajeImpuestoId}
                  onChange={onChangeImpuesto}
                >
                  {optionsImporte.map((PI) => (
                    <Select.Option key={PI.PorcentajeImpuestoId} value={PI.PorcentajeImpuestoId}>
                      {PI.Nombre} - {PI.Valor}%
                    </Select.Option>
                  ))}
                </Select>

              </Col>
            </Col>
            <Col span={12}>
              {/* <Row>
                <Col span={24}>
                  <label>Precio Sin Impuesto</label>
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    name="PrecioSinInpuesto"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeTextSinImpuesto}
                    value={getPrecioSinInpuesto === null ? "" : getPrecioSinInpuesto}
                  />
                </Col>
              </Row> */}
            </Col>
          </Row>
          <Row>


            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Precio Sin Impuesto</label>
                </Col>
                <Col span={24}>
                  <Input

                    status={ValSinImpuesto}
                    type="decimal"
                    name="PrecioSinImpuesto"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeTextSinImpuesto}
                    value={getPrecioSinImpuesto === null ? "" : getPrecioSinImpuesto}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Precio Con Impuesto</label>
                </Col>
                <Col span={24}>
                  <Input
                    status={ValConImpuesto}
                    type="number"
                    name="PrecioConImpuesto"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeTextConImpuesto}
                    value={getPrecioConImpuesto === null ? "" : getPrecioConImpuesto}
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