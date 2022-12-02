import React from 'react';
import './NavBar.css'

import CarWidget from '../CarWidget/CarWidget'

const NavBar = ({children}) => {
    return (
        <div className='NavBar'>
            {children}
            <CarWidget src="../images/carrito.png" alt="Icono de carrito"/>
        </div>
    );
};

export default NavBar;