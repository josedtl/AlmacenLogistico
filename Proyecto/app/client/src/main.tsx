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
import './index.css'
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
import PageOrdenPedidoSave from "./Components/OrdenPedido/Save";

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
      { path: "ProductoSave/:Id", element: <PageProdcutoSave />, },
      { path: "OrdenPedido", element: <PageOrdenPedido />, },
      { path: "OrdenPedidoSave/:Id", element: <PageOrdenPedidoSave />, },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
