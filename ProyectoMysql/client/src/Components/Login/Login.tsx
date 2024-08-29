import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.tsx';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../App.css";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    login('fake-jwt-token');
    navigate('/');
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [loading, setLoading] = useState(false);

  // const onFinish = (values: any) => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     message.success("Logged in successfully!");
  //   }, 2000);
  // };

  return (

    <div className="wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <p className="title">DAFRAN SOLUTIONS</p>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Por favor ingrese su nombre de usuario!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Usuario"
            autoFocus
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor ingrese su Contraseña!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"

            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >Ingresar
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Olvidaste tu contraseña?
          </a>
        </Form.Item>
      </Form>

    </div>
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    //   <Form
    //     name="basic"
    //     labelCol={{ span: 8 }}
    //     wrapperCol={{ span: 16 }}
    //     style={{ maxWidth: 400, width: '100%' }}
    //     initialValues={{ remember: true }}
    //     onFinish={onFinish}
    //     onFinishFailed={onFinishFailed}
    //     autoComplete="off"
    //   >
    //     <Form.Item<FieldType>
    //       label="Usuario"
    //       name="username"
    //       rules={[{ required: true, message: 'Please input your username!' }]}
    //     >
    //       <Input />
    //     </Form.Item>

    //     <Form.Item<FieldType>
    //       label="Contraseña"
    //       name="password"
    //       rules={[{ required: true, message: 'Please input your password!' }]}
    //     >
    //       <Input.Password />
    //     </Form.Item>



    //     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //       <Button type="primary" htmlType="submit">
    //         Acceder
    //       </Button>
    //     </Form.Item>
    //   </Form>
    // </div>
  );
};

export default Login;
