import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Flor from "./Flor";

function API() {
    const [flores, setFlores] = useState('');
    const [filtro, setFiltro] = useState('');
    const [busqueda, setBusqueda] = useState('');

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
                setFiltro(arrayProducto);
            })
            .catch((error) => {
                alert('Algo va mal');
            });
    }, []);



    const handleSearch = (event) => {
        const getSearch = event.target.value.toLowerCase();
        setBusqueda(getSearch);
            const searchdata = filtro.filter((item) =>
                item.name.toLowerCase().includes(getSearch) ||
                item.binomialName.toLowerCase().includes(getSearch)
            );
            setFlores(searchdata);
    };


        //divison del array en 4 para que me los muestre
        const dividirArrayEnGrupos = (array, tamañoGrupo) => {
          const grupos = [];
          for (let i = 0; i < array.length; i += tamañoGrupo) {
            grupos.push(array.slice(i, i + tamañoGrupo));
          }
          return grupos;
        };

        const gruposFlores = dividirArrayEnGrupos(flores, 4);

        let contenido = '';
      // variable contenido que contendra mis elementos que filtro
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
    // declaro la barra de busqueda

    function SearchBar() {
        return (
            <form>
                <input
                    type="text"
                    value={busqueda}
                    onChange={handleSearch}
                    placeholder="Filtrar productos..."
                />
            </form>
        );
    }
    return (
        <>
            <SearchBar />
            {contenido}
        </>
    );
}

export default API;