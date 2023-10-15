"use client"
import React from 'react';
import ProductoService from '@/Service/ProductoService';
import { ProductoEntity } from '@/Models/Producto/ProductoEntity';
import { Button, Table } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

type Props = {
    DataList: ProductoEntity[];
    updateState: any;
    deleteItemFromState: any;
}

const DataTable: React.FC<Props> = (props) => {
    const sProducto = new ProductoService();
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
            render: (text: any, record: ProductoEntity) => (
                <span>

                    <Button
                        type='dashed'
                        onClick={() => deleteItem(record.ProductoId)}
                        style={{ float: "right", marginRight: "10px", color: "#C64541", backgroundColor: "white", borderColor: "#C64541" }}
                        size={size}
                        icon={<DeleteFilled />}
                    />

                    <Button
                        type='dashed'
                        href={`/Producto/${record.ProductoId}`}
                        style={{ float: "right", marginRight: "10px", color: "#BB9B32", backgroundColor: "white", borderColor: "#BB9B32"  }}
                        size={size}
                        icon={<EditFilled />}
                    />


                </span>
            ),
        },

    ];

    const dataWithKeys = props.DataList.sort((a, b) => b.CategoriaId - a.CategoriaId).map((item, zIndex) => {
        return {
            ...item,
            key: item.ProductoId,
            Cont: (zIndex + 1)
        };
    });


    const deleteItem = async (ProductoId: number) => {
        const confirmDelete = window.confirm("Delete item forever?");
        if (confirmDelete) {
            const deleted = await sProducto.deleteItem(ProductoId);
            if (deleted) {
                props.deleteItemFromState(ProductoId);
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

