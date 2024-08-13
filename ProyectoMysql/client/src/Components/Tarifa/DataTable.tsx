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
import { TarifaEntity } from '../../Models/TarifaEntity';

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
            title: 'Mercaderia',
            dataIndex: 'MercaderiaId',
            key: 'MercaderiaId',
            width: 100
        },
        {
            title: 'Unidad Medida',
            dataIndex: 'UnidadMedidaId',
            key: 'UnidadMedidaId',
            width: 100
        },
        {
            title: 'Moneda',
            dataIndex: 'MonedaId',
            key: 'MonedaId',
            width:100
        },
        {
            title: '% Impuesto',
            dataIndex: 'PorcentajeImpuestoId',
            key: 'PorcentajeImpuestoId  ', 
            width:100
        },
        {
            title: 'Precio Sin Inpuesto',
            dataIndex: 'PrecioSinInpuesto',
            key: 'PrecioSinInpuesto',
            width:100
        },
        {
            title: 'Precio Con Inpuesto',
            dataIndex: 'PrecioConInpuesto',
            key: 'PrecioConInpuesto',
            width:100
        },
        {
            title: 'Fecha Creacion',
            dataIndex: 'FechaCreacion',
            width: '150px',
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

                    <Link to={`/ProductoSave/${record.TarifaId}`}>
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
                                        <Link to={`/ProductoSave/${row.TarifaId}`}>
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

