import React from 'react';
import { Routes, Route, Outlet} from "react-router-dom";
import ProductViewing from './ProductViewPage';
import ProductPosting from './ProductPostingPage';
import './App.css'


import UpperBar from './components/UpperBar';
import ViewItem from './ViewItem';
import HomePage from './HomePage';

import Login from './Login';
import Footer from './components/Footer';

// import ResultPage from './ResultPage'




function App() {
  return (
    <React.Fragment>
      <UpperBar />
      <Outlet/>
      {/* <Routes>
        <Route path=''>
          <Route index element={<HomePage/>} exact='True' />
          <Route path='Login' element={<Login/>} exact='True' />
       
          <Route path="/ViewItem/:ItemName/:userName" element={<ViewItem/>} exact='True' />
          <Route path="/ProductView" element={<ProductViewing
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
          />} exact='True' />
          <Route path="/ProductPost" element={<ProductPosting />} exact='True' />
        </Route>
      </Routes> */}

    </React.Fragment>
  );
}

export default App;
