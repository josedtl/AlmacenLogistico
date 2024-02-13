import React from 'react';
import ModalItem from '../MerLista/ModalItem'
import MerListaService from '../../Service/MerListaService.tsx'
import { MerListaEntity } from '../../Models/MerListaEntity.tsx';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row, Button, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PropsTable } from '../../Lib/PropsItem'
import moment from 'moment';
import 'moment/locale/es';
import { DataType } from '../../Lib/ResourceModel/DataTableType'

const DataTable: React.FC<PropsTable> = (props) => {
    const sMerLista = new MerListaService();
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
            title: 'Codigo',
            dataIndex: 'Codigo',
            width: '120px',
            key: 'Codigo',
        },
        {
            title: 'Nombre',
            dataIndex: 'Nombre',
            width: '25vh',
            key: 'Nombre',
        },
        {
            title: 'Descripcion',
            dataIndex: 'Descripcion',
            width: '25vh',
            key: 'Descripcion',
        },
        {
            title: 'Fecha de registro',
            dataIndex: 'FechaRegistro',
            width: '160px',
            key: 'FechaRegistro',
            render: (date: string) => moment(date).format('DD/MM/YYYY hh:mm'),
        },
        {
            title: 'Usuario',
            dataIndex: 'CodUsuario',
            width: '150px',
            key: 'CodUsuario',
        }, {
            title: 'Action',
            fixed: 'right',
            width: 100,
            key: 'action',
            render: ( record: MerListaEntity) => 
                <span>

                    <Button
                        type='dashed'
                        onClick={() => deleteItem(record.ListaId)}
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

    const dataWithKeys = props.DataList.sort((a, b) => b.ListaId - a.ListaId).map((item, zIndex) => {
        return {
            ...item,
            key: item.ListaId,
            Cont: (zIndex + 1),
        };
    });

    const DeleteItemAll = async (ListaId: number) => {
        const deleted = await sMerLista.deleteItem(ListaId);
        if (deleted) {
            props.deleteItemFromState(ListaId);
        } else {
            console.log("Delete operation failed");
        }
    }

    const deleteItem = async (ListaId: number) => {

        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea eliminar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                DeleteItemAll(ListaId);
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
                                            onClick={() => deleteItem(row.ListaId)}
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

