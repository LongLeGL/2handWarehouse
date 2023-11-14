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
import ProductPosting from './views/ProductPostingPage';

const router = createBrowserRouter([
  {
    path: "/2HandWarehouse",
    element: <App/>,
    children: [
      {
        path: "/2HandWarehouse/Home",
        element: <HomePage
        PopularCatalogue={[
          {id: 1, imagePath: "/images/GroupPhone.png", text: "Phone"},
          {id: 2, imagePath: "/images/GroupCar.png", text: "Car"},
          {id: 3, imagePath: "/images/GroupFruits.png", text: "Fruits"},
          {id: 4, imagePath: "/images/GroupBathroom.png", text: "Bathroom"},
          {id: 5, imagePath: "/images/GroupWorkspace.png", text: "Workspace"},
          {id: 6, imagePath: "/images/GroupAccessories.png", text: "Accessories"},
        ]}
        brand = {{
          imagePath1: "/images/Stocktake.png",
          imagePath2: "/images/Meyer.png",
          imagePath3: "/images/Findgood.png",
        }}
        BestSeller = {{
          BStitle: "Best Seller in US",
          BScate: "Education",
          BSnav: "Explore now",
          BSimage1: "/images/book1.png",
          BSimage2: "/images/book2.png",
        }}
        Categories = {{
          
          CateKind: ["Eletronics", "Gift cards", "Kindle E-reader", "Baby", "Health and Household"],
          CateName: [
             ["Camera", "Home audio", "Office Electronics", "Service Plans", "Curtains", "Coffe Tables"],
             
             ["Appliances", "Cabinets", "Chairs", "Cookware", "Curtains", "Dining Tables"],
             
             ["Beds", "Curtains", "Chets", "Lighting", "Mattresses", "Mirrors"],
             ["Accessories", "Cabinets", "Lighting", "Mirrors", "Showers", "Sinks"],
             ["Bookcases", "Chairs", "Lighting", "Desks", "Drawers", "Organissers"],
          ]
        }}
        LatestProducts ={{
          row1: [
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP1.png"},

            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP2.png"},

            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP3.png"},

            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP4.png"},
          ],
          row2: [
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP5.png"},

            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP6.png"},

            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP7.png"},

            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP8.png"},
          ],
        }}
        ExploreOurProducts ={[
          {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP1.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP2.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP3.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP4.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP5.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP6.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP7.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP8.png"},
        ]}
        ToptrendingProducts ={[
          {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP1.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP2.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP3.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP4.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP5.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP6.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP7.png"},
            {LPname: "Bucklo Wrop Wooden Table", LPprice: "$56.12", 
            LPaddress:"TP. Hồ Chí Minh", LPImagePath: "/images/LP8.png"},
        ]}
        />,
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