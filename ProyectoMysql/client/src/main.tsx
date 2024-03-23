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

import PageProdcuto from "./Components/Producto/Main";
import PageProductoMenu from "./Components/Producto/Menu";
import PageProdcutoSave from "./Components/Producto/Save";
import PageOrdenPedido from "./Components/OrdenPedido/Main";
import PageOrdenPedidoSave from "./Components/OrdenPedido/OrdenPedidoDetalle/Save";
import PagePersonaNatural from "./Components/Entidad/PersonaNatural/Main";
import PagePersonaNaturalSave from "./Components/Entidad/PersonaNatural/Save";
import PageEmpresa from "./Components/Entidad/Empresa/Main";
import PageEmpresaSave from "./Components/Entidad/Empresa/Save";
import ProductoEnlace from "./Components/MerLista/Main";
import EntidadMenu from "./Components/Entidad/Menu";
import PageOrdenCompra from "./Components/OrdenCompra/Main";
import PageOrdenCompraSave from "./Components/OrdenCompra/OrdenCompraDetalle/Save";
import PageRecepcion from "./Components/Recepcion/Main";
import PageRecepcionSave from "./Components/Recepcion/RecepcionDetalle/Save";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      // { path: "Categoria", element: <PageCategoria />, },
      // { path: "TipoProducto", element: <PageTipoProducto />, },
      // { path: "Marca", element: <PageMarca />, },
      // { path: "Modelo", element: <PageModelo />, },
      { path: "Producto", element: <PageProdcuto />, },
      { path: "Producto/Menu", element: <PageProductoMenu />, },
      { path: "PersonaNatural", element: <PagePersonaNatural />, },
      { path: "PersonaNaturalSave/:Id", element: <PagePersonaNaturalSave />, },
      { path: "ProductoSave/:Id", element: <PageProdcutoSave />, },
      { path: "OrdenPedido", element: <PageOrdenPedido />, },
      { path: "OrdenPedidoSave/:Id", element: <PageOrdenPedidoSave />, },
      { path: "Empresa", element: <PageEmpresa />, },
      { path: "EmpresaSave/:Id", element: <PageEmpresaSave />, },
      // { path: "Cliente", element: <PageCliente />, },
      { path: "Producto/Enlace/:Id", element: <ProductoEnlace />, },
      { path: "Entidad", element: <EntidadMenu />, },
      { path: "OrdenCompra", element: <PageOrdenCompra />, },
      { path: "OrdenCompraSave/:Id", element: <PageOrdenCompraSave />, },
      { path: "Recepcion", element: <PageRecepcion />, },
      { path: "RecepcionSave/:Id", element: <PageRecepcionSave />, },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
