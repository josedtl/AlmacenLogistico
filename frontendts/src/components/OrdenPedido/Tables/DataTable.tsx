import React from "react";
import { Link } from 'react-router-dom'
import { Table, Button, Card, CardHeader, CardBody } from "reactstrap";
import { IOrdenPedidoDetalle } from '../../../Models/OrdenPedido/IOrdenPedidoDetalle'
const API = import.meta.env.VITE_REACT_API_URL
import './DataTable.css'
import { BsPencil } from 'react-icons/bs';

function DataTable(props: { DataList: IOrdenPedidoDetalle[], updateState: any, deleteItemFromState: any }): JSX.Element {


  let m_Datos = "DAVID VARIABLE";
  var result = `/Mostrar/ ${m_Datos}`;

  const Url = (Variable: number) => {
    `/Mostrar/ ${Variable}`
  }

  let Contador: number = 0
  const items = props.DataList.map((item) => {


    return (
      <tr key={item.ProductoId} >
        <td width={40} scope="row">{item.Cont}</td>
        <td width="150">{item.Nombre}</td>
        {/* <td width="150">{item.CodigoInterno}</td>
        <td width="1*">{item.NomTipoProducto}</td>
        <td width="1*">{item.NomMarca}</td>
        <td width="1*">{item.NomModelo}</td>
        <td width="50*">{item.CodigoComercial}</td> */}
        {/* <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.hobby}</td> */}
      
      </tr>
    );
  });

  const style = {
    table: {
      width: '100%',
      display: 'table',
      borderSpacing: 0,
      borderCollapse: 'separate',
    },
    th: {
      top: 0,
      left: 0,
      zIndex: 2,
      position: 'sticky',
      backgroundColor: '#fff',
    },
  };

  return (

    <div>
      <Card>

        <CardBody>
          <div
            style={{
              // height:'20%',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
          >
            <Table className="table table-responsive "
              Style={style.table}>
              <thead className="thead-dark">
                <tr>
                  <th style={style.th}>Nº</th>
                  <th style={style.th}>Codigo</th>
                  <th style={style.th}>Codigo Interno</th>
                  <th style={style.th}>Tipo</th>
                  <th style={style.th}>Marca</th>
                  <th style={style.th}>Modelo</th>
                  <th style={style.th}>Unidad M.</th>
                  <th style={style.th}></th>
                </tr>
              </thead>
              <tbody >{items}</tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>



  );
}

export default DataTable;
