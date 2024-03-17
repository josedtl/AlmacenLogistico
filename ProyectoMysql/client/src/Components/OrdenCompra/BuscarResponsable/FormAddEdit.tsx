import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import {  Select, Button, Col, Row,Space, Input, Form } from 'antd';
import GeneralService from '../../../Service/GeneralService';
import { CategoriaEntity } from '../../../Models/CategoriaEntity';
import { ProductoEntity } from "../../../Models/ProductoEntity";
const AddEditForm: React.FC<PropsModel> = (props) => {

    const initialOrdenPedidoDetalle = new OrdenPedidoDetalleEntity();
    const [Ent, setEnt] = useState<OrdenPedidoDetalleEntity>(initialOrdenPedidoDetalle);
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
        if (Ent.NomProducto === '') {
            setValDato('error');
            return;
        }
        Ent.FechaRegistro = new Date();
        props.addItemToState(Ent);
        setEnt(new OrdenPedidoDetalleEntity());
        props.toggle();
        // const savedItem = await sOrdenPedidoDetalle.saveItem(Ent);
        // if (savedItem) {
        //     if (FlaState)
        //     {
        //         props.updateState(savedItem);
        //     }
        //     else 
        //     {
        //         props.addItemToState(savedItem);
        //     }
        //     props.toggle();
        // }
    };
    const sGeneral = new GeneralService();
    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.OrdenPedidoDetalleId > 0 ? 3 : 1;
        setEnt(updatedPerson);
    }, []);
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
        Ent.CategoriaId = value;
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
            console.log(Itemdata);


            const resp = await sGeneral.GetProductoItemOP(value);
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
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.CategoriaId > 0 ? 3 : 1;
        setEnt(updatedPerson);
        setEnt(new OrdenPedidoDetalleEntity);
    }, []);

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
                            <Input
                                type="number"
                                name="Stock"
                                style={{ marginTop: '5px', marginBottom: '10px' }}
                                // onChange={onChangeText}
                                value={Ent.Stock === null ? "" : Ent.Stock}
                            />
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
                                        // value={ValCodigoUM}
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




