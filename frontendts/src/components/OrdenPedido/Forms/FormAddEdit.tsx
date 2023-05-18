import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const API = import.meta.env.VITE_REACT_API_URL
import { IOrdenPedidoDetalle } from '../../../Models/OrdenPedido/IOrdenPedidoDetalle'
import { AutoCompleteProductoCont } from "../../AutoComplete/AutoCompleteProductoCont";
import { ITipoRequerimiento } from '../../../Models/General/ITipoRequerimiento'

function AddEditForm(props: { item?: IOrdenPedidoDetalle, addItemToState?: any, toggle?: any, updateState?: any }) {

  const [getModeloId, setModeloId] = useState(0)
  const [GetProductoId, setProductoId] = useState<number>(0);
  const [GetTextNomProducto, SetTextNomProducto] = useState<string>('');
  const [getDataTipoRequerimento, setDataTipoRequerimento] = useState<ITipoRequerimiento[]>([]);
  const [GetValueTipoRequerimientoId, SetValueTipoRequerimientoId] = useState<number>(0);
  const [GetCantidadRequerida, SetCantidadRequerida] = useState<number>(0);

  const [form, setValues] = useState<IOrdenPedidoDetalle>({
    OrdenPedidoDetalleId: 0,
    OrdenPedidoId: 0,
    ProductoId: 0,
    TipoRequerimientoId: 0,
    CantidadRequerida: 0,
    CantidadFaltante: 0,
    CantidadAtentida: 0,
    FlaAtendido: false,
    Nombre: '',
    Cont: 0

  });

  const onChange = (e: any) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const items = getDataTipoRequerimento.map((item) => {
    return (
      <option value={item.TipoRequerimientoId}>{item.Nombre}</option>
    );

  });

  const getItemTipoRequerimiento = async () => {
    try {

      fetch(`${API}/api/General/Get_TipoRequerimientoItems/`)
        .then((response) => response.json())
        .then((items) => setDataTipoRequerimento(items))
        .catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e)
    }

  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    // setSelectedOption(value);
    SetValueTipoRequerimientoId(Number(value))
    console.log(event.target.textContent);
  };
  const submitFormAdd = (e: any) => {
    console.log(props.item);
    e.preventDefault();
    let errores: string[] = []
    if (form.Nombre === '') errores.push('El nombre no puede ser un número')

    // if (errores.length === 0) {

    //   fetch(`${API}/api/General/Modelo_Insert/`, {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({

    //       OrdenPedidoDetalleId: 0,
    //       OrdenPedidoId: 0,
    //       ProductoId: 0,
    //       TipoRequerimientoId: 0,
    //       CantidadRequerida: 0,
    //       CantidadFaltante: 0,
    //       CantidadAtentida: 0,
    //       FlaAtendido: false
    //     })
    //   })
    //     .then(response => response.json())
    //     .then((item: IOrdenPedidoDetalle) => {
    //       if (item.OrdenPedidoDetalleId > 0) {
    //         props.addItemToState(item)
    //         props.toggle()
    //       } else {
    //         return
    //       }

    //     })
    //     .catch(err => console.log(err))

    //   }
    setValues({
      ...form,
      OrdenPedidoDetalleId: 0, Nombre: '15'
    });
    form.Nombre = GetTextNomProducto;
    // form.CantidadRequerida = GetTextNomProducto;
    props.addItemToState(form);
    props.toggle();
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

    getItemTipoRequerimiento();
  }, [props.item]);

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>


        <AutoCompleteProductoCont
          Id={setProductoId}
          placeholder={"Ingrese Producto"}
          headerItem={"Nombre"}
          GetText={GetTextNomProducto}
          SetTextNom={SetTextNomProducto}
        />

      </FormGroup>
      <div className="row">
        <div className="col">
          <FormGroup>
            <Label
              className="font-weight-bold"
              for="exampleSelect">
              Unidad de Medida
            </Label>
            <select className="form-control"
              value={GetValueTipoRequerimientoId}
              onChange={selectChange} >
              <option value={0} selected disabled >
                Seleccionar ---------------------------------------------------------------
              </option>
              {items}



            </select>
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <Label for="Nombre">Cantidad</Label>
            <Input
              type="number"
              name="CantidadRequerida"
              id="CantidadRequerida"
              onChange={onChange}
              value={form.CantidadRequerida === null ? "" : form.CantidadRequerida}
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
