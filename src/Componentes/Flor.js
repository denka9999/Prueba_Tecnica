import React from "react";
import '../DiseñoComponentes/Flor.css';
import { Link } from "react-router-dom";

function Flor (props) {

    const propiedadesFlor = props.flor;

    return (
        <div className="flower">
            <p>{propiedadesFlor.name}</p>
            <p>{propiedadesFlor.binomialName}</p>
            <img className="imagen" alt="" src={propiedadesFlor.imgUrl} />
            <button>
                <Link to={`/product/${propiedadesFlor.id}`}>Ver Detalles </Link>
            </button>

        </div>




    )
}
export default Flor;