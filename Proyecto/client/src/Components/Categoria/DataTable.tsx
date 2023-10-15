// "use client"
import React from 'react';
import ModalItem from '@/Components/Categoria/ModalItem'
import CategoriaService from '@/Service/CategoriaService';
import { CategoriaEntity } from '@/Models/CategoriaEntity';
import { Button, Table, Modal, Space } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Card, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { el, ro } from 'date-fns/locale';
type Props = {
    DataList: CategoriaEntity[];
    updateState: any;
    deleteItemFromState: any;
    EsTabla: boolean
}

const DataTable: React.FC<Props> = (props) => {
    const sCategoria = new CategoriaService();
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
            title: 'Nombre',
            dataIndex: 'Nombre',
            key: 'Nombre',
        },
        {
            title: 'Fecha de registro',
            dataIndex: 'FechaRegistro',
            key: 'FechaRegistro',
        },
        {
            title: 'Usuario',
            dataIndex: 'CodUsuario',
            width: 'Auto',
            key: 'CodUsuario',
        }, {
            title: 'Action',
            width: '100px',
            key: 'action',
            render: (text: any, record: CategoriaEntity) => (
                <span>

                    <Button
                        type='dashed'
                        onClick={() => deleteItem(record.CategoriaId)}
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
            ),
        },

    ];

    const dataWithKeys = props.DataList.sort((a, b) => b.CategoriaId - a.CategoriaId).map((item, zIndex) => {
        return {
            ...item,
            key: item.CategoriaId,
            Cont: (zIndex + 1),
        };
    });

    const DeleteItemAll = async (CategoriaId: number) => {
        const deleted = await sCategoria.deleteItem(CategoriaId);
        if (deleted) {
            props.deleteItemFromState(CategoriaId);
        } else {
            console.log("Delete operation failed");
        }
    }

    const deleteItem = async (CategoriaId: number) => {

        modal.confirm({
            title: 'Mensaje del Sistema',
            icon: <ExclamationCircleOutlined />,
            content: '¿Desea eliminar el registro?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                DeleteItemAll(CategoriaId);
            },
            onCancel() {
                console.log('Cancel');
            },
        });


    };
    const { Meta } = Card;

    const ListaCard = () => {
        if (props.EsTabla) {


            return (
                <>
                    <Row gutter={16} style={{ backgroundColor: '#FAFAFA' }} >
                        {dataWithKeys.map(row => (

                            <Col   key={row.Cont}  xs={24} md={12} lg={8} xl={6} xxl={4}>
                                <Card hoverable={true}
                               
                                    style={{ marginTop: '10Px', }}
                                    actions={[
                                        <DeleteFilled
                                            style={{ color: "#C64541" }}
                                            onClick={() => deleteItem(row.CategoriaId)}
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

