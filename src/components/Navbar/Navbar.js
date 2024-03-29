import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    return(
        <header className='navbar'>
            <div className='navbuttons'>
                <ul className='nav-links'>
                    <li>
                        <Link to='http://localhost:3000/inicio'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='http://localhost:3000/bitacora'>Bitácora</Link>
                    </li>
                    <li>
                        <Link to='http://localhost:3000/informe'>Informe Gráfico</Link>
                    </li>
                    <li>
                        <Link to='http://localhost:3000/catalogo'>Catálogos</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;