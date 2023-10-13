import React, { useState, useEffect } from "react";
import { ModeloEntity } from '@/Models/ModeloEntity'
import ModeloService from '@/Service/ModeloService';
import { Button, Form, Input} from 'antd';

type Props = {
    item: ModeloEntity;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    const sModelo = new ModeloService();

    const initialModelo = new ModeloEntity();
    const [Ent, setEnt] = useState<ModeloEntity>(initialModelo);
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

        const savedItem = await sModelo.saveItem(Ent);
        if (savedItem) {
            if (FlaState) props.updateState(savedItem);
            else props.addItemToState(savedItem);

            props.toggle();
        }


    };
   

    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.ModeloId > 0 ? 3 : 1;
        setFlaState(updatedPerson.ModeloId > 0);
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




