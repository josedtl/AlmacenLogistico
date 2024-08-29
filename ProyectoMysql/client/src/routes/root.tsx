import React, { useState } from 'react';
import {
  SolutionOutlined,
  ReconciliationOutlined,
  BlockOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, theme } from 'antd';
import { Outlet, Link } from "react-router-dom";
import type { MenuProps } from 'antd';
import { useAuth } from '../Components/AuthContext.tsx';
import "../StylesCSS/StyleMaestro.css"

const { Header, Sider, Content } = Layout;



const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { logout } = useAuth();

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }


  const items: MenuItem[] = [
    getItem('Solicitar', 'L1', <SolutionOutlined />,
      [
        getItem(<Link to="/OrdenPedido">Orden de Pedido</Link>, 'L1_a'),
        getItem(<Link to="/OrdenCompra">Orden de Compra</Link>, 'L1_2')
      ]),
    getItem('Operación', 'A2', <ReconciliationOutlined />,
      [getItem(<Link to="/Reserva">Reserva</Link>, 'A2_3'),
      getItem(<Link to="/Recepcion">Recepción</Link>, 'A2_1'),
      getItem(<Link to="/Despacho">Despacho</Link>, 'A2_2'),
      getItem(<Link to="/StockMercaderia">Stock</Link>, 'A2_4')
      ]),
    getItem('Catalogo', 'C1', <BlockOutlined />,
      [
        getItem(<Link to="/Producto/Menu">Artículo</Link>, 'C1_55'),
        getItem(<Link to="/Entidad">Entidad</Link>, 'C1_6'),
        getItem(<Link to="/Tarifa">Tarifa</Link>, 'C1_7'),
      ]),
  ];
  const [collapsed, setCollapsed] = useState(false);
  return (


    <Layout style={{ minHeight: '100vh', marginTop: '-8px', marginLeft: '-8px', marginBottom: '-8px', marginRight: '-4px' }}>
      <Sider
        trigger={null} collapsible collapsed={collapsed}

      >

        <div style={{ height: '60px', background: '#001529' }}  >
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}

        >

        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#D6D6D6' }}>


          <Row>
            <Col span={2}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Col>

            <Col span={21}>

              <h4 style={{ color: 'black', float: 'right', marginTop: '-2px', marginRight: '0px' }}>Usuario</h4>
              <div>
                <button onClick={logout}>Cerrar Sesión</button>
                {/* Resto del componente Root */}
              </div>
            </Col>

          </Row>

        </Header>
        <Content
          style={{
            margin: '0px 16px 0px 16px',
            padding: 0,
            minHeight: 100,
            background: colorBgContainer,
          }}
        >
          <Outlet />

        </Content>
      </Layout>
    </Layout>
  );
};
export default Root;
