import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const API = process.env.REACT_APP_API;


const deleteMarca = async (id) => {
    const res = await fetch(`${API}/api/General/Marca_Delete/${id}`,
        { method: 'GET' });

    // await getMarcas();


}


export const User = () => {

    const [getName, setName] = useState('')

    const [variablegetMarcas, variablesetMarcas] = useState([])

    const handleSubmit = async (e) => {

        e.preventDefault();

        //     console.log(API+'/api/General/Get_MarcaItems'); 
        // console.log('API/api/General/Get_MarcaItems/');
    }



    function SaveMarca() {
        const [getNamev, setNamev] = useState('')
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const Save = async () => {
            fetch(`${API}/api/General/Marca_Insert/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MarcaId: 0,
                    Nombre: getNamev,
                    CodUsuario: "Adm",
                    FechaRegistro: new Date(),
                    Estado: true,
                    Action: 1
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
            setShow(false)
            await getMarcas()
        }
        const Get = async () => {
            await getMarcas()
        }

        console.log(getNamev)
        return (



            <>
                <Button variant="primary" className="btn btn-primary btn-block" onClick={handleShow}>
                    Agregar
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar Marca</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={getNamev}
                                    onChange={e => { setNamev(e.target.value) }}
                                    className="form-control"
                                    placeholder="name@example.com"
                                    autoFocus
                                />


                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={e => {
                            Save();
                            Get();
                        }}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    function EditarMarca({ data },) {
        const [getNameupdate, setNameupdate] = useState(data.Nombre)
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const update = async () => {
            fetch(`${API}/api/General/Marca_Insert/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MarcaId: data.MarcaId,
                    Nombre: getNameupdate,
                    CodUsuario: "Adm",
                    FechaRegistro: new Date(),
                    Estado: true,
                    Action: 2
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
            setShow(false)
            await getMarcas()
        }
        // setNameupdate('')
        return (
            <>
                <Button variant="primary" className="btn btn-secondary btn-sm btn-block" onClick={handleShow}>
                    Editar
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Marca</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={getNameupdate}
                                    onChange={e => { setNameupdate(e.target.value) }}
                                    className="form-control"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={e => {
                            update();
                        }}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

  
    const getMarcas = async () => {
        try {
            const res = await fetch(`${API}/api/General/Get_MarcaItems/`);

            const data = await res.json();
            variablesetMarcas(data)

        }
        catch (e) {
            console.log(e)
        }
    }

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



                    <SaveMarca />
                    {/* <button className="btn btn-primary btn-block">
                        Create
                    </button> */}
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

                                    <EditarMarca data={marca} />

                                    <button className="btn btn-danger btn-sm btn-block"
                                        onClick={(e) => deleteMarca(marca.MarcaId)}>
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