
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About';
import { User } from './components/User';
import { Navbar } from './components/Navbar';
import { Menulateral } from './components/Menulateral';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import FormMarca from './components/Marca/FormMarca';
import FormModelo from './components/Modelo/FormModelo';
import FormTipoProducto from './components/TipoProducto/FormTipoProducto';
import FormProducto from './components/Producto/FormProducto';
import CargarCombo from './components/AutoComplete/CargarCombo';
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
              <Route path="/Marca/FormMarca" element={<FormMarca />} />
              <Route path="/Modelo/FormModelo" element={<FormModelo />} />
              <Route path="/Producto/FormProducto" element={<FormProducto />} />
              <Route path="/AutoComplete/CargarCombo" element={<CargarCombo />} />
              <Route path="/about" element={<About />} />
            </Routes>

          </div>
        </div>
      </div>




    </BrowserRouter>
  );
}

export default App;