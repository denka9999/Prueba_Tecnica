import './App.css';
import Header from './Componentes/Header';
import Productos from './Componentes/API';
import API from './Componentes/API';
import { Route, Routes } from 'react-router-dom';
import DetalleProducto from './Componentes/DetalleProducto';
import { useState } from 'react';

function App() {
  const[breadcrumbs,setBreadcrumbs]=useState([]);
  return (
    <>

      <Header breadcrumbs={breadcrumbs}/>
      <Routes>
        <Route path="/" element={<API funcionBreadcrumbs={setBreadcrumbs}/>} />
        <Route path='product/:id' element={<DetalleProducto funcionBreadcrumbs={setBreadcrumbs}/>} />
      </Routes>
    </>
  );
}

export default App;
