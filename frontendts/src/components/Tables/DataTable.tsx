import React from "react";
import { Table, Button, Card, CardHeader, CardBody } from "reactstrap";
import ModalForm from "../Modals/Modal";
import { IMarca } from '../IMarca'
const API = import.meta.env.VITE_REACT_API_URL
import './DataTable.css'
import { RiDeleteBin6Line } from 'react-icons/ri';

function DataTable(props: { DataList: IMarca[], updateState: any, deleteItemFromState: any }): JSX.Element {
  const deleteItem = (MarcaId?: number) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch(`${API}/api/General/Marca_Delete/${MarcaId}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MarcaId,
        }),
      })
        .then((response) => response.json())
        .then((item) => {
          props.deleteItemFromState(MarcaId);
        })
        .catch((err) => console.log(err));
    }
  };

  let Contador: number = 0
  const items = props.DataList.map((item) => {

    Contador += 1
    item.Cont = Contador
    return (
      <tr key={item.MarcaId} >
        <td  width={40} scope="row">{item.Cont}</td>
        <td width="1*">{item.Nombre}</td>
        {/* <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.hobby}</td> */}
        <td width={100}>
          <ModalForm
            buttonLabel="Edit"
            item={item}
            updateState={props.updateState}
          />{" "}
          <Button
            className="btn btn-danger btn-sm btn-block"
            color="danger"
            onClick={() => deleteItem(item.MarcaId)}
          >
            <RiDeleteBin6Line/>
          </Button>
        </td>
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
    // <div className="container table-responsive">
    //   <Table className="table table-bordered table-striped mb-0" 
    //   bordered height="200" Style={style.table}
    //   responsive hover>
    //     <thead>
    //       <tr className="table-dark">
    //         <th>ID</th>
    //         <th>NOMBRE</th>
    //         {/* <th>Last</th>
    //       <th>Email</th>
    //       <th>Phone</th>
    //       <th>Location</th>
    //       <th>Hobby</th> */}
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody >{items}</tbody>
    //   </Table>
    // </div>
    // <div>
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
                  <th style={style.th}>Nombre</th>
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
