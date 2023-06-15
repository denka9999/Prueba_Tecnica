import React from "react";

const Flor =(props)=>{

    const propiedadesFlor=props.flor;
    console.log(propiedadesFlor);
    return(
        <div>
            <p>hola</p>
            <p>{propiedadesFlor.name}</p>
        </div>

        

        
    )
}
export default Flor;