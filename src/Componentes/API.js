import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Flor from "./Flor";
import { Breadcrumb, Form } from "react-bootstrap";


function SearchBar(props) {

  const setBusqueda = props.fbusqueda

  const handleSearch = (event) => {
    console.log(event.target.value)
    setBusqueda(event.target.value.toLowerCase())
  };


  return (
    <Form.Group>
      <Form.Label> Buscador:  </Form.Label>
      <Form.Control id="search" placeholder="Escribe un producto" onChange={handleSearch}></Form.Control>
    </Form.Group>
  );
}

function API(props) {
  const [busqueda, setBusqueda] = useState('');
  const [flores, setFlores] = useState([]);
  const [filtrados, setFiltrados] = useState([])


  useEffect(() => {
    const productBreadcrumb = <Breadcrumb><Breadcrumb.Item active> Catálogo </Breadcrumb.Item></Breadcrumb>
    props.funcionBreadcrumbs(productBreadcrumb)
    const URL = "https://dulces-petalos.herokuapp.com/api/product";
    axios
      .get(URL)
      .then((response) => {
        let arrayProducto = [];
        for (let key in response.data) {
          arrayProducto.push({
            ...response.data[key],
          });
        }
        setFlores(arrayProducto);
        setFiltrados(arrayProducto);
      })
      .catch((error) => {
        alert('Algo va mal');
      });
  }, []);


  useEffect(()=>{
    if(busqueda == ''){
      setFiltrados(flores)
    }else{
      const elementos_filtrados = flores.filter((flor) => flor.name.toLowerCase().startsWith(busqueda) || flor.binomialName.toLowerCase().startsWith(busqueda))
      setFiltrados(elementos_filtrados)
    }
  },[busqueda])

  //divison del array en 4 para que me los muestre
  // const dividirArrayEnGrupos = (array, tamañoGrupo) => {
  //   const grupos = [];
  //   for (let i = 0; i < array.length; i += tamañoGrupo) {
  //     grupos.push(array.slice(i, i + tamañoGrupo));
  //   }
  //   return grupos;
  // };

  // const gruposFlores = dividirArrayEnGrupos(flores, 4);

  let contenido = '';
  // variable contenido que contendra mis elementos que filtro
  if (filtrados.length > 0) {
    contenido = filtrados.map((elemento) => (
      <div key={elemento.id}>
        <Flor key={elemento.id} flor={elemento} />
      </div>
    ))
  }
  // declaro la barra de busqueda
  return (
    <>
      <div className="d-flex flex-row justify-content-end m-4">
        <SearchBar fbusqueda={setBusqueda}/>
      </div>
      <div className="container-fluid">
        <div className="row row-cols-4 mb-2">
          {contenido}
        </div>
      </div>
    </>
  );
}

export default API;