"use client"
import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";
import ModalItem from '@/Components/Categoria/ModalItem'
import DeleteIcon from '@mui/icons-material/Delete';
import CategoriaService from '@/Service/CategoriaService';
import { styled } from '@mui/material/styles';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Space, Switch, Table } from 'antd';
import { Button, Popconfirm, message, Modal, Form, Input } from 'antd';
import { DownloadOutlined, DeleteFilled } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

type Props = {
    DataList: CategoriaEntity[];
    updateState: any;
    deleteItemFromState: any;
}

const DataTable: React.FC<Props> = (props) => {
    const sCategoria = new CategoriaService();
    const [size, setSize] = React.useState<SizeType>('middle');



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


                    {/* <Button type="primary" icon={<DownloadOutlined />} size={size} />
              <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} /> */}
                    <Button
                        type='dashed'
                        onClick={() => deleteItem(record.CategoriaId)}
                        style={{ float: "right", marginRight: "10px", color: "red", backgroundColor: "white", borderColor: "red" }}
                        size={size}
                        icon={<DeleteFilled />}
                    />
                    <ModalItem
                        buttonLabel="Edit"
                        item={record}
                        updateState={props.updateState}
                    />



                </span>
            ),
        },

    ];

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
            {/* <TableContainer sx={{ maxHeight: 500 }}>
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
            </TableContainer> */}


            <Table
                columns={columns}
                dataSource={props.DataList}
            />
        </div>

    );
}

export default DataTable;

