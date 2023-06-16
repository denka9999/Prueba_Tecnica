import './App.css';
import Header from './Componentes/Header';
import Productos from './Componentes/API';
import API from './Componentes/API';
import { Route, Routes } from 'react-router-dom';
import DetalleProducto from './Componentes/DetalleProducto';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<API />} />
        <Route path='product/:id' element={<DetalleProducto />} />
      </Routes>
    </>
  );
}

export default App;
