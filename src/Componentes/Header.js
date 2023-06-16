import React from 'react';
import logo from '../Imagen/logo.png';
import '../DiseñoComponentes/Header.css';
function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h1 className="company-name">Dulces Pétalos</h1>
            </header>
        </>
    );
}
export default Header