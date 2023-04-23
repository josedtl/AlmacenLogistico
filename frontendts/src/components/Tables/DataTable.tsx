import React from "react";
import { Table, Button, Card, CardHeader, CardBody  } from "reactstrap";
import ModalForm from "../Modals/Modal";
import { IMarca } from '../IMarca'
const API = import.meta.env.VITE_REACT_API_URL
import './DataTable.css'


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

  const items = props.DataList.map((item) => {
    return (
      <tr key={item.MarcaId}>
        <th scope="row">{item.MarcaId}</th>
        <td>{item.Nombre}</td>
        {/* <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.hobby}</td> */}
        <td>
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
            Del
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
          <CardHeader>Marca</CardHeader>
          <CardBody>
            <div 
              style={{
                maxHeight: '400px',
                overflowY: 'auto',
              }}
            >
              <Table className="table table-bordered table-striped mb-0" 
              bordered height="200" Style={style.table}>
                <thead>
                  <tr>
                    <th style={style.th}>#</th>
                    <th style={style.th}>First Name</th>
                    <th style={style.th}>Last Name</th>
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
