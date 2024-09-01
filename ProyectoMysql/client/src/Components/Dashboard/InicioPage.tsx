import React, { useEffect } from 'react';
import { Col, Row, Typography, Card, Spin } from 'antd';
import AreaChart from './Graficos/AreaChart'
import BarChart from './Graficos/BarChart'
import HistogramChart from './Graficos/HistogramChart'
import LineChart from './Graficos/LineChart'
import PieChart from './Graficos/PieChart'
import RadarChart from './Graficos/RadarChart'
import ScatterChart from './Graficos/ScatterChart'

function Inicio() {
    useEffect(() => {
        getItems();
    }, []);

    const [CargarPage, setCargarPage] = React.useState(true);

    const getItems = async () => {
        setCargarPage(false);

    };




    const { Title } = Typography;
    return (
        <Spin spinning={CargarPage} tip="Cargando" size="large">
            <Row>

                <Col xs={18} sm={18} md={12} lg={12} xl={12}>
                    <Title level={2}> Bienvenido</Title>
                </Col>

                <Col xs={6} sm={6} md={12} lg={12} xl={12}>

                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>


                </Col>


                <Col xs={24} sm={24} md={12} lg={12} xl={12}>


                </Col>

            </Row>



            <Card>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <AreaChart />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <PieChart />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <BarChart />
                    </Col>

                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <HistogramChart />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <LineChart />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <RadarChart />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <ScatterChart />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6}>

                    </Col>
                </Row>




            </Card>

        </Spin>

    );
}

export default Inicio;




