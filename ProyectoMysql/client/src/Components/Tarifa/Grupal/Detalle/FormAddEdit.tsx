import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../../Models/OrdenPedidoDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../../Styles/Button'
import { Select, Button, Col, Row, Space, Input, Form, message, Modal } from 'antd';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import MerListaService from '../../../../Service/MerListaService';
import MercaderiaService from '../../../../Service/MercaderiaService';
import { MerListaEntity } from '../../../../Models/MerListaEntity';
import { ProcessActionEnum } from '../../../../Lib/ResourceModel/Enum'
import { MercaderiaItemOPModel } from "../../../../Models/MercaderiaEntity";


import { TarifaEntity,TarifaUnidadMedidaPrecioModel } from '../../../../Models/TarifaEntity';
import { MercaderiaSaveModel } from '../../../../Models/MercaderiaEntity';
import { UnidadMedidaEntity } from '../../../../Models/UnidadMedidaEntity';
import { PorcentajeImporteEntity } from '../../../../Models/PorcentajeImporteEntity';
import { MonedaEntity } from '../../../../Models/MonedaEntity';
import GeneralService from '../../../../Service/GeneralService';
import TarifaService from '../../../../Service/TarifaService';

const AddEditForm: React.FC<PropsModel> = (props) => {



    const initialMercaderia = new TarifaEntity();
    const [Ent, setEnt] = useState<TarifaEntity>(initialMercaderia);

    const sTarifa = new TarifaService();
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [ValSolicitar, setValSolicitar] = useState<InputStatus>('');
    const [ValDato, setValDato] = useState<InputStatus>('');
    const [messageAdd, contextHolderAdd] = message.useMessage();



    const [optionsMercaderia, setOptionsMercaderia] = useState<MercaderiaSaveModel[]>([]);
    const [optionsUM, setOptionsUM] = useState<UnidadMedidaEntity[]>([]);

    const [optionsMoneda, setOptionsMoneda] = useState<MonedaEntity[]>([]);
    const [optionsImporte, setOptionsImporte] = useState<PorcentajeImporteEntity[]>([]);
    const [ValConImpuesto, setValConImpuesto] = useState<InputStatus>('');
    const [ValSinImpuesto, setValSinImpuesto] = useState<InputStatus>('');
    const [getPrecioSinImpuesto, setPrecioSinImpuesto] = useState<string>('0');
    const [getPrecioConImpuesto, setPrecioConImpuesto] = useState<string>('0');



    const [selectedMercaderia, setSelectedMercaderia] = useState<number | undefined>(undefined);
    selectedMercaderia;
    const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);
    const [selectedMoneda, setSelectedMoneda] = useState<number | undefined>(undefined);
    const [selectedImpuesto, setSelectedImpuesto] = useState<number | undefined>(undefined);

    const [ValMercaderia, setValMercaderia] = useState<InputStatus>('');
    const [ValImpuesto, setValImpuesto] = useState<InputStatus>('');
    const [ValMoneda, setValMoneda] = useState<InputStatus>('');
    const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');
    const [optionsUMPrecio, setOptionsUMPrecio] = useState<TarifaUnidadMedidaPrecioModel[]>([]);

    const [descuento, setDescuento] = useState<string>('0');

    const roundToTwoDecimals = (num: number): number => {

        return Number(num.toFixed(2));
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

      const onChangeUM = async (value: number) => {
        setValUnidadMedida('');
        Ent.UnidadMedidaId = value;
        setSelectedUM(value)
       
        
      };

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


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValDato('');
        setValSolicitar('');
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

    };
    FlaState;
    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        selectedImpuesto;
        selectedMercaderia;
        selectedUM;
        selectedMoneda;
        selectedImpuesto;
        try {
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
                    Ent.FechaCreacion = new Date();
                    Ent.Action = Ent.TarifaId == 0 ? ProcessActionEnum.Add : ProcessActionEnum.Update;

                    AddTarifa();
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
            props.toggle();
        } catch (e) {
            console.log(e);
        }
    };
    function generarGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const [selectedPRoducto, setSelectedProducto] = useState<number | undefined>(undefined);
    const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
    const [ValCategoria, setValCategoria] = useState<InputStatus>('');
    const [ValCodigoUM, setValCodigoUM] = useState<string>('');
    const [ValProducto, setValProducto] = useState<InputStatus>('');

    const sMerLista = new MerListaService();
    const sMercaderiaService = new MercaderiaService();
    selectedPRoducto;
    selectedCategoria;
    ValCategoria;
    // useEffect(() => {
    //     const updatedPerson = props.item;
    //     updatedPerson.Action = updatedPerson.OrdenPedidoDetalleId > 0 ? 3 : 1;
    //     setFlaState(updatedPerson.OrdenPedidoDetalleId > 0);
    //     setEnt(updatedPerson);
    // }, []);
    const [optionsCategoria, setOptionsCategoria] = useState<MerListaEntity[]>([]);
    const [optionsProducto, setOptionsProducto] = useState<MercaderiaItemOPModel[]>([]);
    const handleSearchCategoria = async (value: string) => {
        try {
            const responseCategoria = await sMerLista.getItemLike("M002", value);
            setOptionsCategoria(responseCategoria);
        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }
    };


    const onChangeProducto = async (value: number, Itemdata: any) => {
        try {
            setValProducto('');
            Itemdata;
            Ent.MercaderiaId = value;
            setSelectedProducto(value)

            const resp = await sMercaderiaService.GetMercaderia_ItemOP(value);
            setValCodigoUM(resp[0].CodigoUM);
            Ent.NomProducto = resp[0].Nombre;
            Ent.MercaderiaId = resp[0].MercaderiaId;

            console.log(resp);

        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }


        // setValCategoria('');

    };
    useEffect(() => {
        // setEnt(new OrdenPedidoDetalleEntity());

        getItems();
    }, []);


    const getItems = async () => {

        const updatedItem = props.item;

        if (updatedItem.MercaderiaId > 0) {

            const responseProducto = await sMercaderiaService.GetMercaderia_ItemOP(updatedItem.MercaderiaId);
            console.log(responseProducto);
            if (responseProducto[0].CategoriaId > 0) {
                const responseCategoria = await sMerLista.getItem(responseProducto[0].CategoriaId);
                setOptionsCategoria(responseCategoria);
                updatedItem.CategoriaId = responseProducto[0].CategoriaId;
                setOptionsProducto(responseProducto);

                console.log(responseProducto);
                setValCodigoUM(responseProducto[0].CodigoUM);
                updatedItem.Stock = responseProducto[0].Stock;
            } else {
                setOptionsCategoria([]);
                setOptionsProducto([]);
                setValCodigoUM("");
                updatedItem.Stock = 0;
            }



        }



        updatedItem.Action = updatedItem.OrdenPedidoDetalleId > 0 ? ProcessActionEnum.Update : ProcessActionEnum.Add;
        setFlaState(updatedItem.key === '');
        setEnt(updatedItem);
    }



    const [modal, contextHolder] = Modal.useModal();
    modal;
    return (

        <>

            {contextHolder}
            {contextHolderAdd}
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
                {optionsUMPrecio.map((UM) => (
                  <Select.Option key={UM.UnidadMedidaId} value={UM.UnidadMedidaId}>
                    {UM.CodUnidad}
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
                <label>Tipo Impuesto</label>
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
              <Row>
                    <Col span={24}>
                      <label>Monto Impuesto</label>
                    </Col>
                    <Col span={24}>
                      <Input
                        type="number"
                        value={descuento} disabled
                        style={{ 
                          marginTop: '5px', 
                          marginBottom: '10px',
                          backgroundColor: '#FFF', // Color de fondo claro
                          cursor: 'not-allowed', // Cambia el cursor para indicar que está deshabilitado
                          color:'black'
                        }}
                        // style={{ marginTop: '5px', marginBottom: '10px' }}
                      />
                    </Col>
              </Row>
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



            <Form.Item>
                <Button
                    onClick={submitFormAdd}
                    style={ButtonAcceptModel}>
                    Aceptar
                </Button>
            </Form.Item>
        </>
        // </Form>
    );
}

export default AddEditForm;




