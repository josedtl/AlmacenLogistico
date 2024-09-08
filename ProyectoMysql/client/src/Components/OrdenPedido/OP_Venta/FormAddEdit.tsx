import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { Select, Button, Col, Row, Space, Input, Form, message, Modal } from 'antd';
import MerListaService from '../../../Service/MerListaService';
import MercaderiaService from '../../../Service/MercaderiaService';
import { MerListaEntity } from '../../../Models/MerListaEntity';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { MercaderiaItemOPModel } from "../../../Models/MercaderiaEntity";
import { UnidadMedidaEntity } from "../../../Models/UnidadMedidaEntity";
import TarifaService from '../../../Service/TarifaService';
import { MonedaEntity } from "../../../Models/MonedaEntity";
import { TarifaMonedaModel, TarifaUnidadMedidaPrecioModel } from "../../../Models/TarifaEntity";

const AddEditForm: React.FC<PropsModel> = (props) => {

    const sTarifaService = new TarifaService();
    const initialOrdenPedidoDetalle = new OrdenPedidoDetalleEntity();
    const [Ent, setEnt] = useState<OrdenPedidoDetalleEntity>(initialOrdenPedidoDetalle);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [ValSolicitar, setValSolicitar] = useState<InputStatus>('');
    const [ValDato, setValDato] = useState<InputStatus>('');
    const [messageAdd, contextHolderAdd] = message.useMessage();
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

        try {
            if (Ent.CategoriaId === 0) {
                setValCategoria('error');
                messageAdd.open({ type: 'error', content: 'Seleccione una Categoria.', });
                return;
            }
            if (Ent.MercaderiaId === 0) {
                setValProducto('error');
                messageAdd.open({ type: 'error', content: 'Seleccione un Producto.', });
                return;
            }

            if (Ent.CantidadSolicitado <= 0) {
                setValSolicitar('error');
                messageAdd.open({ type: 'error', content: 'Seleccione un número', });
                return;
            }



            // Ent.CantidadSolicitado = 1;
            Ent.UnidadMedidaId = 1;
            // Ent.key =props.keyItem;
            console.log(Ent);
            if (Ent.keyItem === '') {
                Ent.keyItem = generarGuid();
                props.addItemToState(Ent);
                setEnt(new OrdenPedidoDetalleEntity());
            }
            else {
                props.updateState(Ent);
            }
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
    const [ValCodigoMoneda, setValCodigoMoneda] = useState<string>('');
    const [ValCodigoUM, setValCodigoUM] = useState<string>('');
    const [ValProducto, setValProducto] = useState<InputStatus>('');
    const [optionsUM, setOptionsUM] = useState<TarifaUnidadMedidaPrecioModel[]>([]);
    const [OptionsMoneda, setOptionsMoneda] = useState<TarifaMonedaModel[]>([]);
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

    const onChangeCategoria = async (value: number) => {
        setValCategoria('');
        Ent.CategoriaId = value;
        setSelectedCategoria(value)
    };

    const handleSearchProducto = async (value: string) => {
        try {
            const responseProducto = await sMercaderiaService.getItemCategoriaLike(value, Ent.CategoriaId);
            setOptionsProducto(responseProducto);



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




            Ent.Stock = resp[0].Stock
            Ent.NomProducto = resp[0].Nombre;
            Ent.MercaderiaId = resp[0].MercaderiaId;
            // Ent.CodigoUM = resp[0].CodigoUM;

            console.log(resp);


            const responseMoneda = await sTarifaService.ObtenerMoneda(resp[0].MercaderiaId);

            setOptionsMoneda(responseMoneda);

            setValCodigoUM('')
            setValCodigoMoneda('')
            setOptionsUM([]);
            Ent.UnidadMedidaId = 0;
            Ent.MonedaId = 0;
            Ent.Precio = 0;
        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }


        // setValCategoria('');

    };
    useEffect(() => {

        getItems();
    }, []);


    const getItems = async () => {

        const updatedItem = props.item;
        // const Resp_UM = await sTarifaService.GetUnidadMedidaItems();

        if (updatedItem.MercaderiaId > 0) {

            const responseProducto = await sMercaderiaService.GetMercaderia_ItemOP(updatedItem.MercaderiaId);
            console.log(responseProducto);
            if (responseProducto[0].CategoriaId > 0) {
                const responseCategoria = await sMerLista.getItem(responseProducto[0].CategoriaId);
                setOptionsCategoria(responseCategoria);
                updatedItem.CategoriaId = responseProducto[0].CategoriaId;
                setOptionsProducto(responseProducto);

                console.log(responseProducto);
                // setValCodigoUM(responseProducto[0].CodigoUM);
                updatedItem.Stock = responseProducto[0].Stock;
            } else {
                setOptionsCategoria([]);
                setOptionsProducto([]);
                // setValCodigoUM("");
                updatedItem.Stock = 0;
            }



        }



        updatedItem.Action = updatedItem.OrdenPedidoDetalleId > 0 ? ProcessActionEnum.Update : ProcessActionEnum.Add;
        setFlaState(updatedItem.key === '');
        setEnt(updatedItem);
    }

    const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');
    const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);

    const [ValMoneda, setValMoneda] = useState<InputStatus>('');
    const [selectedMoneda, setSelectedMoneda] = useState<number | undefined>(undefined);

    selectedUM;
    const onChangeUM = async (value: number) => {
        setValUnidadMedida('');
        Ent.UnidadMedidaId = value;
        setSelectedUM(value)

        const ItemPrecio = optionsUM.findIndex((d) => d.UnidadMedidaId === value);
        if (ItemPrecio >= 0) {

            Ent.Precio = optionsUM[ItemPrecio].PrecioConImpuesto;
            setValCodigoUM(optionsUM[ItemPrecio].CodUnidad)
        }

    };

    const onChangeMoneda = async (value: number) => {
        setValMoneda('');
        Ent.MonedaId = value;
        setSelectedMoneda(value)

        const responseUm = await sTarifaService.ObtenerUnidadMedidaPrecio(Ent.MercaderiaId, value);
        setOptionsUM(responseUm);

        // console.log(responseUm.length);
        if (responseUm.length === 1) {

            Ent.UnidadMedidaId = responseUm[0].UnidadMedidaId;
            Ent.Precio = responseUm[0].PrecioConImpuesto;
            setValCodigoUM(responseUm[0].CodUnidad)
        }


        const ItemMoneda = OptionsMoneda.findIndex((d) => d.MonedaId === value);
        if (ItemMoneda >= 0) {

            setValCodigoMoneda(OptionsMoneda[ItemMoneda].Simbolo);
        }


    };

    const [modal, contextHolder] = Modal.useModal();
    modal;
    return (

        // <Form form={form} name="formItem" layout="vertical" autoComplete="off">
        <>

            {contextHolder}
            {contextHolderAdd}
            <Row>
                <Col span={24}>
                    <label>Categoria</label>
                </Col>
                <Col span={24}>
                    <Select
                        status={ValCategoria}
                        showSearch
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        onSearch={handleSearchCategoria}
                        value={Ent.CategoriaId === 0 ? null : Ent.CategoriaId}
                        key={Ent.CategoriaId}
                        onChange={onChangeCategoria}
                    >
                        {optionsCategoria.map((categoria) => (
                            <Select.Option key={categoria.ListaId} value={categoria.ListaId}>
                                {categoria.Nombre}
                            </Select.Option>

                        ))}
                    </Select>

                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <label>Producto</label>
                </Col>
                <Col span={24}>
                    <Select
                        status={ValProducto}
                        showSearch
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px', wordWrap: "break-word" }}
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        onSearch={handleSearchProducto}
                        value={Ent.MercaderiaId === 0 ? null : Ent.MercaderiaId}
                        key={Ent.NomProducto}
                        onChange={onChangeProducto}
                    >
                        {optionsProducto.map((Producto) => (
                            <Select.Option key={Producto.MercaderiaId} value={Producto.MercaderiaId}>
                                {Producto.Nombre}
                            </Select.Option>
                        ))}
                    </Select>

                </Col>
            </Row>




            <Row>
                <Col span={6}>

                    <Row>
                        <Col span={24}>
                            <label>Moneda</label>
                        </Col>
                        <Col span={24}>

                            <Select
                                allowClear
                                status={ValUnidadMedida}
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                defaultActiveFirstOption={false}
                                filterOption={false}
                                value={Ent.MonedaId === 0 ? null : Ent.MonedaId}
                                key={Ent.MonedaId}
                                onChange={onChangeMoneda}
                            >
                                {OptionsMoneda.map((UM) => (
                                    <Select.Option key={UM.MonedaId} value={UM.MonedaId}>
                                        {UM.CodMoneda}
                                    </Select.Option>
                                ))}
                            </Select>

                        </Col>
                    </Row>


                </Col>

                <Col span={6}>

                    <Row>
                        <Col span={24}>
                            <label>UM</label>
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
                                        {UM.CodUnidad}
                                    </Select.Option>
                                ))}
                            </Select>

                        </Col>
                    </Row>


                </Col>
                <Col span={12}>


                    <Row>
                        <Col span={24}>
                            <label>Precio</label>
                        </Col>
                        <Col span={24}>
                            <Space direction="vertical" size="middle">

                                <Space.Compact>
                                    <Input
                                        readOnly={true}
                                        status={ValDato}
                                        type="text"
                                        style={{ width: '30%', marginTop: '5px', marginBottom: '10px' }}
                                        name="Nombre"
                                        value={ValCodigoMoneda}
                                    />
                                    <Input
                                        // suffix={ValCodigoUM}
                                        status={ValSolicitar}
                                        type="number"
                                        name="CantidadSolicitado"
                                        style={{ width: '70%', marginTop: '5px', marginBottom: '10px' }}
                                        onChange={onChange}
                                        value={Ent.Precio === null ? 0 : Ent.Precio}
                                    />


                                </Space.Compact>
                            </Space>

                        </Col>
                    </Row>


                </Col>
            </Row>


            <Row>
                <Col span={12}>

                    <Row>
                        <Col span={24}>
                            <label>Stock</label>
                        </Col>
                        <Col span={24}>
                            <Space direction="vertical" size="middle">

                                <Space.Compact>
                                    <Input
                                        readOnly={true}
                                        type="number"
                                        name="Stock"
                                        style={{ marginTop: '5px', marginBottom: '10px' }}
                                        // onChange={onChangeText}
                                        value={Ent.Stock === null ? 0 : Ent.Stock}
                                    />
                                    <Input
                                        readOnly={true}
                                        status={ValDato}
                                        type="text"
                                        style={{ width: '30%', marginTop: '5px', marginBottom: '10px' }}
                                        name="Nombre"
                                        value={ValCodigoUM}
                                    />
                                </Space.Compact>
                            </Space>
                        </Col>
                    </Row>


                </Col>
                <Col span={12}>


                    <Row>
                        <Col span={24}>
                            <label>Solicitar</label>
                        </Col>
                        <Col span={24}>
                            <Space direction="vertical" size="middle">

                                <Space.Compact>
                                    <Input
                                        // suffix={ValCodigoUM}
                                        status={ValSolicitar}
                                        type="number"
                                        name="CantidadSolicitado"
                                        style={{ width: '70%', marginTop: '5px', marginBottom: '10px' }}
                                        onChange={onChange}
                                        value={Ent.CantidadSolicitado === null ? 0 : Ent.CantidadSolicitado}
                                    />

                                    <Input
                                        readOnly={true}
                                        status={ValDato}
                                        type="text"
                                        style={{ width: '30%', marginTop: '5px', marginBottom: '10px' }}
                                        name="Nombre"
                                        value={ValCodigoUM}
                                    />
                                </Space.Compact>
                            </Space>

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




