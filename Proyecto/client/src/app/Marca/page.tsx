"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DataTable from '@/Components/Marca/DataTable';
import { MarcaEntity } from '@/Models/MarcaEntity';
import ModalItem from '@/Components/Marca/ModalItem';
import MarcaService from '@/Service/MarcaService';
import RefreshIcon from '@mui/icons-material/Refresh';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Page() {
  const sMarca = new MarcaService();

  const [items, setItems] = useState<MarcaEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

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
    setOpen(true);
    const items = await sMarca.getItems();
    setItems(items);
    setOpen(false);
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
                  aria-label="add"
                  sx={{ background: '#15616d' }}
                >
                  <RefreshIcon />
                </Fab>

                <ModalItem buttonLabel="" addItemToState={addItemToState} item={new MarcaEntity()} />
              </div>

            </Grid>

          </Grid>



        </CardContent>
        <DataTable DataList={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
      </Card>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Layout >
  );
}

export default Page;















