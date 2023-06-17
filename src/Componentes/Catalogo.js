import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Flor from "./Flor";
import { Breadcrumb, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function SearchBar(props) {

  const setBusqueda = props.fbusqueda

  const handleSearch = (event) => {
    setBusqueda(event.target.value.toLowerCase())
  };


  return (
    <Form.Group>
      <Form.Label style={{ padding: '5px' }}> Filtre aqui </Form.Label>
      <FontAwesomeIcon icon={faSearch} />
      <Form.Control id="search" placeholder="Nombre cientifico o normal." onChange={handleSearch}></Form.Control>
    </Form.Group>
  );
}

function Catalogo(props) {
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


  useEffect(() => {
    if (busqueda === '') {
      setFiltrados(flores)
    } else {
      const elementos_filtrados = flores.filter((flor) => flor.name.toLowerCase().startsWith(busqueda) || flor.binomialName.toLowerCase().startsWith(busqueda))
      setFiltrados(elementos_filtrados)
    }
  }, [busqueda])



  let contenido = '';

  if (filtrados.length > 0) {
    contenido = filtrados.map((elemento) => (
      <div key={elemento.id}>
        <Flor key={elemento.id} flor={elemento} />
      </div>
    ))
  }
  return (
    <>
      <div className="d-flex flex-row justify-content-end m-4">
        <SearchBar fbusqueda={setBusqueda} />
      </div>
      <div className="container-fluid">
        <div className="row row-cols-4 mb-2">
          {contenido}
        </div>
      </div>
    </>
  );
}

export default Catalogo;