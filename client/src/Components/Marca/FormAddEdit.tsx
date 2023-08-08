import React, { useState, useEffect } from "react";
import { IMarca } from '@/Models/IMarca'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


type Props = {
    item?: IMarca;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    // const URL = process.env.VITE_REACT_API_URL;
    const [getMarcaId, setMarcaId] = useState(0)

    const URL = "http://127.0.0.1:8000";
    const [form, setValues] = useState({
        MarcaId: getMarcaId,
        Nombre: '',
        CodUsuario: "Adm",
        FechaRegistro: new Date(),
        Estado: true,
        Action: 1
    });

    const onChange = (e: any) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value.toUpperCase()
        });
    };

    const submitFormAdd = (e: any) => {
        console.log(props.item);
        e.preventDefault();
        let errores: string[] = []
        if (form.Nombre === '') errores.push('El nombre no puede ser un número')

        if (errores.length === 0) {

            fetch(`${URL}/api/Marca/Save/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MarcaId: 0,
                    Nombre: form.Nombre,
                    CodUsuario: "Adm",
                    FechaRegistro: new Date(),
                    EstadoRegistro: true,
                    Action: 1
                })
            })
                .then(response => response.json())
                .then((item: any) => {
                    if (item.State ) {
                        props.addItemToState(item.Value)
                        props.toggle()
                    } else {
                        return
                    }

                })
                .catch(err => console.log(err))


                console.log("add");
            // props.addItemToState(form);
            props.toggle();
        }
    };

    const submitFormEdit = (e: any) => {
        e.preventDefault();
        fetch(`${URL}/api/Marca/Save/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                MarcaId: form.MarcaId,
                Nombre: form.Nombre,
                CodUsuario: "Adm",
                FechaRegistro: new Date(),
                Estado: true,
                Action: 2
            })
        })
            .then((response) => response.json())
            .then((item: IMarca) => {
                if (item.MarcaId > 0) {
                    props.updateState(item);
                    props.toggle();
                } else {
                    return
                }
            })
            .catch((err) => console.log(err));
        // props.updateState(form);
        props.toggle();
        console.log("Edit");
    };

    useEffect(() => {
        if (props.item) {
            const { MarcaId, Nombre } = props.item;
            // setValues({ MarcaId, Nombre });

            setValues({
                ...form,
                MarcaId, Nombre
            });
        }
    }, [props.item]);

    return (
        <form >

            <TextField
                type="text"
                size="small"
                id="outlined-basic"
                sx={{ width: 320 }}
                name="Nombre"
                onChange={onChange}
                value={form.Nombre === null ? "" : form.Nombre}
                margin="normal"
                label="Nombre"
                variant="outlined" />

            <Button variant="contained" onClick={submitFormAdd}>Agregar Item</Button>

        </form>
    );
}

export default AddEditForm;
