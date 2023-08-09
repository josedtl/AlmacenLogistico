"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DataTable from '@/Components/Marca/DataTable';
import { MarcaEntity } from '@/Models/IMarca';
import ModalItem from '@/Components/Marca/ModalItem';
import MarcaService from '@/Service/MarcaService';
import RefreshIcon from '@mui/icons-material/Refresh';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Toolbar, IconButton } from '@mui/material';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '16px', // Adjust padding as needed
});
interface TitleWithButtonsProps {
  title: string;
  buttons: React.ReactNode;
}

function Page() {
  const marcaService = new MarcaService();

  const [items, setItems] = useState<MarcaEntity[]>([]);

  const addItemToState = (item: MarcaEntity) => {
    setItems([...items, item]);
  };

  const updateState = (item: MarcaEntity) => {
    const itemIndex = items.findIndex((data) => data.MarcaId === item.MarcaId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.MarcaId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    const items = await marcaService.getItems();
    setItems(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Layout>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6} >
              <Typography gutterBottom variant="h4" component="div" style={{ flex: 1, textAlign: 'left' }}>
                Marca
              </Typography>
            </Grid>
            <Grid xs={6}>
              <div style={{ flex: 1, textAlign: 'right' }}>

                <Fab

                  color="primary"
                  size="small"
                  onClick={getItems}
                  style={{ margin: '0px 10px 0px 0px' }}
                  aria-label="add">
                  <RefreshIcon />
                </Fab>

                <ModalItem buttonLabel="" addItemToState={addItemToState} item={new MarcaEntity()} />
              </div>

            </Grid>

          </Grid>



        </CardContent>
        <DataTable DataList={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
      </Card>
    </Layout >
  );
}

export default Page;
























// "use client"
// import React from 'react';
// import Layout from '@/Silder/Layout';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import DataTable from '@/Components/Marca/DataTable'
// import { MarcaEntity } from '@/Models/IMarca'
// import ModalItem from '@/Components/Marca/ModalItem'
// import axios, { AxiosResponse } from 'axios';

// function page() {
//     const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL

//     const [items, setItems] = React.useState<MarcaEntity[]>([]);


//     const addItemToState = (item: MarcaEntity) => {
//         setItems([...items, item]);
//     };


//     const updateState = (item: MarcaEntity) => {
//         const itemIndex = items.findIndex((data) => data.MarcaId === item.MarcaId);
//         const newArray = [
//             ...items.slice(0, itemIndex),
//             item,
//             ...items.slice(itemIndex + 1)
//         ];
//         setItems(newArray);
//     };

//     const deleteItemFromState = (id: number) => {
//         const updatedItems = items.filter((item) => item.MarcaId !== id);
//         setItems(updatedItems);
//     };


//     const getItems = async () => {
//         try {
//             const response =  await axios.get(`${URL}/api/Marca/GetMainItems/`);
//             if (response.status == 200) {
//                 console.log(response.data.Value);
//                 setItems(response.data.Value);
//             }
//         }
//         catch (err) {
//             console.log(err)
//         }
//     };
//     React.useEffect(() => {
//         getItems();
//     }, []);

//     return (
//         <Layout>

//             <Card>
//                 <CardContent>
//                     <Stack direction="row" spacing={2}>
//                         <Typography gutterBottom variant="h4" component="div">
//                             Marca
//                         </Typography>
//                         <Button variant="contained">Agregar</Button>
//                         <ModalItem buttonLabel="" addItemToState={addItemToState} item={new MarcaEntity()} />
//                     </Stack>
//                 </CardContent>
//                 <DataTable
//                     DataList={items}
//                     updateState={updateState}
//                     deleteItemFromState={deleteItemFromState}
//                 />


//             </Card>
//         </Layout>
//     );
// }

// export default page;