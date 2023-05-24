import React, { Fragment, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

type FormElemnt = React.FormEvent<HTMLFormElement>;

interface IMarcas {
  MarcaId: number;
  Nombre: string

}

export const User = (): JSX.Element => {

  const [getName, setName] = useState('')

  const [variablegetMarcas, variablesetMarcas] = useState<IMarcas[]>([])

  const [getNameAlter, setNameAlter] = useState('')
  const [showAlter, setShowAlter] = useState(false);

  const handleCloseAlter = () => setShowAlter(false);
  const handleShowAlter = () => setShowAlter(true);
  const API = import.meta.env.VITE_REACT_API_URL


  const handleSubmit = async (e: FormElemnt) => {

    e.preventDefault();
    // await getMarcas();
  }

  const getMarcas = async () => {
    const response = await fetch(`${API}/api/General/Get_MarcaItems/`);
    const json = await response.json();

    variablesetMarcas(json)

    if (response.ok) {
      console.log(json);
    }



  };

  useEffect(() => {
    getMarcas();
  }, [])




  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-12 ">
              <input
                type="text"
                onChange={e => { setName(e.target.value) }}
                className="form-control"
                value={getName}
                placeholder="Name"
                autoFocus
              />
            </div>
          </div>
          <br />

          {/* 

                    <SaveMarca /> */}

          <Button variant="primary" className="btn btn-primary btn-block" onClick={handleShowAlter}>
            Agregar
          </Button>
          <Modal show={showAlter} onHide={handleCloseAlter}>
            <Modal.Header closeButton>
              <Modal.Title>Agregar Marca</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={getNameAlter}
                    onChange={e => { setNameAlter(e.target.value) }}
                    className="form-control"
                    placeholder="name@example.com"
                    autoFocus
                  />


                </Form.Group>

              </Form>
            </Modal.Body>
            <Modal.Footer>

              <Button variant="primary" onClick={(e) => {
                // SaveAlter()
                setShowAlter(false)
              }}>
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>


        </form>
      </div>
      <div className="col-md-8">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>

            {variablegetMarcas.map(marca => (
              <tr key={marca.MarcaId}>
                <td>{marca.MarcaId}</td>
                <td>{marca.Nombre}</td>
                <td>

                  {/* <EditarMarca data={marca} /> */}

                  <button className="btn btn-danger btn-sm btn-block">
                    Eliminar
                  </button>
                </td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>


    </div>



  )
}

export default User
