import React, { useState, useEffect } from "react";
import ModalItem from '../ModalItem'
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row, Button, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../../../Lib/PropsItem'
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import 'moment/locale/es';
import { DataType } from '../../../../Lib/ResourceModel/DataTableType'
import { ProcessActionEnum } from '../../../../Lib/ResourceModel/Enum'
import { RightCircleOutlined } from '@ant-design/icons';


import { OrdenCompraDetalleEntity } from '../../../../Models/OrdenCompraDetalleEntity';
import { OrdenPedidoFiltroOCOModel } from '../../../../Models/OrdenPedidoEntity';
// import  from 'react-emotion';
const DataTableOrden: React.FC<PropsTable> = (props) => {
    const [size] = React.useState<SizeType>('middle');
    const [modal, contextHolder] = Modal.useModal();
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: 15,
            key: 'Cont',

        },

        {
            title: 'Orden Pedido',
            dataIndex: 'Codigo',
            width: 30,
            key: 'Codigo',
        },
        {
            title: 'Tipo',
            dataIndex: 'NomProceso',
            width: 30,
            key: 'NomProceso',
        },
        {
            title: 'Responsable',
            dataIndex: 'NomResponsable',
            width: 100,
            key: 'NomResponsable',
        },
        {
            title: 'Fecha Emision',
            dataIndex: 'FechaEmision',
            width: 50,
            key: 'FechaEmision',
        },
        {
            title: 'Seleccionar',
            fixed: 'right',
            width: 30,
            key: 'action',
            render: (record: OrdenPedidoFiltroOCOModel) =>
                <span>

                    <Checkbox checked={record.Seleccionar} value={record.OrdenPedidoId} onChange={onChangeOrden} ></Checkbox>



                </span>
            ,
        },


    ];
    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenPedidoId + a.OrdenPedidoId).map((item, zIndex) => {
        return {
            ...item,
            key: zIndex,
            Cont: (zIndex + 1),
            Seleccionar: false
        };

    });
    const [ItemsListaAlter, setItemsListaAlter] = useState<any[]>(dataWithKeys);

    const onChangeOrden: CheckboxProps['onChange'] = (e) => {

        console.log(`checked = ${e.target.value}`);
        const idNumero = Number(e.target.value);

        const itemIndex = ItemsListaAlter.findIndex((data) => data.OrdenPedidoId === idNumero);

        const updateData = ItemsListaAlter[itemIndex];

        // 1 OPCION
        // if (updateData.Seleccionar === true) {

        //     updateData.Seleccionar = false;
        // } else {
        //     updateData.Seleccionar = true;
        // }

        // 2 OPCION
        updateData.Seleccionar = updateData.Seleccionar === true ? false : true;

        // 3 OPCION
        // updateData.Seleccionar = !updateData.Seleccionar;

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
                scroll={{ x: '100%', y: '45vh' }}
            />
        </div>
    );
}

export default DataTableOrden;

