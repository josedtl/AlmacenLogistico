// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainLayout from "./components/layout/MainLayout";
// import { routes } from "./routes";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           {routes}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




// import MainLayout from "./components/layout/MainLayout";
// import { routes } from "./routes";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About';
import { User } from './components/User';
import { Navbar } from './components/Navbar';
import { Menulateral } from './components/Menulateral';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import Ejemplo from './components/Ejemplo';
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
                <Route path="/ejemplo" element={<Ejemplo />} />
                <Route path="/about" element={<About />} />
              </Routes>
          
          </div>
        </div>
      </div>




    </BrowserRouter>
  );
}

export default App;