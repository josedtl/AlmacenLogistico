import React from 'react';
import ModalItem from './ModalItem'
import { Card, Col, Row, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../../Lib/PropsItem'
import 'moment/locale/es';
import { DataType } from '../../../Lib/ResourceModel/DataTableType'

// import  from 'react-emotion';
const DataTable: React.FC<PropsTable> = (props) => {
    const [modal, contextHolder] = Modal.useModal();
    modal;
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
            title: 'Reservado',
            dataIndex: 'CantidadReservado',
            width: 65,
            key: 'CantidadReservado',
        },
        {
            title: 'Atendido',
            dataIndex: 'CantidadAtendido',
            width: 65,
            key: 'CantidadAtendido',
        },
      

    ];



    const dataWithKeys = props.DataList.sort((a, b) => b.OrdenPedidoDetalleId + a.OrdenPedidoDetalleId).map((item, zIndex) => {
        return {
            ...item,
            key: zIndex,
            Cont: (zIndex + 1),
          
        };

    });

    // const DeleteItemAll = async (OrdenPedidoDetalleId: OrdenPedidoDetalleEntity) => {
    //     OrdenPedidoDetalleId.Action = ProcessActionEnum.Delete;
    //     props.deleteItemFromState(OrdenPedidoDetalleId);
    // }

    // const deleteItem = async (OrdenPedidoDetalleId: OrdenPedidoDetalleEntity) => {

    //     modal.confirm({
    //         title: 'Mensaje del Sistema',
    //         icon: <ExclamationCircleOutlined />,
    //         content: '¿Desea eliminar el registro?',
    //         okText: 'Si',
    //         okType: 'danger',
    //         cancelText: 'No',
    //         onOk() {
    //             OrdenPedidoDetalleId.Action = ProcessActionEnum.Delete;
    //             DeleteItemAll(OrdenPedidoDetalleId);
    //         },
    //         onCancel() { },
    //     });


    // };

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

