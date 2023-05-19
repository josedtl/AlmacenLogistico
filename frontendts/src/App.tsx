
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import { User } from './components/User';
import { Navbar } from './components/Navbar';
import { Menulateral } from './components/Menulateral';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/Lumen/bootstrap.min.css';
import FormMarca from './components/Marca/FormMarca';
import FormModelo from './components/Modelo/FormModelo';
import FormTipoProducto from './components/TipoProducto/FormTipoProducto';
import FormProducto from './components/Producto/FormProducto';
import CargarCombo from './components/AutoComplete/CargarCombo';
import Asignar from './components/EjemploPArametros/Asignar';
import Mostrar from './components/EjemploPArametros/Mostrar';
import FormProductoMain from './components/Producto/FormProductoMain';
import OrdenPedidoMain from './components/OrdenPedido/OrdenPedidoMain';
import OrdenPedidoSave from './components/OrdenPedido/OrdenPedidoSave';

function App() {
  return (
    <BrowserRouter>

      <div className="container-fluid">



        {/* <Navbar /> */}
        <div className="row flex-nowrap">



          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

            <Menulateral />


          </div>
          <div className="col py-3">

            <Routes>
              <Route path="/" element={<User />} />
              <Route path="/TipoProducto/FormTipoProducto" element={<FormTipoProducto />} />
              <Route path="/Marca/FormMarca" element={<FormMarca/>} />
              <Route path="/Modelo/FormModelo" element={<FormModelo />} />
              <Route path="/Producto/FormProducto" element={<FormProducto />} />
              <Route path="/Producto/FormProducto/:Id" element={<FormProducto />} />
              <Route path="/AutoComplete/CargarCombo" element={<CargarCombo />} />
              <Route path="/About" element={<About />} />
              <Route path="/Asignar" element={<Asignar/>} />
              <Route path="/Mostrar/:user" element={<Mostrar/>} />
              <Route path="/Producto/FormProductoMain" element={<FormProductoMain/>} />
              <Route path="/OrdenPedido/OrdenPedidoMain" element={<OrdenPedidoMain/>} />
              <Route path="/OrdenPedido/OrdenPedidoSave" element={<OrdenPedidoSave/>} />
            </Routes>

          </div>
        </div>
      </div>




    </BrowserRouter>
  );
}

export default App;