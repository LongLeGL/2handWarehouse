import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter,
  RouterProvider, Routes, Route} from "react-router-dom";

import './index.css';

import App from './views/App';
import Login from './views/Login';
import Register from './views/Register';
import ProductViewing from './views/ProductViewPage';
import HomePage from './views/HomePage';

const router = createBrowserRouter([
  {
    path: "/2HandWarehouse",
    element: <App/>,
    children: [
      {
        path: "/2HandWarehouse/Home",
        element: <HomePage/>,
      },
      {
        path: "/2HandWarehouse/ViewProduct",
        element: <ProductViewing/>,
      },
    ],
  },
  {
    path: "/2HandWarehouse/Login",
    element: <Login/>,
  },
  {
    path: "/2HandWarehouse/Register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);











// OLD code:
// <BrowserRouter>
  //   <Routes>
  //     <Route path='2HandWarehouse'>
  //       <Route index element={<App/>} />
  //       <Route path="Login" element={<Login/>} exact='True' />
  //       <Route path="Register" element={<Register/>} exact='True' />
  //     </Route>
  //   </Routes>
  //   </BrowserRouter>

    // <Routes>
    //   <Route index path="*" Component={ App }>
    //     <Route index path="Home" Component={ HomePage } />
    //     <Route index path="ViewProduct" Component={ ProductViewing } />
    //   </Route>
    //   <Route path="login" Component={ Login } />         
    //   <Route path="register" Component={ Register } />   
    // </Routes> 