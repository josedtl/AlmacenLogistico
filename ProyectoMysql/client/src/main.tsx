// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )





import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PageCategoria from "./Components/Categoria/Main";
import PageTipoProducto from "./Components/TipoProducto/Main";
import PageMarca from "./Components/Marca/Main";
import PageModelo from "./Components/Modelo/Main";
import PageProdcuto from "./Components/Producto/Main";
import PageProdcutoSave from "./Components/Producto/Save";
import PageOrdenPedido from "./Components/OrdenPedido/Main";
import PageOrdenPedidoSave from "./Components/OrdenPedido/OrdenPedidoDetalle/Save";
import PagePersonaNatural from "./Components/PersonaNatural/Main";
import PagePersonaNaturalSave from "./Components/PersonaNatural/Save";
import PageEmpresa from "./Components/Empresa/Main";
import PageEmpresaSave from "./Components/Empresa/Save";
import PageCliente from "./Components/Cliente/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "Categoria", element: <PageCategoria />, },
      { path: "TipoProducto", element: <PageTipoProducto />, },
      { path: "Marca", element: <PageMarca />, },
      { path: "Modelo", element: <PageModelo />, },
      { path: "Producto", element: <PageProdcuto />, },
      { path: "PersonaNatural", element: <PagePersonaNatural />, },
      { path: "PersonaNaturalSave/:Id", element: <PagePersonaNaturalSave />, },
      { path: "ProductoSave/:Id", element: <PageProdcutoSave />, },
      { path: "OrdenPedido", element: <PageOrdenPedido />, },
      { path: "OrdenPedidoSave/:Id", element: <PageOrdenPedidoSave />, },
      { path: "Empresa", element: <PageEmpresa />, },
      { path: "EmpresaSave/:Id", element: <PageEmpresaSave />, },
      { path: "Cliente", element: <PageCliente />, },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
