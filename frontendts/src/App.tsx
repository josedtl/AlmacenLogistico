
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About';
import { User } from './components/User';
import { Navbar } from './components/Navbar';
import { Menulateral } from './components/Menulateral';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import FormMarca from './components/Catalogo/Marca/FormMarca';  
import FormModelo from './components/Catalogo/Modelo/FormModelo';  
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
                <Route path="/Catalogo/Marca/FormMarca" element={<FormMarca />} />
                <Route path="/Catalogo/Modelo/FormModelo" element={<FormModelo />} />
                <Route path="/about" element={<About />} />
              </Routes>
          
          </div>
        </div>
      </div>




    </BrowserRouter>
  );
}

export default App;