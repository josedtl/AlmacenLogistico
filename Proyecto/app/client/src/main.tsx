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
import PageProdcuto from "./Components/Producto/page";
import PageProdcutoSave from "./Components/Producto/ProductoSave";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "Categoria",
        element: <PageCategoria />,
      }, 
      {
        path: "Producto",
        element: <PageProdcuto />,
      },  {
        path: "ProductoSave/:Id",
        element: <PageProdcutoSave />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
