import React from 'react';
import ModalItem from '../Detalle/ModalItem'
import OrdenPedidoDetalleService from '../../../Service/OrdenPedidoService'
import { OrdenPedidoDetalleEntity } from '../../../Models/OrdenPedidoDetalleEntity';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row, Button, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTableDetalle } from '../../../Lib/PropsItem'
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../../Lib/ResourceModel/DataTableType'

const DataTable: React.FC<PropsTableDetalle> = (props) => {
    const sOrdenPedidoDetalle = new OrdenPedidoDetalleService();
    const [size, setSize] = React.useState<SizeType>('middle');
    const [modal, contextHolder] = Modal.useModal();
    const columns = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: '50px',
            key: 'Cont',
        },
        {
            title: 'Producto',
            dataIndex: 'NomProducto',
            width: '50vh',
            key: 'Cont',
        },
        {
            title: 'Cantidad',
            dataIndex: 'CantidadSolicitado',
            width: '160px',
            key: 'Cont',
        },
        {
            title: 'Cantidad F',
            dataIndex: 'CantidadFaltante',
            width: '160px',
            key: 'CantidadFaltante',
        },
        {
            title: 'Action',
            // fixed: 'right',
            width: 100,
            key: 'Cont',
            render: ( record: OrdenPedidoDetalleEntity) => 
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
            key: item.OrdenPedidoDetalleId,
            Cont: (zIndex + 1),
        };
    });

    const DeleteItemAll = async (OrdenPedidoDetalleId: number) => {
        const deleted = await sOrdenPedidoDetalle.deleteItem(OrdenPedidoDetalleId);
        if (deleted) {
            props.deleteItemFromState(OrdenPedidoDetalleId);
        } else {
            console.log("Delete operation failed");
        }
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
                                    {row.Cont + ".  "}   {row.NomProducto}
                                </Card>

                            </Col>


                        ))}
                    </Row>

                </>
            )
        } else {
            return (
                <Table
                    columns={columns}
                    dataSource={dataWithKeys}
                    size="small"
                    scroll={{ x: 'calc(700px + 50%)', y: '100%' }}
                />

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

