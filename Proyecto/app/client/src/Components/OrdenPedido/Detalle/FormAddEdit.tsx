import React, { useState, useEffect } from "react";
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity'
import OrdenPedidoDetalleService from '../../../Service/OrdenPedidoService';
import { Button, Form, Input } from 'antd';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModelDetalle } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'
import { now } from "moment";

const AddEditForm: React.FC<PropsModelDetalle> = (props) => {
    const sOrdenPedidoDetalle = new OrdenPedidoDetalleService();

    const initialOrdenPedidoDetalle = new OrdenPedidoDetalleEntity();
    const [Ent, setEnt] = useState<OrdenPedidoDetalleEntity>(initialOrdenPedidoDetalle);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [form] = Form.useForm();
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
        Ent.NomProducto = 'dad';
        Ent.Action = 1;
        Ent.CantidadAtendido = 0;
        Ent.CantidadFaltante = 0;
        Ent.CantidadSolicitado = 2;
        Ent.CodUsuario = 'adm'
        Ent.FechaRegistro = new Date();
        props.addItemToState(Ent);
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
        props.toggle();
    };

    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.OrdenPedidoDetalleId > 0 ? 3 : 1;
        // setFlaState(updatedPerson.OrdenPedidoDetalleId > 0);
        // setEnt(updatedPerson);
    }, []);

    return (

        <Form form={form} name="formItem" layout="vertical" autoComplete="off">
            <Form.Item label="NomProducto" rules={[{ required: false }]}>
                <Input
                    status={ValDato}
                    type="text"
                    name="NomProducto"
                    onChange={onChange}
                    value={Ent.NomProducto === null ? "" : Ent.NomProducto}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    onClick={submitFormAdd}
                    style={ButtonAcceptModel}>
                    Aceptar
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AddEditForm;




