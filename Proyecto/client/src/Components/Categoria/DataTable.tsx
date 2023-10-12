"use client"
import React from 'react';
import ModalItem from '@/Components/Categoria/ModalItem'
import CategoriaService from '@/Service/CategoriaService';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import { Button,Table} from 'antd';
import {  DeleteFilled } from '@ant-design/icons';
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
            width: '50px',
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
            width: '150px',
            key: 'FechaRegistro',
        },
        {
            title: 'Usuario',
            dataIndex: 'CodUsuario',
            width: '100px',
            key: 'CodUsuario',
        }, {
            title: 'Action',
            width: '100px',
            key: 'action',
            render: (text: any, record: CategoriaEntity) => (
                <span>

                    <Button
                        type='dashed'
                        onClick={() => deleteItem(record.CategoriaId)}
                        style={{ float: "right", marginRight: "10px", color: "#C64541", backgroundColor: "white", borderColor: "#C64541" }}
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

    const dataWithKeys = props.DataList.map((item, zIndex) => {
        return {
            ...item,
            key: item.CategoriaId,
            Cont: (zIndex + 1)
        };
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

            <Table
                columns={columns}
                dataSource={dataWithKeys}
                size="small"
                scroll={{ x: 'calc(700px + 50%)', y: '100%' }}
            />
        </div>

    );
}

export default DataTable;

