import React from "react";
import { Button, Card, CardHeader, CardBody, Table } from "reactstrap";
import ModalForm from "../Modals/Modal";
import { IModelo } from '@models/IModelo'
import { GetServerSideProps, NextPage } from 'next'
import { RiDeleteBin6Line } from 'react-icons/ri';
type Props = {
  DataList: IModelo[];
  updateState: any;
  deleteItemFromState: any;
}
// function DataTable(props): JSX.Element 
const DataTable: NextPage<Props> = (props) => {
  const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
  const deleteItem = (ModeloId?: number) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch(`${URL}/api/General/Marca_Delete/${ModeloId}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ModeloId,
        }),
      })
        .then((response) => response.json())
        .then((item) => {
          props.deleteItemFromState(ModeloId);
        })
        .catch((err) => console.log(err));
    }
  };


  let Contador: number = 0;
  const items = props.DataList.map((item) => {

    Contador += 1
    item.Cont = Contador
    return (
      <tr key={item.ModeloId} >
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
            onClick={() => deleteItem(item.ModeloId)}
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
                  <th  >Nombre</th>
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
