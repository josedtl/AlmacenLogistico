import React from "react";
import { Button, Card, CardHeader, CardBody, Table } from "reactstrap";
import ModalForm from "../Modals/Modal";
import { IMarca } from '../IMarca'
import { Dropdown } from 'react-bootstrap'
import { GetServerSideProps, NextPage } from 'next'
// const API = import.meta.env.VITE_REACT_API_URL
// import '@components/Marca/Marca.css'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import './styles.module.css';
type Props = {
  DataList: IMarca[];
  updateState: any;
  deleteItemFromState: any;
}
// function DataTable(props): JSX.Element 
const DataTable: NextPage<Props> = (props) => {
  const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
  const deleteItem = (MarcaId?: number) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch(`${URL}/api/General/Marca_Delete/${MarcaId}`, {
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


  let Contador: number = 0;
  const items = props.DataList.map((item) => {

    Contador += 1
    item.Cont = Contador
    return (
      <tr key={item.MarcaId} >
        <td width={40} scope="row">{item.Cont}</td>
        <td width="1*">{item.Nombre}</td>

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
            <RiDeleteBin6Line />
          </Button>
        </td>

      </tr>
    );
  });

  const style = {
    table: {
      width: '100%',
      margin: '40px',
      height: '100px',
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
  const styleda = {
    // height:'20%',
    maxHeight: '400px',
    overflowY: 'auto',
  }
  return (

    <div>
      <Card>

        <CardBody>
          <div >
            <Table responsive bordered hover
              Style={style.table}>
              <thead className="bg-light">
                <tr>

                  <th  >Nº</th>
                  <th  style={style.th} >Nombre</th>
                  <th aria-label="Action"  ></th>
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
