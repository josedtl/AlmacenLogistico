"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/Silder/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DataTable from '@/Components/Categoria/DataTable';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import ModalItem from '@/Components/Categoria/ModalItem';
import CategoriaService from '@/Service/CategoriaService';
import RefreshIcon from '@mui/icons-material/Refresh';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { DatePicker } from 'antd';

import { Space, Switch, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { Button, Popconfirm, message, Modal, Form, Input } from 'antd';
import { text } from 'stream/consumers';

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}
function Page() {
  const sCategoria = new CategoriaService();


  const columns = [
    {
      title: 'Nº',
      dataIndex: 'Cont',
      key: 'Cont',
    },
    {
      title: 'Nombre',
      dataIndex: 'Nombre',
      key: 'Nombre',
    },
    {
      title: 'Fecha de registro',
      dataIndex: 'FechaRegistro',
      key: 'FechaRegistro',
    },
    {
      title: 'Usuario',
      dataIndex: 'CodUsuario',
      key: 'CodUsuario',
    }, {
      title: 'Action',
      key: 'action',
      render: (text: any, record: CategoriaEntity) => (
        <span>
          <Button type="primary" onClick={() => showModal(record)}>
            Editar
          </Button>
         
        </span>
      ),
    },
   
  ];

  const [items, setItems] = useState<CategoriaEntity[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const showModal = (item: CategoriaEntity) => {
    console.log(item);
  };


  const addItemToState = (item: CategoriaEntity) => {
    setItems([...items, item]);
  };

  const updateState = (item: CategoriaEntity) => {
    const itemIndex = items.findIndex((data) => data.CategoriaId === item.CategoriaId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.CategoriaId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    setOpen(true);
    // const items = await sCategoria.getItems();
    const itemsg = await sCategoria.GetItemsGra();
    setItems(itemsg);
    setOpen(false);

    // console.log(itemsg);
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
                Categoria
              </Typography>
            </Grid>
            <Grid xs={6}>
              <div style={{ flex: 1, textAlign: 'right' }}>

                {/* 
                <Button
                  variant="contained"
                  style={{ margin: '0px 10px 0px 0px' }}
                  size="medium"
                  sx={{ background: '#15616d' }}
                >
                  <AddIcon />
                </Button>
                <Fab

                  color="primary"
                  size="small"
                  onClick={getItems}
                  style={{ margin: '0px 10px 0px 0px' }}
                  aria-label="add"
                  sx={{ background: '#FCFCFC', borderColor: '#15616d' }}
                >
                  <RefreshIcon sx={{ color: '#15616d' }} />
                </Fab> */}

                {/* <Button
                  variant="outlined"
                  onClick={getItems}
                  aria-label="add"
                  style={{
                    margin: '0px 10px 0px 0px',
                    borderColor: '#15616d'
                  }}
                  size="medium"
                >
                  <RefreshIcon sx={{ color: '#15616d' }} />
                </Button> */}




                <ModalItem buttonLabel="" addItemToState={addItemToState} item={new CategoriaEntity()} />
              </div>

            </Grid>

          </Grid>



        </CardContent>
        <DataTable DataList={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
        <Table
          columns={columns}
          dataSource={items}
        />
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



