import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, Link } from "react-router-dom";
import type { MenuProps } from 'antd';

const { Header, Sider, Content, Footer } = Layout;



const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
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


  // const items: MenuItem[] = [
  //   getItem(<Link to="/Producto">Logistica</Link>, '1', <UserOutlined />,),
  //   getItem('Option 2', '2', <UserOutlined />),
  //   getItem(<Link to="/Producto">Catalogo</Link>, 'sub1', <UserOutlined />, [
  //     getItem(<Link to="/Producto">Producto</Link>, '3'),
  //     getItem(<Link to="/Categoria">Categoria</Link>, '4'),
  //   ]),
  // ];


  const items: MenuItem[] = [
    getItem('Logistica', 'L1', <UserOutlined />,
      [getItem('Orden de Pedido', 'L1_1'),
      getItem(<Link to="/">Orden de Compra</Link>, 'L1_2')]),
    getItem('Almacen', 'A2', <UserOutlined />,
      [getItem(<Link to="/">Recepcion</Link>, 'A2_1'),
      getItem(<Link to="/">Despacho</Link>, 'A2_2')]),
    getItem('Catalogo', 'C1', <UserOutlined />,
      [getItem(<Link to="/Categoria">Categoria</Link>, 'C1_1'),
      getItem(<Link to="/Producto">Producto</Link>, 'C1_2')]),
    getItem('Administrador', 'C1_3', <UserOutlined />),
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
        style={{ background: '#15616d', marginTop: '-14px' }}
      >
        <div style={{ height: '60px', background: '#15616d' }} className="demo-logo-vertical" >

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


// import { Outlet, Link } from "react-router-dom";
// export default function Root() {
//     return (
//       <>
//         <div id="sidebar">
//           <h1>React Router Contacts</h1>
//           <div>
//             <form id="search-form" role="search">
//               <input
//                 id="q"
//                 aria-label="Search contacts"
//                 placeholder="Search"
//                 type="search"
//                 name="q"
//               />
//               <div
//                 id="search-spinner"
//                 aria-hidden
//                 hidden={true}
//               />
//               <div
//                 className="sr-only"
//                 aria-live="polite"
//               ></div>
//             </form>
//             <form method="post">
//               <button type="submit">New</button>
//             </form>
//           </div>
//           <nav>
//           <ul>
//             <li>
//               <Link to={`Categoria`}>Categoria</Link>
//             </li>
//             <li>
//               <Link to={`contacts/2`}>Your Friend</Link>
//             </li>
//           </ul>
//         </nav>
//         </div>
//           <div id="detail">
//         <Outlet />
//       </div>
//       </>
//     );
//   }