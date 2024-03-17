"use client"
import React from 'react';
import { OrdenCompraEntity } from '../..//Models/OrdenCompraEntity';
import { EditFilled, CaretRightOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Link } from 'react-router-dom';
import { PropsTable } from '../../Lib/PropsItem'
import { Card, Col, Row, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../Lib/ResourceModel/DataTableType'

const DataTable: React.FC<PropsTable> = (props) => {
    const [size] = React.useState<SizeType>('middle');
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: '50px',
            key: 'Cont',
        },
        {
            title: 'Estado',
            width: 130,
            key: 'Estado',
            render: (record: OrdenCompraEntity) => {

                let color = "while";

                if (record.ValorEstadoProceso === 1) {
                    color = "green";
                } else if (record.ValorEstadoProceso === 2) {
                    color = "green";
                } else if (record.ValorEstadoProceso === 3) {
                    color = "blue";
                }
                return <span>
                    <CaretRightOutlined
                        style={{ color }} /> {record.NomEstadoProceso}



                </span>
            },
        },
        {
            title: 'Codigo',
            dataIndex: 'Codigo',
            key: 'Codigo',
            width: 110
        },
        {
            title: 'Documento',
            dataIndex: 'NumDocumentoProveedor',
            key: 'NumDocumentoProveedor',
            width: 140
        },
        {
            title: 'Proveedor',
            dataIndex: 'NomProveedor',
            width: '250px',
            key: 'NomProveedor',
        },
        {
            title: 'Fecha de Emision',
            dataIndex: 'FechaEmision',
            width: '150px',
            key: 'FechaEmision',
            render: (date: string) => moment(date).format('DD-MM-YYYY'),
        },
        {
            title: 'Fecha de Emision',
            dataIndex: 'FechaRegistro',
            width: '150px',
            key: 'FechaRegistro',
            render: (date: string) => moment(date).format('DD-MM-YYYY HH:mm'),
        },
        {
            title: 'Usuario',
            dataIndex: 'CodUsuario',
            width: '100px',
            key: 'CodUsuario',
        }, {
            title: 'Action',
            fixed: 'right',
            width: 70,
            key: 'action',
            render: (record: OrdenCompraEntity) => (
                <span>

                    <Link to={`/OrdenCompraSave/${record.OrdenCompraId}`}>
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

    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenCompraId - a.OrdenCompraId).map((item, zIndex) => {
        return {
            ...item,
            key: item.OrdenCompraId,
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
                                        <Link to={`/OrdenCompraSave/${row.OrdenCompraId}`}>
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

