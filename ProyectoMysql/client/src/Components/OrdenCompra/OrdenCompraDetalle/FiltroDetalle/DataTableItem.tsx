import React from 'react';
import ModalItem from '../ModalItem'
import {  OrdenPedidoFiltroOCDModel} from '../../../../Models/OrdenPedidoDetalleEntity';
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

// import  from 'react-emotion';
const DataTable: React.FC<PropsTable> = (props) => {
    const [size] = React.useState<SizeType>('middle');
    const [modal, contextHolder] = Modal.useModal();
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nº',
            dataIndex: 'Cont',
            width: 20,
            key: 'Cont',

        }, {
            title: 'Orden Pedido',
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
            title: 'Action',
            fixed: 'right',
            width: 60,
            key: 'action',
            render: (record: OrdenPedidoFiltroOCDModel) =>
                <span>

<Checkbox onChange={onChange}></Checkbox>


                </span>
            ,
        },

    ];

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };


    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenPedidoDetalleEntity + a.OrdenPedidoDetalleEntity).map((item, zIndex) => {
        return {
            ...item,
            key: zIndex,
            Cont: (zIndex + 1),
          
        };

    });

    const DeleteItemAll = async (OrdenPedidoDetalleEntity: OrdenPedidoFiltroOCDModel) => {
        OrdenPedidoDetalleEntity.Action = ProcessActionEnum.Delete;
        props.deleteItemFromState(OrdenPedidoDetalleEntity);
    }

    const deleteItem = async (OrdenPedidoDetalleEntity: OrdenPedidoFiltroOCDModel) => {

        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea eliminar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                OrdenPedidoDetalleEntity.Action = ProcessActionEnum.Delete;
                DeleteItemAll(OrdenPedidoDetalleEntity);
            },
            onCancel() { },
        });


    };

    // const header = css({ backgroundColor: 'rgb(100, 108, 140)', color: 'white', margin: '50px'});
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
                                            onClick={() => deleteItem(row.OrdenPedidoDetalleEntity)}
                                            key="setting" />,
                                        <ModalItem
                                            buttonLabel="Edit"
                                            item={row}
                                            updateState={props.updateState}
                                            keyItem={row.key}
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
                    // scroll={{ x: 1500, y: 300 }}
                    scroll={{ x: '100%', y: '45vh' }}
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

