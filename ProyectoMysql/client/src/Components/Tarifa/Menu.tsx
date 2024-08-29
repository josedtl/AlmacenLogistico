import React, { useEffect } from 'react';
import { SolutionOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Col, Row, Typography,Spin, Flex, Segmented } from 'antd';
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
                    <Title level={2}> Tarifa</Title>
                </Col>


                <Col xs={24}>
                    <Flex gap="small" align="flex-start" vertical>
                        <Segmented
                            options={[
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>
                                            <Link to={`/Individual`}>
                                                <Avatar
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    size={170}
                                                    icon={<UserSwitchOutlined />}
                                                />
                                            </Link>
                                            <div>Individual</div>
                                        </div>
                                    ),
                                    value: 'user1',
                                },
                                {
                                    label: (
                                        <div style={{ padding: 4 }}>
                                            <Link to={`/Grupal`}>
                                                <Avatar
                                                    style={{ backgroundColor: '#f56a00' }}
                                                    size={170}
                                                    icon={<SolutionOutlined />}
                                                />
                                            </Link>
                                            <div>Grupal</div>
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