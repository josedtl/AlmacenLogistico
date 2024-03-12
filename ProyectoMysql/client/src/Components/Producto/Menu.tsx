import React, { useEffect, useState } from 'react';
import { GoldOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Col, Row, Typography, Card, Button, Spin, Input, Flex, Segmented } from 'antd';
import { Link } from "react-router-dom";

function Menu() {
    const [CargarPage, setCargarPage] = React.useState(true);
    const { Title } = Typography;
    useEffect(() => {
        setCargarPage(false);
    }, []);
    return (
        <Spin spinning={CargarPage} tip="Cargando" size="large">
            <Row>

                <Col xs={24}>
                    <Title level={2}> Artículo</Title>
                </Col>


                <Col xs={24}>
                    <Flex gap="small" align="flex-start" vertical>
                        <Segmented
                            options={[
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>
                                            <Link to={`/Producto`}>
                                                <Avatar
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    size={170}
                                                    icon={<GoldOutlined />}
                                                />
                                            </Link>
                                            <div>Producto</div>
                                        </div>
                                    ),
                                    value: 'user1',
                                },
                                // {
                                //     label: (
                                //         <div style={{ padding: 4 }}>
                                //             <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                //             <div>User 2</div>
                                //         </div>
                                //     ),
                                //     value: 'user2',
                                // },
                                // {
                                //     label: (
                                //         <div style={{ padding: 4 }}>
                                //             <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                //             <div>User 3</div>
                                //         </div>
                                //     ),
                                //     value: 'user3',
                                // },
                            ]}
                        />

                    </Flex>

                </Col>
                <Col xs={24}>
                    <Title level={3}> Enlace</Title>
                </Col>
                <Col xs={24}>
                    <Flex gap="small" align="flex-start" vertical>
                        <Segmented
                            options={[
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>

                                            <Link to={`/Producto/Enlace/M002`}>
                                                <Avatar
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    size={150}
                                                    icon={<BookOutlined />}
                                                />
                                            </Link>
                                            <div>Categoria</div>
                                        </div>
                                    ),
                                    value: 'Categoria',
                                },
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>

                                            <Link to={`/Producto/Enlace/M003`}>
                                                <Avatar
                                                    size={150}
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    icon={<BookOutlined />}
                                                />
                                            </Link>
                                            <div>Tipo de Producto</div>
                                        </div>
                                    ),
                                    value: 'TipoProducto',
                                },
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>

                                            <Link to={`/Producto/Enlace/M004`}>
                                                <Avatar
                                                    size={150}
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    icon={<BookOutlined />}
                                                />
                                            </Link>
                                            <div>Marca</div>
                                        </div>
                                    ),
                                    value: 'Marca',
                                },
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>

                                            <Link to={`/Producto/Enlace/M005`}>
                                                <Avatar
                                                    size={150}
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    icon={<BookOutlined />}
                                                />
                                            </Link>
                                            <div>Modelo</div>
                                        </div>
                                    ),
                                    value: 'Modelo',
                                },
                            ]}
                        />

                    </Flex>



                </Col>

            </Row>

        </Spin>


    )
}

export default Menu;