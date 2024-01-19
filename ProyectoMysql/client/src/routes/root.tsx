import React from 'react';
import {
  SolutionOutlined,
  ReconciliationOutlined,
  BlockOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
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
        getItem(<Link to="/">Orden de Compra</Link>, 'L1_2')
      ]),
    getItem('Operación', 'A2', <ReconciliationOutlined />,
      [
        getItem(<Link to="/">Recepción</Link>, 'A2_1'),
        getItem(<Link to="/">Despacho</Link>, 'A2_2')
      ]),
    getItem('Catalogo', 'C1', <BlockOutlined />,
      [
        getItem(<Link to="/Categoria">Categoria</Link>, 'C1_1'),
        getItem(<Link to="/Marca">Marca</Link>, 'C1_2'),
        getItem(<Link to="/Modelo">Modelo</Link>, 'C1_3'),
        getItem(<Link to="/TipoProducto">Tipo de producto</Link>, 'C1_4'),
        getItem(<Link to="/Producto">Producto</Link>, 'C1_5'),
        getItem(<Link to="/PersonaNatural">Persona Natural</Link>, 'C1_6'),
        getItem(<Link to="/Empresa">Empresa</Link>, 'C1_7'),
        getItem(<Link to="/Cliente">Cliente</Link>, 'C1_8'),
      ]),
  ];
  return (


    <Layout>
      <Sider

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
          height:'calc(14px + 100vh)',
          marginTop:'0px',
          marginLeft :'-10px'
        }}
      >
        <div style={{ height: '175px', width: '200px', background: '#B1B1B1' }} className="demo-logo-vertical" >
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
        <Header style={{
          padding: 0,
          background: '#001529',
          width: '100%',
          height: '50px',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: 1000,
          paddingBottom: '10px'
        }}>


          <h3 style={{ color: 'white', float: 'right', marginTop: '-2px', marginRight: '10px' }}>David Timo</h3>
    
    
        </Header>
        <Content
          style={{
            margin: '70px 16px',
            padding: 0,
            minHeight: 200,
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
