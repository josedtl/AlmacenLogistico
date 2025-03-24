
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
import PageOrdenPedidoSave from "./Components/OrdenPedido/Save";
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
import PageReservafrom from "./Components/Reserva/Main";
import PageReservaSave from "./Components/Reserva/ReservaDetalle/Save";
import PageTarifaMenu from "./Components/Tarifa/Menu"
import PageTarifaMain from "./Components/Tarifa/Individual/Main";
import PageTarifaSave from "./Components/Tarifa/Individual/Save";
import PageTarifaUpdate from "./Components/Tarifa/Individual/Update";
import PageTarifaGrupalMain from "./Components/Tarifa/Grupal/Main";
import PageTarifaGrupalSave from "./Components/Tarifa/Grupal/Save.tsx";
import PageDespacho from "./Components/Despacho/Main";
import PageDespachoSave from "./Components/Despacho/DespachoDetalle/Save";
import PageStock from "./Components/Stock/Main";
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider } from './Components/AuthContext.tsx';
import Dashboard from './Components/Dashboard/InicioPage';
import CajaMenu from "./Components/Caja/Menu";
import FacturaBoleta from "./Components/Caja/FacturaBoleta/Save.tsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [

      { path: "Producto", element: <PageProdcuto />, },
      { path: "Producto/Menu", element: <PageProductoMenu />, },
      { path: "PersonaNatural", element: <PagePersonaNatural />, },
      { path: "PersonaNaturalSave/:Id", element: <PagePersonaNaturalSave />, },
      { path: "ProductoSave/:Id", element: <PageProdcutoSave />, },
      { path: "OrdenPedido", element: <PageOrdenPedido />, },
      { path: "OrdenPedidoSave/:Id", element: <PageOrdenPedidoSave />, },
      { path: "Empresa", element: <PageEmpresa />, },
      { path: "EmpresaSave/:Id", element: <PageEmpresaSave />, },
      { path: "Producto/Enlace/:Id", element: <ProductoEnlace />, },
      { path: "Entidad", element: <EntidadMenu />, },
      { path: "OrdenCompra", element: <PageOrdenCompra />, },
      { path: "OrdenCompraSave/:Id", element: <PageOrdenCompraSave />, },
      { path: "Recepcion", element: <PageRecepcion />, },
      { path: "RecepcionSave/:Id", element: <PageRecepcionSave />, },
      { path: "Reserva", element: <PageReservafrom />, },
      { path: "ReservaSave/:Id", element: <PageReservaSave />, },
      { path: "Tarifa", element: <PageTarifaMenu />, },
      { path: "TarifaI", element: <PageTarifaMain />, },
      { path: "TarifaSave/:Id", element: <PageTarifaSave />, },
      { path: "TarifaUpdate/:Id", element: <PageTarifaUpdate />, },
      { path: "TarifaG", element: <PageTarifaGrupalMain />, },
      { path: "TarifaGrupalSave/:Id", element: <PageTarifaGrupalSave />, },
      { path: "Despacho", element: <PageDespacho />, },
      { path: "DespachoSave/:Id", element: <PageDespachoSave />, },
      { path: "StockMercaderia", element: <PageStock />, },
      { path: "Dashboard", element: <Dashboard />, },
      { path: "Caja", element: <CajaMenu />, },
      { path: "FacturaBoleta", element: <FacturaBoleta />, },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
