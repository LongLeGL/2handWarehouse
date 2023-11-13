import React from 'react';
import { Routes, Route, Outlet} from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


import UpperBar from './components/UpperBar';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <UpperBar />
      <Outlet/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;