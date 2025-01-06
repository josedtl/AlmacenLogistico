import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, message, Select, Button, Col, Row, Typography, Modal, Spin, Segmented, Avatar } from 'antd';


import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../../Styles/Button'
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'

import MercaderiaService from '../../../Service/MercaderiaService';
import GeneralService from '../../../Service/GeneralService';
import TarifaService from '../../../Service/TarifaService';

import ModalItem from '../Grupal/Detalle/ModalItem';
import DataTable from '../Grupal/Detalle/DataTable';

import { MercaderiaSaveModel } from '../../../Models/MercaderiaEntity';
import { UnidadMedidaEntity } from '../../../Models/UnidadMedidaEntity';
import { PorcentajeImporteEntity } from '../../../Models/PorcentajeImporteEntity';
import { MonedaEntity } from '../../../Models/MonedaEntity';
import { TarifaEntity } from '../../../Models/TarifaEntity';
const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());

  const sMercaderia = new MercaderiaService();

  const sGeneral = new GeneralService();
  const sTarifa = new TarifaService();


  const initialTarifa = new TarifaEntity();
  const [Ent, setEnt] = useState<TarifaEntity>(initialTarifa);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled] = useState(false);


  const [optionsMercaderia, setOptionsMercaderia] = useState<MercaderiaSaveModel[]>([]);
  const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

  const [optionsMoneda, setOptionsMoneda] = useState<MonedaEntity[]>([]);
  const [optionsImporte, setOptionsImporte] = useState<PorcentajeImporteEntity[]>([]);
  const [getPrecioSinImpuesto, setPrecioSinImpuesto] = useState<string>('0');
  const [getPrecioConImpuesto, setPrecioConImpuesto] = useState<string>('0');

  const getCargarDatos = async () => {

    Ent.Action = ProcessActionEnum.Add
    console.log(idNumero)

    if (idNumero > 0) {

      const Resp_Tarifa = await sTarifa.GetObtenerItem(idNumero);
      setEnt(Resp_Tarifa[0]);

      setPrecioSinImpuesto(Resp_Tarifa[0].PrecioSinImpuesto.toString());
      setPrecioConImpuesto(Resp_Tarifa[0].PrecioConImpuesto.toString());

      const Resp_Mercaderia = await sMercaderia.GetObtenerMercaderiaTarifa(Resp_Tarifa[0].MercaderiaId);
      setOptionsMercaderia(Resp_Mercaderia);

    }

    setCargarPage(false);
  };


  const onChangeTextConImpuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });


  };


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

    const savedItem = await sTarifa.saveItem(Ent);
    if (savedItem) {
      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });
    } else {
      messageAdd.open({
        type: 'error',
        content: 'Error al guardar el item.',
      });
    }
  }


  const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    selectedImpuesto;
    selectedMercaderia;
    selectedUM;
    selectedMoneda;
    selectedImpuesto;

    if (Ent.MercaderiaId === 0) {
      setValMercaderia('error');
      messageAdd.open({ type: 'error', content: 'Seleccione un Mercaderia.', });
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
        Ent.FechaCreacion = new Date();
        Ent.Action = Ent.TarifaId == 0 ? ProcessActionEnum.Add : ProcessActionEnum.Update;

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

  const operations = <ModalItem buttonLabel="" keyItem={''} />;

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={3}> {Ent.TarifaId > 0 ? 'Tarifa' : 'Agregar Tarifa'}</Title>
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
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>

          <Row>
            <Col span={24}>
              <label>Mercaderia</label>
            </Col>
            <Col span={20}>
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
            <Col span={4}>
              <ModalItem buttonLabel="" keyItem={''} />
            </Col>
          </Row>

        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {/* <Tabs
            style={{ marginLeft: '20px' }}
            type="line" items={TabsItems} /> */}


          <Tabs
            // tabBarExtraContent={operations}
            key={'TabGeneral'}
            type="card"

            items={new Array(1).fill(null).map((_, i) => {
              i;
              return {
                label: (
                  < >
                    <Row>
                      <Col xs={12}>
                        <Title style={{ fontSize: '18px' }}>
                          Detalle
                        </Title>
                      </Col>


                    </Row>
                  </>
                ),
                key: '1',
                children:
                  <span>

                    <Row style={{

                      height: 'calc(100px + 40vh)',
                    }
                    }> <Col xs={24}>
                        <Col xs={24}>
                          {/* cambiar el optionsUM por arreglo */}
                          <DataTable DataList={optionsUM} EsTabla={disabled} />

                        </Col>


                      </Col>

                    </Row >
                  </span>,
              };
            })}
          />
        </Col>
      </Row>

    </Spin>
  );
};


export default Save;