import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css'


import UpperBar from './components/UpperBar';
import ViewItem from './ViewItem';
import HomePage from './HomePage';
import Footer from './components/Footer';
// import ResultPage from './ResultPage'




function App() {
  return (
    <React.Fragment>
      <UpperBar />
      <div className='mainBody'>
        <Routes>
          <Route path="*" element={<HomePage/>} exact='True' />
          <Route path="/ViewItem/:ItemName/:userName" element={<ViewItem/>} exact='True' />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
