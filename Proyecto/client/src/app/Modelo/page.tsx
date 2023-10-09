"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DataTable from '@/Components/Modelo/DataTable';
import { ModeloEntity } from '@/Models/ModeloEntity';
import ModalItem from '@/Components/Modelo/ModalItem';
import ModeloService from '@/Service/ModeloService';
import RefreshIcon from '@mui/icons-material/Refresh';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Page() {
  const sModelo = new ModeloService();

  const [items, setItems] = useState<ModeloEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const addItemToState = (item: ModeloEntity) => {
    setItems([...items, item]);
  };

  const updateState = (item: ModeloEntity) => {
    const itemIndex = items.findIndex((data) => data.ModeloId === item.ModeloId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.ModeloId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    setOpen(true);
    const items = await sModelo.getItems();
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
                Modelo
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

                <ModalItem buttonLabel="" addItemToState={addItemToState} item={new ModeloEntity()} />
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













