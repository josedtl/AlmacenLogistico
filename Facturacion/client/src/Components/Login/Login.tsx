import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.tsx';
import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../App.css";
import axios from 'axios';

type FieldType = {
  username: string;
  password: string;
  remember?: boolean;
};

const Login: React.FC = () => {
  const { login } = useAuth(); // Usa una función de contexto para establecer el token
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setLoading(true);
    const URL = import.meta.env.VITE_SOME_KEY;
    login(values.username, values.password);
    navigate('/Dashboard');
   try {
    //   const response = await axios.post(`${URL}/api/Auth/token`, {
    //     username: values.username, // Reemplaza con el nombre de usuario adecuado
    //     password: values.password, // Reemplaza con la contraseña adecuada
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-API-KEY': 'gergjs5435s4fefefusfs2323', // Añadir API Key a los encabezados
    //     },
    //   });
   
    //   if (response.status === 200) {
    //     login(values.username, values.password);

    //     navigate('/Dashboard');
    //}   
    
    } catch (error) {
      // Maneja errores específicos del servidor
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data?.message || 'Error desconocido';
        // Muestra el mensaje de error de la respuesta
        message.error(errorMessage);
      } else {
        // Muestra un mensaje de error genérico
        message.error('Error en el inicio de sesión');
      }
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ username: 'adm', password: '123', remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          >
            Ingresar
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Olvidaste tu contraseña?
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
