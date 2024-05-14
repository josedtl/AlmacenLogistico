"use client"
import React from 'react';
import { OrdenPedidoEntity } from '../..//Models/OrdenPedidoEntity';
import { EditFilled, CaretRightOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Link } from 'react-router-dom';
import { PropsTable } from '../../Lib/PropsItem'
import { Card, Col, Row, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../Lib/ResourceModel/DataTableType'
import { ReservaEntity } from '../../Models/ReservaEntity';

const DataTable: React.FC<PropsTable> = (props) => {
    const [size] = React.useState<SizeType>('middle');
    const columns: ColumnsType<DataType> = [
        // {
        //     title: 'Nº',
        //     dataIndex: 'Cont',
        //     width: '50px',
        //     key: 'Cont',
        // },


        {
            title: 'Codigo',
            dataIndex: 'Codigo',
            key: 'Codigo',
            width: 110
        },
        {
            title: 'Nombre',
            dataIndex: 'Nombre',
            width: '250px',
            key: 'Nombre',
        },
        {
            title: 'Unidad de medida',
            dataIndex: 'CodigoComercial',
            key: 'CodigoComercial',
            width: 110
        },
        {
            title: 'CantidaPedido',
            dataIndex: 'CantidaPedido',
            width: '100px',
            key: 'CantidaPedido',
        },
        {
            title: 'Cantidad',
            dataIndex: 'Cantidad',
            width: '100px',
            key: 'Cantidad',
        },
        {
            title: 'Stock',
            dataIndex: 'Stock',
            width: '100px',
            key: 'Stock',
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 70,
            key: 'action',
            render: (record: ReservaEntity) => (
                <span>

                    <Link to={`/ReservaSave/${record.MercaderiaId}`}>
                        <Button
                            type='dashed'
                            style={{ float: "right", marginRight: "10px", color: "#BB9B32", backgroundColor: "white", borderColor: "#BB9B32" }}
                            size={size}
                            icon={<EditFilled />}
                        >

                        </Button>
                    </Link>


                </span>
            ),
        },

    ];

    const dataWithKeys = props.DataList.sort((a, b) => b.MercaderiaId - a.MercaderiaId).map((item, zIndex) => {
        return {
            ...item,
            key: item.MercaderiaId,
            Cont: (zIndex + 1)
        };
    });



    const ListaCard = () => {
        if (props.EsTabla) {

            return (
                <>
                    <Row gutter={16} style={{ backgroundColor: '#FAFAFA' }} >
                        {dataWithKeys.map(row => (

                            <Col key={row.Cont} xs={24} md={12} lg={8} xl={6} xxl={4}>
                                <Card hoverable={true} title={row.Cont + ".  " + row.Codigo}
                                    style={{ marginTop: '10Px', }}
                                    actions={[
                                        <Link to={`/OrdenPedidoSave/${row.OrdenPedidoId}`}>
                                            <EditFilled
                                                style={{ color: "#BB9B32" }}
                                            />
                                        </Link>
                                    ]}
                                    bordered={false}>
                                    <p> {row.NomEstadoProceso}</p>
                                    <p>{row.NomResponsable}</p>

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

            {ListaCard()}
        </div>

    );
}

export default DataTable;

