import React from 'react';
import ModalItem from './ModalItem'
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row, Button, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../../Lib/PropsItem'
import 'moment/locale/es';
import { DataType } from '../../../Lib/ResourceModel/DataTableType'
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'

const DataTable: React.FC<PropsTable> = (props) => {
    const [size] = React.useState<SizeType>('middle');
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
            title: 'UM',
            dataIndex: 'CodigoUM',
            width: '40px',
            key: 'CodigoUM',
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
        },
        {
            title: 'Reservado',
            dataIndex: 'CantidadReservado',
            width: '80px',
            key: 'CantidadReservado',
        },
        {
            title: 'Atendido',
            dataIndex: 'CantidadAtendido',
            width: '80px',
            key: 'CantidadAtendido',
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
                        onClick={() => deleteItem(record)}
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
            // key: item.Cont,
            Cont: (zIndex + 1),
            // Guid :generarGuid(),
        };

    });

    const DeleteItemAll = async (OrdenPedidoDetalleId: OrdenPedidoDetalleEntity) => {
        OrdenPedidoDetalleId.Action = ProcessActionEnum.Delete;
        props.deleteItemFromState(OrdenPedidoDetalleId);
    }

    const deleteItem = async (OrdenPedidoDetalleId: OrdenPedidoDetalleEntity) => {

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
                    key="KEY5"
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

