"use client"
import React from 'react';
import { EditFilled } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Link } from 'react-router-dom';
import { PropsTable } from '../../Lib/PropsItem'
import { Card, Col, Row, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../Lib/ResourceModel/DataTableType'

import { DespachoEntity } from '../..//Models/DespachoEntity';

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
            title: 'Codigo',
            dataIndex: 'Codigo',
            key: 'Codigo',
            width: 110
        },
  
        {
            title: 'Nombre',
            dataIndex: 'Nombre',
            key: 'Nombre',
            width: 140
        },
        {
            title: 'Documento',
            dataIndex: 'Documento',
            key: 'Documento',
            width: 140
        },
        {
            title: 'NombreCompleto',
            dataIndex: 'NombreCompleto',
            key: 'NombreCompleto',
            width: 140
        },  
        {
            title: 'Fecha de Registro',
            dataIndex: 'FechaRegistro',
            width: '150px',
            key: 'FechaRegistro',
            render: (date: string) => moment(date).format('DD-MM-YYYY HH:mm'),
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 70,
            key: 'action',
            render: (record: DespachoEntity) => (
                <span>

                    <Link to={`/DespachoSave/${record.OrdenPedidoId}`}>
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

    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenPedidoId - a.OrdenPedidoId).map((item, zIndex) => {
        return {
            ...item,
            key: item.OrdenPedidoId,
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
                                        <Link to={`/DespachoSave/${row.OrdenPedidoId}`}>
                                            <EditFilled
                                                style={{ color: "#BB9B32" }}
                                            />
                                        </Link>
                                    ]}
                                    bordered={false}>
                                    {/* <p> {row.Nombre}</p>
                                    <p>{row.NombreCompleto}</p> */}

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

