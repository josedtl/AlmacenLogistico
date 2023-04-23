import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Modals/Modal";
import DataTable from "./Tables/DataTable";
import { IMarca } from '../components/IMarca'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import { CSVLink } from "react-csv";
function Ejemplo(props: IMarca) {
  const [items, setItems] = useState<IMarca[]>([]);

  const [variablegetMarcas, variablesetMarcas] = useState<IMarca[]>([])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);







  const API = import.meta.env.VITE_REACT_API_URL

  const getItems = () => {
    try {

      fetch(`${API}/api/General/Get_MarcaItems/`)
        .then((response) => response.json())
        .then((items) => setItems(items))
        .catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e)
    }
  };

  const addItemToState = (item: IMarca) => {
    setItems([...items, item]);
  };

  const updateState = (item: IMarca) => {
    const itemIndex = items.findIndex((data) => data.MarcaId === item.MarcaId);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.MarcaId !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container className="App">

      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>Marca</h1>
        </Col>
        <Col>
          <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} />
        </Col>
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
      <Row>
        <div>
        <Button variant="primary" onClick={handleShow} className="me-2">
   
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
      </Row>
    </Container>
  );
}

export default Ejemplo;
