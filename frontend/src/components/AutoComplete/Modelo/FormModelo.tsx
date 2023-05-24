import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Modals/Modal";
import DataTable from "./Tables/DataTable";
import { IModelo } from './IModelo'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiEdit2Fill } from 'react-icons/ri';
import './Modelo.css'
// import { CSVLink } from "react-csv";
function FormModelo(props: IModelo) {
  const [items, setItems] = useState<IModelo[]>([]);

  const [variablegetModelos, variablesetModelos] = useState<IModelo[]>([])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);







  const API = import.meta.env.VITE_REACT_API_URL

  const getItems = () => {
    try {

      fetch(`${API}/api/General/Get_ModeloItems/`)
        .then((response) => response.json())
        .then((items) => setItems(items))
        .catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e)
    }
  };

  const addItemToState = (item: IModelo) => {
    setItems([...items, item]);
  };

  const updateState = (item: IModelo) => {
    const itemIndex = items.findIndex((data) => data.ModeloId === item.ModeloId);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.ModeloId !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container className="App">

      {/* <Row>
        <Col >
          <h1 style={{ margin: "15px 0" }}>Modelo </h1>
        </Col>
     
      </Row> */}

      {/* <Row>
        <Col >
          <h2>Catalogo <b>Modelo</b></h2>
        </Col>
        <Col xs="1">
          <ModalForm buttonLabel=""
            addItemToState={addItemToState} />
        </Col>
      </Row> */}

      <Row>
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>* <b>Modelo</b></h2>
            </div>
            <div className="col-sm-6">
              {/* <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
              <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
            */}
              <ModalForm buttonLabel=""
            addItemToState={addItemToState} />
            </div>

          </div>
        </div>
      </Row>
      <Row>
        <Col>
          <DataTable
            DataList={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
      
    </Container>
  );
}

export default FormModelo;
