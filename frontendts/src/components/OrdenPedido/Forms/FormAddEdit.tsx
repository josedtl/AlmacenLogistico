import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const API = import.meta.env.VITE_REACT_API_URL
import { IOrdenPedidoDetalle } from '../../../Models/OrdenPedido/IOrdenPedidoDetalle'

function AddEditForm(props: { item?: IOrdenPedidoDetalle, addItemToState?: any, toggle?: any, updateState?: any }) {

  const [getModeloId, setModeloId] = useState(0)

  const [form, setValues] = useState<IOrdenPedidoDetalle>({
    OrdenPedidoDetalleId: 0,
    OrdenPedidoId: 0,
    ProductoId: 0,
    TipoRequerimientoId: 0,
    CantidadRequerida: 0,
    CantidadFaltante: 0,
    CantidadAtentida: 0,
    FlaAtendido: false,
    Nombre: ''

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

      fetch(`${API}/api/General/Modelo_Insert/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          OrdenPedidoDetalleId: 0,
          OrdenPedidoId: 0,
          ProductoId: 0,
          TipoRequerimientoId: 0,
          CantidadRequerida: 0,
          CantidadFaltante: 0,
          CantidadAtentida: 0,
          FlaAtendido: false
        })
      })
        .then(response => response.json())
        .then((item: IOrdenPedidoDetalle) => {
          if (item.OrdenPedidoDetalleId > 0) {
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
        ModeloId: form.OrdenPedidoDetalleId,
        Nombre: form.Nombre,
        CodUsuario: "Adm",
        FechaRegistro: new Date(),
        Estado: true,
        Action: 2
      })
    })
      .then((response) => response.json())
      .then((item: IOrdenPedidoDetalle) => {
        if (item.OrdenPedidoDetalleId > 0) {
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
      const { OrdenPedidoDetalleId, Nombre } = props.item;
      // setValues({ ModeloId, Nombre });

      setValues({
        ...form,
        OrdenPedidoDetalleId, Nombre
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
      </FormGroup>
      <div className="row">
        <div className="col">
          <FormGroup>
            <Label for="Nombre">Tipo de Requerimiento</Label>
            <Input
              type="text"
              name="Nombre"
              id="Nombre"
              onChange={onChange}
              value={form.TipoRequerimientoId === null ? "" : form.TipoRequerimientoId}
            />
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <Label for="Nombre">Cantidad</Label>
            <Input
              type="text"
              name="Nombre"
              id="Nombre"
              onChange={onChange}
              value={form.Nombre === null ? "" : form.Nombre}
            />
          </FormGroup>
        </div>
      </div>
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

      <Button className="btn btn-dark btn-sm btn-block" >Aceptar</Button>
    </Form>
  );
}

export default AddEditForm;
