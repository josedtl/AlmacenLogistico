import React, { useState, useEffect } from "react";
import { ModeloEntity } from '@/Models/ModeloEntity'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ModeloService from '@/Service/ModeloService';
import Grid from '@mui/material/Unstable_Grid2';

type Props = {
    item: ModeloEntity;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    const sModelo = new ModeloService();

    const initialModelo = new ModeloEntity();
    const [form, setValues] = useState<ModeloEntity>(initialModelo);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [error, setError] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value.toUpperCase()
        });

        setError(form.Nombre.length < 3);
    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (form.Nombre === '') {
            console.log('El nombre no puede ser un número');
            setError(form.Nombre.length < 3);
            return;
        }

        const savedItem = await sModelo.saveItem(form);
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
        setValues(updatedPerson);
    }, []);

    return (
        <form>
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
                variant="outlined"
                error={error}
                helperText={error ? 'El valor debe tener al menos 3 caracteres' : ''}
            />
            <Grid container spacing={1}>

              
                    <div style={{ flex: 1, textAlign: 'center', margin: "12px 0px 0px 0px" }}>

                        <Button variant="contained" onClick={submitFormAdd} sx={{background:'#034078'}}>
                            Aceptar
                        </Button>
                    </div>
                
            </Grid>
        </form>
    );
}

export default AddEditForm;


