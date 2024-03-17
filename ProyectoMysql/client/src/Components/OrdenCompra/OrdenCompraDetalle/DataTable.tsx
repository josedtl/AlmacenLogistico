import React from 'react';
import ModalItem from './ModalItem'
import { OrdenCompraDetalleEntity } from '../../../Models/OrdenCompraDetalleEntity';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row, Button, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../../Lib/PropsItem'
import 'moment/locale/es';
import { DataType } from '../../../Lib/ResourceModel/DataTableType'
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import { red } from '@ant-design/colors';
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
            width: 40,
            key: 'CodigoUM',
        },
        {
            title: 'Solicito',
            dataIndex: 'CantidadSolicitado',
            width: 65,
            key: 'CantidadSolicitado',
        },
        {
            title: 'Faltante',
            dataIndex: 'CantidadFaltante',
            width: 65,
            key: 'CantidadFaltante',
        },
        {
            title: 'Comprado',
            dataIndex: 'CantidadComprado',
            width: 65,
            key: 'CantidadComprado',
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 60,
            key: 'action',
            render: (record: OrdenCompraDetalleEntity) =>
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
                        keyItem={record.keyItem}
                    />



                </span>
            ,
        },

    ];



    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenCompraDetalleId + a.OrdenCompraDetalleId).map((item, zIndex) => {
        return {
            ...item,
            key: zIndex,
            Cont: (zIndex + 1),
          
        };

    });

    const DeleteItemAll = async (OrdenCompraDetalleId: OrdenCompraDetalleEntity) => {
        OrdenCompraDetalleId.Action = ProcessActionEnum.Delete;
        props.deleteItemFromState(OrdenCompraDetalleId);
    }

    const deleteItem = async (OrdenCompraDetalleId: OrdenCompraDetalleEntity) => {

        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea eliminar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                OrdenCompraDetalleId.Action = ProcessActionEnum.Delete;
                DeleteItemAll(OrdenCompraDetalleId);
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
                                            onClick={() => deleteItem(row.OrdenCompraDetalleId)}
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

