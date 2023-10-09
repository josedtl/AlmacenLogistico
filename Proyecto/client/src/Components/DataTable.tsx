"use cliente"
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface RowData {
    CategoriaId: number;
    Nombre: string;
    FechaRegistro: number;
    CodUsuario: string;
}
// "CategoriaId": 21,
// "Nombre": "ELECTRODOMESTICOS",
// "FechaRegistro": "2023-07-12T15:47:47",
// "CodUsuario": "adm",
// "EstadoRegistro": true
const DataTable: React.FC = () => {
    const [data, setData] = useState<RowData[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Aquí debes hacer la llamada al API para obtener los datos de la tabla.
            // Por ejemplo, podrías usar fetch o axios para hacer una solicitud GET al API.
            const response = await fetch("http://127.0.0.1:8000/api/Categoria/GetMainItems");
            const data = await response.json();
            setData(data.Value);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Data table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Fecha Registro</TableCell>
                        <TableCell>Usuario</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.CategoriaId}>
                            <TableCell>{row.CategoriaId}</TableCell>
                            <TableCell>{row.Nombre}</TableCell>
                            <TableCell>{row.FechaRegistro}</TableCell>
                            <TableCell>{row.CodUsuario}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;