import React from 'react';
import logo from '../Imagen/logo.png';
import '../DiseñoComponentes/Header.css';
import { Breadcrumb } from 'react-bootstrap';
function Header(props) {
    
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h1 className="company-name">Dulces Pétalos</h1>
    
                {props.breadcrumbs}
        
            </header>
        </>
    );
}
export default Header