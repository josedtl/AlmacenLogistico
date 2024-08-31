"use client"
import React from 'react';
import { EditFilled } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Link } from 'react-router-dom';
import { PropsTable } from '../../../Lib/PropsItem'
import { Card, Col, Row, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../../Lib/ResourceModel/DataTableType'
import { TarifaEntity } from '../../../Models/TarifaEntity';

const DataTable: React.FC<PropsTable> = (props) => {
    const [size] = React.useState<SizeType>('middle');
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: 25,
            key: 'Cont',
        },    
        {
            title: 'Mercaderia',
            dataIndex: 'NomProducto',
            key: 'NomProducto',
            width: 250
        },
        {
            title: 'Unidad Medida',
            dataIndex: 'NomUnidad',
            key: 'NomUnidad',
            width: 80
        },
        {
            title: 'Moneda',
            dataIndex: 'NomMoneda',
            key: 'NomMoneda',
            width:80
        },
        {
            title: 'Impuesto',
            dataIndex: 'NomImpuesto',
            key: 'NomImpuesto  ', 
            width:80
        },
        {
            title: '% Impuesto',
            dataIndex: 'Valor',
            key: 'Valor  ', 
            width:80
        },
        {
            title: 'Precio S/Impuesto',
            dataIndex: 'PrecioSinImpuesto',
            key: 'PrecioSinImpuesto',
            width:60
        },
        {
            title: 'Precio C/Impuesto',
            dataIndex: 'PrecioConImpuesto',
            key: 'PrecioConImpuesto',
            width:60
        },
        {
            title: 'Fecha Creacion',
            dataIndex: 'FechaCreacion',
            width:80,
            key: 'FechaCreacion',
            render: (date: string) => moment(date).format('DD/MM/YYYY hh:mm'),
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 70,
            key: 'action',
            render: (record: TarifaEntity) => (
                <span>

                    <Link to={`/TarifaUpdate/${record.TarifaId}`}>
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

    const dataWithKeys = props.DataList.sort((a, b) => b.TarifaId - a.TarifaId).map((item, zIndex) => {
        return {
            ...item,
            key: item.TarifaId,
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
                                <Card hoverable={true}

                                    style={{ marginTop: '10Px', }}
                                    actions={[
                                        <Link to={`/TarifaUpdate/${row.TarifaId}`}>
                                            <EditFilled
                                                style={{ color: "#BB9B32" }}
                                            />
                                        </Link>
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

