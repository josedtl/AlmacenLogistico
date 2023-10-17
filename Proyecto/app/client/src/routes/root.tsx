import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, Link } from "react-router-dom";


const { Header, Sider, Content } = Layout;

const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (


    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/1',
              icon: <UserOutlined />,
              label:   <Link to="/Producto">Producto</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label:   <Link to="/ProductoSave/1">Save</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label:   <Link to="/Categoria">Categoria</Link>,
            },
          ]}
        >

        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
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