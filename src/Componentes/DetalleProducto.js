import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../DiseñoComponentes/DetalleProducto.css'

function DetalleProducto() {

    const handleGoBack = () => {
        window.history.back();
    };
    const parametros = useParams();
    const [propiedades, setPropiedades] = useState('');
    const URL = "https://dulces-petalos.herokuapp.com/api/product/" + parametros.id + " ";

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                console.log(response.data);
                setPropiedades(response.data);
            })
            .catch((error) => {
                alert('algo va mal');
            })
    }, []);

    return (
        <>
            <div className="container">

                <div className="card">
                    <h4>Nombre: {propiedades.name}</h4>
                    <h4>Nombre: {propiedades.binomialName}</h4>
                    <h4>Nombre: {propiedades.fertilizerType}</h4>
                    <h4>Nombre: {propiedades.price}</h4>
                    <h4>Nombre: {propiedades.wateringsPerWeek}</h4>
                    <h4>Nombre: {propiedades.heightInCm}</h4>

                </div>
                <div className="card">
                    <img src={propiedades.imgUrl} alt='' />

                </div>
            </div>
            <button onClick={handleGoBack}>VOLVER</button>

        </>
    )
}
export default DetalleProducto;