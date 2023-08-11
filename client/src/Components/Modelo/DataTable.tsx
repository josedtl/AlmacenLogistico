"use client"
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";
import ModalItem from '@/Components/Modelo/ModalItem'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeloService from '@/Service/ModeloService';
import { styled } from '@mui/material/styles';
import { ModeloEntity } from '@/Models/ModeloEntity';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
type Props = {
    DataList: ModeloEntity[];
    updateState: any;
    deleteItemFromState: any;
}

const DataTable: React.FC<Props> = (props) => {
    const sModelo = new ModeloService();



    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#001f54',
            color: '#FFFFFF',
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


    let Contador: number = 0;
    const items = props.DataList.map((row) => {

        Contador += 1
        row.Cont = Contador
        return (
            <TableRow key={row.ModeloId} >
                <TableCell width={80}>{row.Cont}</TableCell>
                <TableCell>{row.Nombre}</TableCell>
                <TableCell width={200}>{row.FechaRegistro.toString()}</TableCell>
                <TableCell width={150}>{row.CodUsuario}</TableCell>
                <TableCell width={150} >
                    <ModalItem
                        buttonLabel="Edit"
                        item={row}
                        updateState={props.updateState}
                    />
                    <Button
                        className="btn btn-secondary btn-sm btn-block"
                        onClick={() => deleteItem(row.ModeloId)}
                        style={{ float: "left", marginRight: "10px", color: "#000000" }}
                    >
                        <DeleteIcon />
                    </Button>
                </TableCell>

            </TableRow>
        );
    });


    const deleteItem = async (ModeloId: number) => {
        const confirmDelete = window.confirm("Delete item forever?");
        if (confirmDelete) {
            const deleted = await sModelo.deleteItem(ModeloId);
            if (deleted) {
                props.deleteItemFromState(ModeloId);
            } else {
                console.log("Delete operation failed");
            }
        }
    };

    return (

        <div>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="customized table" size="small" >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nº</StyledTableCell>
                            <StyledTableCell>Nombre</StyledTableCell>
                            <StyledTableCell>Fecha Registro</StyledTableCell>
                            <StyledTableCell>Usuario</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items}
      
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default DataTable;

