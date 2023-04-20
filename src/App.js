import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Header from "./Components/Nav/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterComplete from "./pages/Auth/RegisterComplete";


function App() {
  return (
  <BrowserRouter>
  <Header/>
  

  <ToastContainer/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/register/complete" element={<RegisterComplete/>}/>
      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
