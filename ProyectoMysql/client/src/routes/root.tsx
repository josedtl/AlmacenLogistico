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

const { Header, Sider, Content } = Layout;



const Root: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();



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


    <Layout style={{ minHeight: '100vh', marginTop: '-8px', marginLeft: '-8px', marginBottom: '-8px',marginRight :'-4px' }}>
      <Sider
        trigger={null} collapsible collapsed={collapsed}

      >
        {/* <Sider

        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          background: '#001529',
          height: 'calc(14px + 100vh)',
          marginTop: '0px',
          marginLeft: '-10px'
        }}
      > */}
         <div style={{ height: '60px', background: '#001529' }}  >
            {/* <svg version="1.1" style={{ marginTop: '70px', marginLeft: '45px', alignContent: 'center' }} width="100px" height="100px" viewBox="-0.5 -0.5 172 172" ><defs /><g><ellipse cx="85" cy="85" rx="85" ry="85" fill="#001529" stroke="rgb(0, 0, 0)" pointer-events="all" /><path d="M 50 91 L 130 91 L 130 70 L 150 100 L 130 130 L 130 109 L 50 109 Z" fill="#15616d" stroke="#15616d" stroke-miterlimit="10" pointer-events="all" /><path d="M 20 61 L 100 61 L 100 40 L 120 70 L 100 100 L 100 79 L 20 79 Z" fill="#15616d" stroke="#15616d" stroke-miterlimit="10" transform="rotate(180,70,70)" pointer-events="all" /></g></svg> */}
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
              </Col>
{/* 
              <Col span={1}  >

                
              </Col> */}

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
