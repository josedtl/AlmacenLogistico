import React, { useState, useEffect } from "react";
import { CategoriaEntity } from '@/Models/CategoriaEntity'
import TextField from '@mui/material/TextField';
import CategoriaService from '@/Service/CategoriaService';
import Grid from '@mui/material/Unstable_Grid2';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';

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
    const [error, setError] = useState(false);
    const [submittable, setSubmittable] = React.useState(false);
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

        const savedItem = await sCategoria.saveItem(Ent);
        if (savedItem) {
            if (FlaState) props.updateState(savedItem);
            else props.addItemToState(savedItem);

            props.toggle();
        }


    };
    const Add = async () => {
        console.log("DAD");

        if (Ent.Nombre === '') {
            console.log('El nombre no puede ser un número');
            setError(Ent.Nombre.length < 3);
            return;
        }

        const savedItem = await sCategoria.saveItem(Ent);
        if (savedItem) {
            if (FlaState) props.updateState(savedItem);
            else props.addItemToState(savedItem);

            props.toggle();
        }

    };



    useEffect(() => {
        const updatedPerson = props.item;
        console.log(updatedPerson.CategoriaId);
        updatedPerson.Action = updatedPerson.CategoriaId > 0 ? 3 : 1;
        setFlaState(updatedPerson.CategoriaId > 0);
        setEnt(updatedPerson);
        Ent.Nombre = "dd";
        console.log(Ent.Nombre);
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

        // <form>
        //     <TextField
        //         type="text"
        //         size="small"
        //         id="outlined-basic"
        //         sx={{ width: 320 }}
        //         name="Nombre"
        //         onChange={onChange}
        //         value={form.Nombre === null ? "" : form.Nombre}
        //         margin="normal"
        //         label="Nombre"
        //         variant="outlined"
        //         error={error}
        //         helperText={error ? 'El valor debe tener al menos 3 caracteres' : ''}
        //     />
        //     <Grid container spacing={1}>


        //             <div style={{ flex: 1, textAlign: 'center', margin: "12px 0px 0px 0px" }}>

        //                 <Button variant="contained" onClick={submitFormAdd} sx={{background:'#034078'}}>
        //                     Aceptar
        //                 </Button>
        //             </div>

        //     </Grid>
        // </form>
    );
}

export default AddEditForm;




