import React, { useState, useEffect } from "react";
import { MarcaEntity } from '@/Models/IMarca'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MarcaService from '@/Service/MarcaService'; 

type Props = {
    item: MarcaEntity;
    addItemToState?: any;
    toggle?: any;
    updateState?: any;
}

const AddEditForm: React.FC<Props> = (props) => {
    const marcaService = new MarcaService();

    const initialMarca = new MarcaEntity();
    const [form, setValues] = useState<MarcaEntity>(initialMarca);
    const [FlaState, setFlaState] = useState<Boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value.toUpperCase()
        });
    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (form.Nombre === '') {
            console.log('El nombre no puede ser un número');
            return;
        }

        const savedItem = await marcaService.saveItem(form);
        if (savedItem) {
            if (FlaState) props.updateState(savedItem);
            else props.addItemToState(savedItem);

            props.toggle();
        }
    };

    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.MarcaId > 0 ? 3 : 1;
        setFlaState(updatedPerson.MarcaId > 0);
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
            />

            <Button variant="contained" onClick={submitFormAdd}>
                Aceptar
            </Button>
        </form>
    );
}

export default AddEditForm;






// import React, { useState, useEffect } from "react";
// import { MarcaEntity } from '@/Models/IMarca'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';

// type Props = {
//     item: MarcaEntity;
//     addItemToState?: any;
//     toggle?: any;
//     updateState?: any;
// }

// const AddEditForm: React.FC<Props> = (props) => {
//     const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
//     const initialMarca = new MarcaEntity();
//     const [form, setValues] = React.useState<MarcaEntity>(initialMarca);
//     const [FlaState, setFlaState] = React.useState<Boolean>(false);

//     const onChange = (e: any) => {
//         setValues({
//             ...form,
//             [e.target.name]: e.target.value.toUpperCase()
//         });
//     };

//     const submitFormAdd = async (e: any) => {
//         e.preventDefault();

//         if (form.Nombre === '') {
//             console.log('El nombre no puede ser un número');
//             return;
//         }

//         try {
//             const response = await axios.post(`${URL}/api/Marca/Save/`, form, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response.status == 200) {

//                 if (FlaState) props.updateState(response.data.Value)
//                 else props.addItemToState(response.data.Value);

//                 props.toggle();
//             } else {
//                 console.log('La operación de guardado falló');
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         const updatedPerson = props.item;
//         updatedPerson.Action = updatedPerson.MarcaId > 0 ? 3 : 1;
//         setFlaState(updatedPerson.MarcaId > 0)
//         setValues(updatedPerson);
//         console.log(form)
//     }, []);

//     return (
//         <form >

//             <TextField
//                 type="text"
//                 size="small"
//                 id="outlined-basic"
//                 sx={{ width: 320 }}
//                 name="Nombre"
//                 onChange={onChange}
//                 value={form.Nombre === null ? "" : form.Nombre}
//                 margin="normal"
//                 label="Nombre"
//                 variant="outlined" />

//             <Button variant="contained" onClick={submitFormAdd}>Aceptar</Button>

//         </form>
//     );
// }

// export default AddEditForm;
