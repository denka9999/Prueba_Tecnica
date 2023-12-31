import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

function Flor(props) {

    const propiedadesFlor = props.flor;

    return (
        <Card className="mt-4">
            <Card.Header className="text-center bold"><b>{propiedadesFlor.name}</b></Card.Header>
            <Card.Body>
                <div className="d-flex flex-row justify-content-between">
                    <div className="w-50">
                        <img className="mx-auto d-block" width={'100px'} height={'100px'} src={propiedadesFlor.imgUrl} alt="" ></img>
                    </div>
                    <div className="w-50">
                        <p><b>Nombre Cientifico :</b> {propiedadesFlor.binomialName} </p>
                        <p><b>Precio :</b> {propiedadesFlor.price} $ </p>
                        <Button as={Link} variant="primary" to={`/product/${propiedadesFlor.id}`}>
                            Ver detalles
                        </Button>

                    </div>

                </div>
            </Card.Body>


        </Card>




    )
}
export default Flor;