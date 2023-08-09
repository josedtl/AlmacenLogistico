"use client"
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ModalItem from '@/Components/Marca/ModalItem'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import MarcaService from '@/Service/MarcaService';
import { styled } from '@mui/material/styles';
import { MarcaEntity } from '@/Models/IMarca';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
type Props = {
    DataList: MarcaEntity[];
    updateState: any;
    deleteItemFromState: any;
}

const DataTable: React.FC<Props> = (props) => {
    const marcaService = new MarcaService();



    
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


    let Contador: number = 0;
    const items = props.DataList.map((row) => {

        Contador += 1
        row.Cont = Contador
        return (
            <TableRow key={row.MarcaId} >
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
                        color="warning"
                        className="btn btn-secondary btn-sm btn-block"
                        onClick={() => deleteItem(row.MarcaId)}
                        style={{ float: "left", marginRight: "10px" }}
                    >
                        <DeleteIcon />
                    </Button>
                </TableCell>

            </TableRow>
        );
    });


    const deleteItem = async (MarcaId: number) => {
        const confirmDelete = window.confirm("Delete item forever?");
        if (confirmDelete) {
            const deleted = await marcaService.deleteItem(MarcaId);
            if (deleted) {
                props.deleteItemFromState(MarcaId);
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
                        {/* {props.DataList.map((row) => (
                            <TableRow key={row.MarcaId}>
                                <TableCell>{row.Cont}</TableCell>
                                <TableCell>{row.Nombre}</TableCell>
                                <TableCell>{row.FechaRegistro.toString()}</TableCell>
                                <TableCell>{row.CodUsuario}</TableCell>
                                <TableCell>
                                    <ModalItem
                                        buttonLabel="Edit"
                                        item={row}
                                        updateState={props.updateState}
                                    />
                                    <Button
                                        color="warning"
                                        className="btn btn-secondary btn-sm btn-block"
                                        onClick={() => deleteItem(row.MarcaId)}
                                        style={{ float: "left", marginRight: "10px" }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default DataTable;

