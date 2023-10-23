import React from 'react';
import ModalItem from './ModalItem'
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row, Button, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../../Lib/PropsItem'
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../../Lib/ResourceModel/DataTableType'

const DataTable: React.FC<PropsTable> = (props) => {
    const [size, setSize] = React.useState<SizeType>('middle');
    const [modal, contextHolder] = Modal.useModal();
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: '50px',
            key: 'Cont',
        },
        {
            title: 'NomProducto',
            dataIndex: 'NomProducto',
            width: '200px',
            key: 'NomProducto',
        },
        {
            title: 'Solicito',
            dataIndex: 'CantidadSolicitado',
            width: '80px',
            key: 'CantidadSolicitado',
        },
        {
            title: 'Faltante',
            dataIndex: 'CantidadFaltante',
            width: '80px',
            key: 'CantidadFaltante',
        }, {
            title: 'Reservado',
            dataIndex: 'CantidadReservado',
            width: '80px',
            key: 'CantidadReservado',
        },
        {
            title: 'Atendido',
            dataIndex: 'CantidadAtendido',
            width: '80px',
            key: 'CantidadFaltante',
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 100,
            key: 'action',
            render: (record: OrdenPedidoDetalleEntity) =>
                <span>

                    <Button
                        type='dashed'
                        onClick={() => deleteItem(record.OrdenPedidoDetalleId)}
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
            ,
        },

    ];

    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenPedidoDetalleId - a.OrdenPedidoDetalleId).map((item, zIndex) => {
        return {
            ...item,
            key: item.Cont,
            Cont: (zIndex + 1),
        };
    });

    const DeleteItemAll = async (OrdenPedidoDetalleId: number) => {
        // const deleted = await sOrdenPedidoDetalle.deleteItem(OrdenPedidoDetalleId);
        // if (deleted) {
        //     props.deleteItemFromState(OrdenPedidoDetalleId);
        // } else {
        //     console.log("Delete operation failed");
        // }
    }

    const deleteItem = async (OrdenPedidoDetalleId: number) => {

        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea eliminar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                DeleteItemAll(OrdenPedidoDetalleId);
            },
            onCancel() { },
        });


    };

    const ListaCard = () => {
        if (props.EsTabla) {

            return (
                <>
                    <Row gutter={16} style={{ backgroundColor: '#FAFAFA' }} >
                        {dataWithKeys.map(row => (

                            <Col key={row.Cont} xs={24} md={12} lg={8} xl={6} xxl={4}>
                                <Card hoverable={true}

                                    style={{ marginTop: '10Px', }}
                                    actions={[
                                        <DeleteFilled
                                            style={{ color: "#C64541" }}
                                            onClick={() => deleteItem(row.OrdenPedidoDetalleId)}
                                            key="setting" />,
                                        <ModalItem
                                            buttonLabel="EnlaceCard"
                                            item={row}
                                            updateState={props.updateState}
                                        />
                                    ]}
                                    bordered={false}>
                                    {row.Cont + ".  "}   {row.Nombre}
                                </Card>

                            </Col>


                        ))}
                    </Row>

                </>
            )
        } else {
            return (
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataWithKeys}
                    size="small"
                    pagination={false}
                    scroll={{ x: 'calc(500px + 50%)', y: '65vh' }}
                />
                // scroll={{ x: 2000, y: '65vh' }}
                // scroll={{ x: 'calc(700px + 50%)', y: '100%' }}
            )
        }

    }

    return (
        <div>
            {contextHolder}

            {ListaCard()}
        </div>
    );
}

export default DataTable;

