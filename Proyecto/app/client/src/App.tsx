import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



// import React, { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, Button, theme } from 'antd';
// import { Outlet, Link } from "react-router-dom";


// const { Header, Sider, Content } = Layout;

// const App: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: 'nav 1',

//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'nav 2',
//             },
//             {
//               key: '3',
//               icon: <UploadOutlined />,
//               label: 'nav 3',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }}>
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//           }}
//         >
//         <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;