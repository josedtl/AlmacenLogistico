"use client"
import React from 'react';
import Layout from '@/Silder/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DataTable from '@/Components/Marca/DataTable'
import { IMarca } from '@/Models/IMarca'
import ModalItem from '@/Components/Marca/ModalItem'
function page() {


    const [items, setItems] = React.useState<IMarca[]>([]);


    const addItemToState = (item: IMarca) => {
        setItems([...items, item]);
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

    const URL = "http://127.0.0.1:8000";
    const getItems = () => {
        try {
    
          fetch(`${URL}/api/Marca/GetMainItems/`)
            .then((response) => response.json())
            .then((ResponseData) => {
                console.log(ResponseData);
                setItems(ResponseData.Value)
                console.log(items);
            //   if (ResponseData.State) setItems(ResponseData.Value)
            //   else console.log(ResponseData.Data)

            }
            )
            .catch((err) => console.log(err));
        }
        catch (e) {
          console.log(e)
        }
      };
   React.useEffect(() => {
        getItems();
       
      }, []);
    
    return (
        <Layout>

            <Card>
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <Typography gutterBottom variant="h4" component="div">
                            Marca
                        </Typography>
                        <Button variant="contained">Agregar</Button>
                        <ModalItem buttonLabel="" addItemToState={addItemToState} />
                    </Stack>
                </CardContent>
                <DataTable 
                    DataList={items}
                    updateState={updateState}
                    deleteItemFromState={deleteItemFromState}
                />


            </Card>
        </Layout>
    );
}

export default page;