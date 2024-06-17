import React, { useState, useEffect } from "react";
import { OrdenCompraDetalleEntity } from '../../../Models/OrdenCompraDetalleEntity'
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { Select, Button, Col, Row, Space, Input, Form, message, Radio } from 'antd';
import MerListaService from '../../../Service/MerListaService';
import MercaderiaService from '../../../Service/MercaderiaService';
import { MerListaEntity } from '../../../Models/MerListaEntity';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import DataTableOrden from '../OrdenCompraDetalle/DataTableOrden';
import DataTableItem from '../OrdenCompraDetalle/DataTableItem';
import type { RadioChangeEvent } from 'antd';
import { MercaderiaItemOPModel } from "../../../Models/MercaderiaEntity";
import { EntDatoModel } from "../../../Models/EntDatoEntity";
import { OrdenPedidoEntity } from "../../../Models/OrdenPedidoEntity";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'

import OrdenPedidoService from '../../../Service/OrdenPedidoService';

const AddEditForm: React.FC<PropsModel> = (props) => {

    const initialOrdenCompraDetalle = new OrdenCompraDetalleEntity();
    const [Ent, setEnt] = useState<OrdenCompraDetalleEntity>(initialOrdenCompraDetalle);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [ValDato, setValDato] = useState<InputStatus>('');
    const [messageAdd, contextHolderAdd] = message.useMessage();
    const [FlaNumero, setNumeroState] = useState<number>(0);

    const sOrdenPedido = new OrdenPedidoService();
    const [ValSolicitar, setValSolicitar] = useState<InputStatus>('');

    const [items, setItems] = useState<OrdenPedidoEntity[]>([]);
    const [itemsItem, setItemsItem] = useState<OrdenPedidoEntity[]>([]);

    const [selectedOption, setSelectedOption] = useState(1);
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValDato('');
    //     setValSolicitar('');
    //     setEnt({
    //         ...Ent,
    //         [e.target.name]: e.target.value.toUpperCase()
    //     });

    // };

    const onChange = (e: RadioChangeEvent) => {
        setSelectedOption(e.target.value);

    };



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
                setEnt(new OrdenCompraDetalleEntity());
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
    const [ValCodigoUM, setValCodigoUM] = useState<string>('');
    const sMerLista = new MerListaService();
    const sMercaderiaService = new MercaderiaService();
    const [ValProducto, setValProducto] = useState<InputStatus>('');

    selectedPRoducto;
    selectedCategoria;
    ValCategoria;
    FlaState;
    // useEffect(() => {
    //     const updatedPerson = props.item;
    //     updatedPerson.Action = updatedPerson.OrdenCompraDetalleId > 0 ? 3 : 1;
    //     setFlaState(updatedPerson.OrdenCompraDetalleId > 0);
    //     setEnt(updatedPerson);
    // }, []);



    const [optionsCategoria, setOptionsCategoria] = useState<MerListaEntity[]>([]);
    const [optionsProducto, setOptionsProducto] = useState<MercaderiaItemOPModel[]>([]);

    const [optionsOrden, setOptionsOrden] = useState<OrdenCompraDetalleEntity[]>([]);


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
            setValCodigoUM(resp[0].CodigoUM);
            Ent.Stock = resp[0].Stock
            Ent.NomProducto = resp[0].Nombre;
            Ent.MercaderiaId = resp[0].MercaderiaId;
            Ent.CodigoUM = resp[0].CodigoUM;

            console.log(resp);

        } catch (error) {
            console.error('Error al buscar categorías:', error);
        }


        // setValCategoria('');

    };
    useEffect(() => {
        // setEnt(new OrdenCompraDetalleEntity());
        console.log('FormEdit')
        getItems();
    }, []);


    const getItems = async () => {

        const updatedItem = props.item;

        const main = await sOrdenPedido.GetItemOPMain();
        
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



        updatedItem.Action = updatedItem.OrdenCompraDetalleId > 0 ? ProcessActionEnum.Update : ProcessActionEnum.Add;
        setFlaState(updatedItem.key === '');
        setEnt(updatedItem);
    }
    const filterItems = items.filter(d => d.Action != ProcessActionEnum.Delete);

    const filterItemsItem = itemsItem.filter(d => d.Action != ProcessActionEnum.Delete);

    const [disabled, setDisabled] = useState(false);

    const TipoEntidad = () => {
        if (selectedOption == 0) {

            return <DataTableOrden DataList={filterItems} EsTabla={disabled} />

        }
        else {
            return <DataTableItem DataList={filterItemsItem} EsTabla={disabled} />
        }

    }




    return (

        <>

            <Row>
                <Col span={24}>
                    <Row>

                        <Radio.Group
                            style={{ marginTop: '5px', marginBottom: '10px' }}>
                            <Radio value={0} onChange={onChange}   >Por Orden</Radio>
                            <Radio value={1} onChange={onChange}   >Por Item</Radio>
                        </Radio.Group>

                    </Row>
                </Col>

            </Row>
            <Col xs={24} >
                {TipoEntidad()}
                {/* <DataTableOrden DataList={filterItems} EsTabla={disabled} /> */}

            </Col>

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




