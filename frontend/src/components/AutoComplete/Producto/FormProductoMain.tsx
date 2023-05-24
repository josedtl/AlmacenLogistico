import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./Tables/DataTable";
import { IProductoMain } from '../../Models/Producto/IProductoMain'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiEdit2Fill } from 'react-icons/ri';
import './Producto.css'
import { Link } from "react-router-dom";
import { BsPlusSquareFill } from "react-icons/bs";
// import { CSVLink } from "react-csv";
function Ejemplo(props: IProductoMain) {
  const [items, setItems] = useState<IProductoMain[]>([]);

  const [variablegetMarcas, variablesetMarcas] = useState<IProductoMain[]>([])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);







  const API = import.meta.env.VITE_REACT_API_URL

  const getItems = () => {
    try {

      fetch(`${API}/api/Producto/Get_ProductoMainItems/`)
        .then((response) => response.json())
        .then((items) => setItems(items))
        .catch((err) => console.log(err));



      console.log(items);
    }
    catch (e) {
      console.log(e)
    }
  };

  const addItemToState = (item: IProductoMain) => {
    setItems([...items, item]);
  };

  const updateState = (item: IProductoMain) => {
    const itemIndex = items.findIndex((data) => data.ProductoId === item.ProductoId);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.ProductoId !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container className="App">

      {/* <Row>
        <Col >
          <h1 style={{ margin: "15px 0" }}>Marca </h1>
        </Col>
     
      </Row> */}

      {/* <Row>
        <Col >
          <h2>Catalogo <b>Marca</b></h2>
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
              <h2>* <b>Producto</b></h2>
            </div>
            <div className="col-sm-6">

            {/* <a href="#addEmployeeModal"
  style={{ float: "right", width: "120px"}}
className="btn btn-success" data-toggle="modal"><i > <BsPlusSquareFill /></i> <span>Agregar</span></a> */}
              <Link className="nav-item nav-link" to="/Producto/FormProducto/0">

                <Button
                  className="btn btn-success"
                  color="warning"

                >       <BsPlusSquareFill /></Button>




              </Link>

            </div>

          </div>
        </div>
      </Row>
      <Row>
        <Col>
          <DataTable
            DataList={items}
          />
        </Col>
      </Row>

    </Container>
  );
}

export default Ejemplo;
