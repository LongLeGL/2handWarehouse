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
import CheckOutPage from './views/components/CheckOutPage';
import OrderPage from './views/components/OrderPage';
import OrderedPage from './views/components/OrderedPage';
import ProductPosting from './views/ProductPostingPage';
import OrderValidate from './views/components/OrderValidate';
import DeliveryStatus from './views/components/DeliveryStatus';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

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
        element: <ProductViewing
          mainImage={[{ id: '1', url: "https://down-vn.img.susercontent.com/file/c3c76a6e6bc7557377c4ac31adcff646" },
          { id: '2', url: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6afd17vtrba" },
          { id: '3', url: "https://down-vn.img.susercontent.com/file/bbf41598d31e6414c79e2ea327a55d7c" },
          { id: '4', url: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-b5nywz8t4jkv30" }]}          
          name=""
          price=""
          rate={5}
          description=""
          location=""
          contact={[{ phone: "" }, { addr: "" }]}
        />,
      },
      {
        path: "/2HandWarehouse/PostItem",
        element: <ProductPosting/>,
      },
      {
        path: "/2HandWarehouse/Checkout",
        element: <CheckOutPage/>,
      },
      {
        path: "/2HandWarehouse/Order",
        element: <OrderPage/>,
      },
      {
        path: "/2HandWarehouse/Ordered",
        element: <OrderedPage/>,
      },
      {
        path: "/2HandWarehouse/OrderValidate",
        element: <OrderValidate/>,
      },
      {
        path: "/2HandWarehouse/DeliveryStatus",
        element: <DeliveryStatus/>,
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
    <PayPalScriptProvider options={{"clientId":"ASzyUuWNg7SKgxpZs-IGy2ImRXn1McC31v6PHbGGVot8r9HZHIYWr7rH5rlpthjts_RE-RuzQAzrJnZp"}}>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
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