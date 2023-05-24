import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import { AdminLayout } from '@/layout'
import React from 'react'
import { newResource, Resource } from '@/models/resource'
import DataTable from "@/components/Marca/Tables/DataTable";
import { IMarca } from '@/models/IMarca'
import ModalForm from '@/components/Marca/Modals/Modal'

type Props = {
  pokemonResource: Resource<IMarca>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}


const page: NextPage<Props> = (props) => {
  const {
    pokemonResource, page, perPage, sort, order,
  } = props
  const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
  const [items, setItems] = React.useState<IMarca[]>([]);

  const addItemToState = (item: IMarca) => {
    setItems([...items, item]);
  };

  const getItems = () => {
    try {

      fetch(`${URL}/api/General/Get_MarcaItemsAlter/`)
        .then((response) => response.json())
        .then((ResponseData) => {
          if (ResponseData.State) setItems(ResponseData.Value)
          else console.log(ResponseData)
        }
        )
        .catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e)
    }
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

  React.useEffect(() => {
    getItems();
    console.log(items);
  }, []);

  return (
    <AdminLayout>
      <Card>
        <Card.Header>Marca</Card.Header>
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




export default page;