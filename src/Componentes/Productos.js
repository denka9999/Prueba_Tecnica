import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Flor from "./Flor";
function Productos() {

    const [flores, setFlores] = useState('');

    useEffect(()=>{
        const URL = "https://dulces-petalos.herokuapp.com/api/product";
        axios.get(URL)
            .then((response) => {
                // console.log(response.data);
                let arrayProducto=[];
                for(let key in response.data){
                    arrayProducto.push({
                        ...response.data[key], 
                        id:key
                    })
                }
                // console.log(arrayProducto);
                setFlores(arrayProducto);
                // console.log(flores)
                console.log('hola')
            })
            .catch((error) => {
                alert('algo va mal');
            })

    },[]);



    let contenido='';

    let noFlores=<h1>NO HAY PRODUCTOS</h1>

    if(flores.length>0){
        contenido=<div>
            {flores.map((elemento)=>{
                return(
                    <>
                    <Flor key={elemento.id} flor={elemento}/>
                    </>
                )
            })}
        </div>
    }else{
        contenido= noFlores;
    }
   
    return (
        <>
        {contenido}
        </>
        
    )
}
export default Productos;