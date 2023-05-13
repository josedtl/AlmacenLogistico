import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./Tables/DataTable";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { BsPlusSquareFill } from "react-icons/bs";

function OrdenPedidoMain() {

    
    const [items, setItems] = useState<IProductoMain[]>([]);
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


    useEffect(() => {
        getItems();
    }, []);

    return (
        <Container className="App">

            <Row>
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>* <b>Orden de Pedido</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <Link className="nav-item nav-link" to="/OrdenPedido/OrdenPedidoSave">
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

export default OrdenPedidoMain;
