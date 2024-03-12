import React, { useEffect, useState } from 'react';
import { SolutionOutlined, UserSwitchOutlined } from '@ant-design/icons';
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
                    <Title level={2}> Entidad</Title>
                </Col>


                <Col xs={24}>
                    <Flex gap="small" align="flex-start" vertical>
                        <Segmented
                            options={[
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>
                                            <Link to={`/PersonaNatural`}>
                                                <Avatar
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    size={170}
                                                    icon={<UserSwitchOutlined />}
                                                />
                                            </Link>
                                            <div>Persona Natural</div>
                                        </div>
                                    ),
                                    value: 'user1',
                                },
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>
                                            <Link to={`/Empresa`}>
                                                <Avatar
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    size={170}
                                                    icon={<SolutionOutlined />}
                                                />
                                            </Link>
                                            <div>Empresa</div>
                                        </div>
                                    ),
                                    value: 'user2',
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