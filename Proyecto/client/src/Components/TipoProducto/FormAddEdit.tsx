import React, { useState, useEffect } from "react";
import { TipoProductoEntity } from '@/Models/TipoProductoEntity'
import TipoProductoService from '@/Service/TipoProductoService';
import { Button, Form, Input} from 'antd';

type Props = {
    item: TipoProductoEntity;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    const sTipoProducto = new TipoProductoService();

    const initialTipoProducto = new TipoProductoEntity();
    const [Ent, setEnt] = useState<TipoProductoEntity>(initialTipoProducto);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [error, setError] = useState(false);
    const [form] = Form.useForm();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Ejecutado")
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

        setError(Ent.Nombre.length < 3);
    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(Ent.Nombre);

        if (Ent.Nombre === '') {
            console.log('El nombre no puede ser un número');
            setError(Ent.Nombre.length < 3);
            return;
        }

        const savedItem = await sTipoProducto.saveItem(Ent);
        if (savedItem) {
            if (FlaState) props.updateState(savedItem);
            else props.addItemToState(savedItem);

            props.toggle();
        }


    };
   

    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.TipoProductoId > 0 ? 3 : 1;
        setFlaState(updatedPerson.TipoProductoId > 0);
        setEnt(updatedPerson);
    }, []);

    return (

        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item label="Nombre" rules={[{ required: false }]}>
                <Input
                    type="text"
                    name="Nombre"
                    onChange={onChange}
                    value={Ent.Nombre === null ? "" : Ent.Nombre}
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




