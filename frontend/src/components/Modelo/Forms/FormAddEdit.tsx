import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { IModelo } from '../IModelo'
const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
function AddEditForm(props: { item?: IModelo, addItemToState?: any, toggle?: any, updateState?: any }) {

  const [getModeloId, setModeloId] = useState(0)

  const [form, setValues] = useState({
    ModeloId: getModeloId,
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

      fetch(`${URL}/api/General/Modelo_Insert/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ModeloId: 0,
          Nombre: form.Nombre,
          CodUsuario: "Adm",
          FechaRegistro: new Date(),
          Estado: true,
          Action: 1
        })
      })
        .then(response => response.json())
        .then((item: IModelo) => {
          if (item.ModeloId > 0) {
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
    fetch(`${API}/api/General/Modelo_Insert/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ModeloId: form.ModeloId,
        Nombre: form.Nombre,
        CodUsuario: "Adm",
        FechaRegistro: new Date(),
        Estado: true,
        Action: 2
      })
    })
      .then((response) => response.json())
      .then((item: IModelo) => {
        if (item.ModeloId > 0) {
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
      const { ModeloId, Nombre } = props.item;
      // setValues({ ModeloId, Nombre });

      setValues({
        ...form,
        ModeloId, Nombre
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
