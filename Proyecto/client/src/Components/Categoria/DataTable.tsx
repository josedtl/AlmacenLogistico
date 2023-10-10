"use client"
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";
import ModalItem from '@/Components/Categoria/ModalItem'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CategoriaService from '@/Service/CategoriaService';
import { styled } from '@mui/material/styles';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import ButtonGroup from '@mui/material/ButtonGroup';
type Props = {
    DataList: CategoriaEntity[];
    updateState: any;
    deleteItemFromState: any;
}

const DataTable: React.FC<Props> = (props) => {
    const sCategoria = new CategoriaService();




    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#001f54',
            color: '#FFFFFF',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));



    let Contador: number = 0;
    const items = props.DataList.map((row) => {

        Contador += 1
        row.Cont = Contador
        return (
            <TableRow key={row.CategoriaId} >
                <TableCell width={80} >{row.Cont}</TableCell>
                <TableCell>{row.Nombre}</TableCell>
                <TableCell width={200}>{row.FechaRegistro.toString()}</TableCell>
                <TableCell width={150}>{row.CodUsuario}</TableCell>
                <TableCell width={150} >

                    <ButtonGroup variant="text" aria-label="text button group">
                        <ModalItem
                            buttonLabel="Edit"
                            item={row}
                            updateState={props.updateState}
                        />
                        <Button
                            className="btn btn-secondary btn-sm btn-block"
                            onClick={() => deleteItem(row.CategoriaId)}
                            style={{ float: "left", marginRight: "10px", color: "#B22727" }}
                        >
                            <DeleteIcon />
                        </Button>
                    </ButtonGroup>
                </TableCell>

            </TableRow>
        );
    });


    const deleteItem = async (CategoriaId: number) => {
        const confirmDelete = window.confirm("Delete item forever?");
        if (confirmDelete) {
            const deleted = await sCategoria.deleteItem(CategoriaId);
            if (deleted) {
                props.deleteItemFromState(CategoriaId);
            } else {
                console.log("Delete operation failed");
            }
        }
    };

    return (

        <div>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="customized table" size="small" >
                    <TableHead >
                        <TableRow >
                            <StyledTableCell height={50}>Nº</StyledTableCell>
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

