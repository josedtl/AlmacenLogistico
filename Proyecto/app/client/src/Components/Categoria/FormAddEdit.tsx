import React, { useState, useEffect } from "react";
import { CategoriaEntity } from '../../Models/CategoriaEntity'
import CategoriaService from '../../Service/CategoriaService';
import { Button, Form, Input} from 'antd';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
type Props = {
    item: CategoriaEntity;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    const sCategoria = new CategoriaService();

    const initialCategoria = new CategoriaEntity();
    const [Ent, setEnt] = useState<CategoriaEntity>(initialCategoria);
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
        if (Ent.Nombre === '') {
            setValDato('error');
            return;
        }
        const savedItem = await sCategoria.saveItem(Ent);
        if (savedItem) {
            if (FlaState)
            {
                props.updateState(savedItem);
                setEnt(new CategoriaEntity());
            }
            else 
            {
                props.addItemToState(savedItem);
                setEnt(new CategoriaEntity());
            }
            props.toggle();
        }
    };

    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.CategoriaId > 0 ? 3 : 1;
        setFlaState(updatedPerson.CategoriaId > 0);
        setEnt(updatedPerson);
    }, []);

    return (

        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item label="Nombre" rules={[{ required: false }]}>
                <Input
                status={ValDato}
                    type="text"
                    name="Nombre"
                    onChange={onChange}
                    value={Ent.Nombre === null ? "" : Ent.Nombre}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    onClick={submitFormAdd}
                    style={{ float: 'right', background: '#034078', color: "white", }}>
                    Aceptar
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AddEditForm;




