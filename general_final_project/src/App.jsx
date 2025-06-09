import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_page from './components/main_page/main_page'
import Header from './components/header/header';
import ProductDetail from './components/productDetail/productDetail'


function App() {

  return (
    <>
      <Header />

  
    <Routes>
      <Route path='/'  element={<Main_page/>}></Route>
      <Route path='/productDetail/:id' element={<ProductDetail />} /> // router de id ni qebul etmek  


      
    </Routes>





    
    
     
    </>
  )
}

export default App
