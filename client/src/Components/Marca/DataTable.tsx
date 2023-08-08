
"use client"
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IMarca } from '@/Models/IMarca'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { format } from 'date-fns';
import  ModalItem from '@/Components/Marca/ModalItem'

type Props = {
    DataList: IMarca[];
    updateState: any;
    deleteItemFromState: any;
}
// interface RowData {
//     CategoriaId: number;
//     Nombre: string;
//     FechaRegistro: number;
//     CodUsuario: string;
// }
const DataTable: React.FC<Props> = (props) => {
    const [data, setData] = React.useState<IMarca[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (

        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Data table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Fecha Registro</TableCell>
                            <TableCell>Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.DataList.map((row) => (
                            <TableRow key={row.MarcaId}>
                                <TableCell>{row.EstadoRegistro}</TableCell>
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
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>



    );
}

export default DataTable;
