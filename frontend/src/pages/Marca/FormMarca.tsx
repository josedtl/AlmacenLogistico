import { GetServerSideProps, NextPage } from 'next'
import { Card } from 'react-bootstrap'
import { PokemonList } from '@components/Pokemon'
import { AdminLayout } from '@layout'
import React, { useEffect, useState } from 'react'
import { Pokemon } from '@models/pokemon'
import { newResource, Resource } from '@models/resource'
import { transformResponseWrapper, useSWRAxios } from '@hooks'
import { Pagination } from '@components/Pagination'
import DataTable from "@components/Marca/Tables/DataTable";
import { IMarca } from '@models/IMarca'
import ModalForm from '@components/Marca/Modals/Modal'
import axios from 'axios'
// type Props = {
//   page: number;
//   perPage: number;
//   sort: string;
//   order: string;
// }

type Props = {
  pokemonResource: Resource<IMarca>;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}


const FormMarca: NextPage<Props> = (props) => {
  const {
    pokemonResource, page, perPage, sort, order,
  } = props
  // const URL = process.env.VITE_REACT_API_URL;
  const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
  const [items, setItems] = useState<IMarca[]>([]);

  //   const API = import.meta.env.VITE_REACT_API_URL
  const addItemToState = (item: IMarca) => {
    setItems([...items, item]);
  };

  const getItems = () => {
    try {

      fetch(`${URL}/api/General/Get_MarcaItems/`)
        .then((response) => response.json())
        .then((items) => setItems(items))
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

  useEffect(() => {
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
        {/* <Pagination
              meta={resource.meta}
              setPerPage={setPerPage}
              setPage={setPage}
            /> */}
        {/* <PokemonList
              pokemons={resource.data}
              setSort={setSort}
              setOrder={setOrder}
            /> */}

        <DataTable
          DataList={items}
          updateState={updateState}
          deleteItemFromState={deleteItemFromState}
        />
      </Card.Body>
    </Card>
  </AdminLayout>)
}





// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
//   const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
//   // const pokemonListURL = `${process.env.NEXT_PUBLIC_SERVER_API_BASE_URL}/api/General/Get_MarcaItems/`
//   let page = 1
//   if (context.query?.page && typeof context.query.page === 'string') {
//     page = parseInt(context.query.page, 10)
//   }

//   let perPage = 20
//   if (context.query?.per_page && typeof context.query.per_page === 'string') {
//     perPage = parseInt(context.query.per_page.toString(), 10)
//   }

//   let sort = 'id'
//   if (context.query?.sort && typeof context.query.sort === 'string') {
//     sort = context.query.sort
//   }

//   let order = 'asc'
//   if (context.query?.order && typeof context.query.order === 'string') {
//     order = context.query.order
//   }

//   const { data: FormMarca, headers } = await axios.get<IMarca[]>(`${URL}/api/General/Get_MarcaItems/`, {
//     params: {
//       _page: page,
//       _limit: perPage,
//       _sort: sort,
//       _order: order,
//     },
//   })

//   const total = parseInt(headers['x-total-count'], 10)
//   const pokemonResource: Resource<IMarca> = newResource(FormMarca, total, page, perPage)
//   return {
//     props: {
//       pokemonResource,
//       page,
//       perPage,
//       sort,
//       order,
//     }, // will be passed to the page component as props
//   }
// }

export default FormMarca;