import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import { AdminLayout } from '@layout'
import React, { useEffect, useState } from 'react'
import { newResource, Resource } from '@models/resource'
import DataTable from "@components/Modelo/Tables/DataTable";
import { IModelo } from '@models/IModelo'
import ModalForm from '@components/Marca/Modals/Modal'

type Props = {
  pokemonResource: Resource<IModelo>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}


const FormMarca: NextPage<Props> = (props) => {
  const {
    pokemonResource, page, perPage, sort, order,
  } = props
  const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
  const [items, setItems] = useState<IModelo[]>([]);

  const addItemToState = (item: IModelo) => {
    setItems([...items, item]);
  };

  const getItems = () => {
    try {

      fetch(`${URL}/api/General/Get_ModeloItems/`)
        .then((response) => response.json())
        .then((ResponseData) => {
          setItems(ResponseData)
        }
        )
        .catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e)
    }
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
    console.log(items);
  }, []);

  return (
    <AdminLayout>
      <Card>
        <Card.Header>Modelo</Card.Header>
        <Card.Footer>  <ModalForm buttonLabel=""
          addItemToState={addItemToState} /></Card.Footer>
        <Card.Body>
          <DataTable
            DataList={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Card.Body>
      </Card>
    </AdminLayout>)
}




export default FormMarca;