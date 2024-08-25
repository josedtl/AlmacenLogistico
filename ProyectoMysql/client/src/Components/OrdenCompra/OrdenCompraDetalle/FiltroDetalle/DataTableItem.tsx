import React, { useState } from "react";

import {  Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../../../Lib/PropsItem'
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import 'moment/locale/es';
import { DataType } from '../../../../Lib/ResourceModel/DataTableType'


import { OrdenPedidoFiltroOCDModel } from '../../../../Models/OrdenPedidoDetalleEntity';
// import  from 'react-emotion';
const DataTable: React.FC<PropsTable> = (props) => {
    const [modal, contextHolder] = Modal.useModal();
    modal;
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: 20,
            key: 'Cont',

        }, {
            title: 'Orden Detalle',
            dataIndex: 'Codigo',
            width: 60,
            key: 'Codigo',
        }, {
            title: 'Tipo',
            dataIndex: 'NomProceso',
            width: 50,
            key: 'NomProceso',
        },
        {
            title: 'Mercaderia',
            dataIndex: 'NomMercaderia',
            width: 150,
            key: 'NomMercaderia',
        },
        {
            title: 'UM',
            dataIndex: 'NomUnidad',
            width: 50,
            key: 'NomUnidad',
        },
        {
            title: 'Cantidad',
            dataIndex: 'CantidadSolicitado',
            width: 65,
            key: 'CantidadSolicitado',
        },
        {
            title: 'Seleccionar',
            fixed: 'right',
            width: 60,
            key: 'action',
            render: (record: OrdenPedidoFiltroOCDModel) =>
                <span>
                    <Checkbox checked={record.Seleccionar}  value={record.OrdenPedidoDetalleId} onChange={onChange}></Checkbox>
                </span>
            ,
        },

    ];

    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenPedidoDetalleId + a.OrdenPedidoDetalleId).map((item, zIndex) => {
        return {
            ...item,
            key: zIndex,
            Cont: (zIndex + 1),
            Seleccionar: false
        };
    });

    const [ItemsListaAlter, setItemsListaAlter] = useState<any[]>(dataWithKeys);

    const onChange: CheckboxProps['onChange'] = (e) => {

        console.log(`checked = ${e.target.value}`);
        const idNumero = Number(e.target.value);

        const itemIndex = ItemsListaAlter.findIndex((data) => data.OrdenPedidoDetalleId === idNumero);

        const updateData = ItemsListaAlter[itemIndex];

        updateData.Seleccionar = !updateData.Seleccionar;

        const newArray = [...ItemsListaAlter.slice(0, itemIndex), updateData, ...ItemsListaAlter.slice(itemIndex + 1)];
        setItemsListaAlter(newArray);

        console.log(ItemsListaAlter);

    };



    return (
        <div>
            {contextHolder}
            <Table

                bordered
                key="KEY5"
                columns={columns}
                dataSource={ItemsListaAlter}
                size="small"
                pagination={false}
                // scroll={{ x: 1500, y: 300 }}
                scroll={{ x: '100%', y: '45vh' }}
            />
        </div>
    );
}

export default DataTable;

