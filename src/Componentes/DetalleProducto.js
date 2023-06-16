import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import '../DiseñoComponentes/DetalleProducto.css'
import { Card, Button, Breadcrumb, BreadcrumbItem } from "react-bootstrap";

function DetalleProducto(props) {

    const handleGoBack = () => {
        window.history.back();
    };
    const parametros = useParams();
    const [propiedades, setPropiedades] = useState('');
    const URL = "https://dulces-petalos.herokuapp.com/api/product/" + parametros.id + " ";

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            setPropiedades(response.data);
            const productBreadcrumb = <Breadcrumb>
                <Breadcrumb.Item href="/"> Catálogo </Breadcrumb.Item><Breadcrumb.Item active> {response.data.name}</Breadcrumb.Item>
            </Breadcrumb>
            props.funcionBreadcrumbs(productBreadcrumb)
        })
        .catch((error) => {
            alert('algo va mal');
        })

    }, []);

    return (

        <>
            <div>
                <div className="d-flex flex-row justify-content-end m-4">
                    <Button variant="danger" onClick={handleGoBack}>VOLVER</Button>
                </div>
                <div className="d-flex flex-row justify-content-between ">
                    <div className="w-50">
                        <img className="mx-auto d-block" width={'400px'} height={'400px'} src={propiedades.imgUrl} alt='' />

                    </div>
                    <div className="text-center w-100 justify-content-center align-items-center" >
                        <p><b>Nombre:</b> {propiedades.name}</p>
                        <p><b>Nombre Cientifico:</b> {propiedades.binomialName}</p>
                        <p><b>Tipo de ferilizante:</b> {propiedades.fertilizerType}</p>
                        <p><b>Precio:</b> {propiedades.price}</p>
                        <p><b>Riegos por semana:</b> {propiedades.wateringsPerWeek}</p>
                        <p><b>Altura:</b> {propiedades.heightInCm}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetalleProducto;