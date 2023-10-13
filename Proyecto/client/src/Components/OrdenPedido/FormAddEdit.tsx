import React, { useState, useEffect } from "react";
import { ProductoDetalleModel } from '@/Models/OrdenPedido/ProductoDetalleModel'
import ModeloService from '@/Service/ModeloService';
import { Button, Form, Input } from 'antd';

type Props = {
    item: ProductoDetalleModel;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    const sModelo = new ModeloService();

    const initialModelo = new ProductoDetalleModel();
    const [Ent, setEnt] = useState<ProductoDetalleModel>(initialModelo);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [error, setError] = useState(false);
    const [form] = Form.useForm();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Ejecutado")
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

        setError(Ent.CodUsuario.length < 3);
    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // const savedItem = await sModelo.saveItem(Ent);
     
        if (Ent) {
            if (FlaState) props.updateState(Ent);
            else props.addItemToState(Ent);

            
            props.toggle();
            console.log(Ent);
        }


    };


    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.OrdenPedidoDetalleId > 0 ? 3 : 1;
        setFlaState(updatedPerson.OrdenPedidoDetalleId > 0);
        setEnt(updatedPerson);
    }, []);

    return (

        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item label="CodUsuario" rules={[{ required: false }]}>
                <Input
                    type="text"
                    name="CodUsuario"
                    onChange={onChange}
                    value={Ent.CodUsuario === null ? "" : Ent.CodUsuario}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    onClick={submitFormAdd}
                    style={{ float: "right", background: '#034078', color: "white", }}>
                    Aceptar
                </Button>
            </Form.Item>
        </Form>


    );
}

export default AddEditForm;




