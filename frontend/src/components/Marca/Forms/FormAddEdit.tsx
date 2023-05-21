import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// const API = import.meta.env.VITE_REACT_API_URL
import { IMarca } from '../IMarca'
function AddEditForm(props: { item?: IMarca, addItemToState?: any, toggle?: any, updateState?: any }) {
  // const URL = process.env.VITE_REACT_API_URL;
  const [getMarcaId, setMarcaId] = useState(0)
  const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
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

      fetch(`${URL}/api/General/Marca_Insert/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          MarcaId: 0,
          Nombre: form.Nombre,
          CodUsuario: "Adm",
          FechaRegistro: new Date(),
          Estado: true,
          Action: 1
        })
      })
        .then(response => response.json())
        .then((item: IMarca) => {
          if (item.MarcaId > 0) {
            props.addItemToState(item)
            props.toggle()
          } else {
            return
          }

        })
        .catch(err => console.log(err))



      // props.addItemToState(form);
      props.toggle();
    }
  };

  const submitFormEdit = (e: any) => {
    e.preventDefault();
    fetch(`${URL}/api/General/Marca_Insert/`, {
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
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>

        <Label for="Nombre">Nombre</Label>
        <Input
          type="text"
          name="Nombre"
          id="Nombre"
          onChange={onChange}
          value={form.Nombre === null ? "" : form.Nombre}
          
        />
        {/* </FormGroup>
      <FormGroup>
        <Label for="last">Last Name</Label>
        <Input
          type="text"
          name="last"
          id="last"
          onChange={onChange}
          value={form.last === null ? "" : form.last}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          onChange={onChange}
          value={form.phone === null ? "" : form.phone}
          placeholder="ex. 555-555-5555"
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          onChange={onChange}
          value={form.location === null ? "" : form.location}
          placeholder="City, State"
        /> */}
        {/* </FormGroup>
      <FormGroup>
        <Label for="hobby">Hobby</Label>
        <Input
          type="text"
          name="hobby"
          id="hobby"
          onChange={onChange}
          value={form.hobby}
        /> */}
      </FormGroup>
      <Button className="btn btn-dark btn-sm btn-block" >Aceptar</Button>
    </Form>
  );
}

export default AddEditForm;
