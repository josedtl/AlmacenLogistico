"use client"
import React, { useState } from 'react';
import Layout from '@/Silder/Layout';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Card from '@mui/material/Card';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const page = () => {
  const [value, setValue] = React.useState('1');


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  const [selectedDate, setSelectedDate] = React.useState(null);



  return (





    <Layout>
      <Card>


        <Grid container spacing={5}>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" component="div">
              Orden de Pedido
            </Typography>
          </Grid>
          <Grid item xs={6} md={9}>
            <Button variant="outlined" startIcon={<SaveOutlinedIcon />}>
              Guardar
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              type="text"
              size="small"
              id="outlined-basic"
              sx={{ width: '100%' }}
              name="Nombre"
              margin="normal"
              label="Código"
              variant="outlined"
            />

            <TextField
              type="text"
              size="small"
              id="outlined-basic"
              sx={{ width: '100%' }}
              name="Nombre"
              margin="normal"
              label="Responsable"
              variant="outlined"
            />

            <TextField
              type="text"
              size="small"
              id="outlined-basic"
              sx={{ width: '100%' }}
              name="Nombre"
              margin="normal"
              label="Nombre"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6} md={9}>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">

                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center" sx={{ with: 10 }}>Nº</StyledTableCell>
                          <StyledTableCell>Prodcuto</StyledTableCell>
                          <StyledTableCell align="center">Cantidad Solicitado</StyledTableCell>
                          <StyledTableCell align="center">Cantidad Faltante</StyledTableCell>
                          <StyledTableCell align="center">Cantidad Reservada</StyledTableCell>
                          <StyledTableCell align="center">Cantidad Atendido</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell sx={{ with: 20 }} align="center">0</StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="center">{row.protein}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>

                  </TableContainer>


                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
              {/* <TabPanel value="1">Item One</TabPanel> */}








            </Box>
          </Grid>

        </Grid >
      </Card>


    </Layout>
  );
};

export default page;