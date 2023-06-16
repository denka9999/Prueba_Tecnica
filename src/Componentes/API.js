import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Flor from "./Flor";

function API() {
    const [flores, setFlores] = useState('');
  
    useEffect(() => {
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
        })
        .catch((error) => {
          alert('Algo va mal');
        });
    }, []);
  
    const dividirArrayEnGrupos = (array, tamañoGrupo) => {
      const grupos = [];
      for (let i = 0; i < array.length; i += tamañoGrupo) {
        grupos.push(array.slice(i, i + tamañoGrupo));
      }
      return grupos;
    };
  
    const gruposFlores = dividirArrayEnGrupos(flores, 4);
  
    let contenido = '';
  
    if (flores.length > 0) {
      contenido = (
        <div>
          {gruposFlores.map((grupo) => (
            <div key={grupo[0].id}>
              {grupo.map((elemento) => (
                <Flor key={elemento.id} flor={elemento} />
              ))}
            </div>
          ))}
        </div>
      );
    }
  
    return (
        <>
        {contenido}
        </>
        );
  }

export default API;