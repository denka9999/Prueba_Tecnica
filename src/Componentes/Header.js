import React from 'react';
import logo from '../Imagen/logo.png';
import { Link } from 'react-router-dom';
function Header(props) {

    return (
        <>

            <div className="bg-primary bg-opacity-50">
                <div className="container-fluid d-flex flex-row align-items-center ">
                    <Link to="/">
                        <img className="mt-4" width={'125px'} height={'125px'} src={logo} alt="Logo" />
                    </Link>
                    <h1 className="text-white text-center flex-grow-1">Dulces Pétalos</h1>
                </div>
                <div className="d-flex flex-row  justify-content-start m-2">
                    <b>{props.breadcrumbs}</b>
                </div>

            </div>
        </>
    );
}
export default Header