import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { Select, Button, Col, Row, Space, Input, Form } from 'antd';
import GeneralService from '../../../Service/GeneralService';
import { CategoriaEntity } from '../../../Models/CategoriaEntity';
import { ProductoEntity } from "../../../Models/ProductoEntity";
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
const AddEditForm: React.FC<PropsModel> = (props) => {

    const initialOrdenPedidoDetalle = new OrdenPedidoDetalleEntity();
    const [Ent, setEnt] = useState<OrdenPedidoDetalleEntity>(initialOrdenPedidoDetalle);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [ValDato, setValDato] = useState<InputStatus>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValDato('');
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {

            console.log("Ejecutando");
            Ent.UnidadMedidaId = 1;
            Ent.FechaRegistro = new Date();

            if (Ent.key === '') {
                Ent.key = generarGuid();
                props.addItemToState(Ent);
            }
            else {
                props.updateState(Ent);
            }
            // setEnt(new OrdenPedidoDetalleEntity());
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
    const sGeneral = new GeneralService();
    selectedPRoducto;
    selectedCategoria;
    ValCategoria;
    // useEffect(() => {
    //     const updatedPerson = props.item;
    //     updatedPerson.Action = updatedPerson.OrdenPedidoDetalleId > 0 ? 3 : 1;
    //     setFlaState(updatedPerson.OrdenPedidoDetalleId > 0);
    //     setEnt(updatedPerson);
    // }, []);
    const [optionsCategoria, setOptionsCategoria] = useState<CategoriaEntity[]>([]);
    const [optionsProducto, setOptionsProducto] = useState<ProductoEntity[]>([]);
    const handleSearchCategoria = async (value: string) => {
        try {
            const responseCategoria = await sGeneral.GetCategoriaItemLike(value);
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
            const responseProducto = await sGeneral.GetProductoItemLikeOP(value, Ent.CategoriaId);
            setOptionsProducto(responseProducto);
        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }
    };
    const onChangeProducto = async (value: number, Itemdata: any) => {
        try {
            Ent.ProductoId = value;
            setSelectedProducto(value)
            console.log(Itemdata);


            const resp = await sGeneral.GetProductoItemOP(value);
            setValCodigoUM(resp[0].CodigoUM);
            Ent.Stock = resp[0].Stock
            Ent.NomProducto = resp[0].NomProducto;
            Ent.ProductoId = resp[0].ProductoId;
            Ent.CodigoUM = resp[0].CodigoUM;

            console.log(Ent);
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
        console.log(updatedItem);

        if (updatedItem.CategoriaId > 0) {
            const responseCategoria = await sGeneral.GetCategoriaItem(updatedItem.CategoriaId);
            setOptionsCategoria(responseCategoria);
        }
        if (updatedItem.ProductoId > 0) {

            const responseProducto = await sGeneral.GetProductoItemOP(updatedItem.ProductoId);
            setOptionsProducto(responseProducto);

            setValCodigoUM(responseProducto[0].CodigoUM);
        }

        updatedItem.Action = updatedItem.OrdenPedidoDetalleId > 0 ? ProcessActionEnum.Update : ProcessActionEnum.Add;
        console.log(updatedItem);
        setFlaState(updatedItem.key === '');
        setEnt(updatedItem);
        console.log(FlaState);
    }



    return (

        // <Form form={form} name="formItem" layout="vertical" autoComplete="off">
        <>

            <Row>
                <Col span={24}>
                    <label>Categoria</label>
                </Col>
                <Col span={24}>
                    <Select
                        // status={ValCategoria}
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
                            <Select.Option key={categoria.CategoriaId} value={categoria.CategoriaId}>
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
                        // status={ValCategoria}
                        showSearch
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        onSearch={handleSearchProducto}
                        value={Ent.ProductoId === 0 ? null : Ent.ProductoId}
                        key={Ent.NomProducto}
                        onChange={onChangeProducto}
                    >
                        {optionsProducto.map((Producto) => (
                            <Select.Option key={Producto.ProductoId} value={Producto.ProductoId}>
                                {Producto.NomProducto}
                            </Select.Option>
                        ))}
                    </Select>

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
                                        type="number"
                                        name="Stock"
                                        style={{ marginTop: '5px', marginBottom: '10px' }}
                                        // onChange={onChangeText}
                                        value={Ent.Stock === null ? "" : Ent.Stock}
                                    />
                                    <Input
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
                                        type="number"
                                        name="CantidadSolicitado"
                                        style={{ width: '70%', marginTop: '5px', marginBottom: '10px' }}
                                        onChange={onChange}
                                        value={Ent.CantidadSolicitado === null ? "" : Ent.CantidadSolicitado}
                                    />

                                    <Input
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




