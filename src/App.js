import React from 'react';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
      <div>
        <NavBar>
          <h1>MicroElectronica</h1>
          <ul className='lista'>
            <li>
              <btn>Microcontroladores</btn>
            </li>
            <li>
              <btn>Sensores</btn>
            </li>
            <li>
              <btn>Actuadores</btn>
            </li>
            <li>
              <btn>Contacto</btn>
            </li>
          </ul>
        </NavBar>
        <ItemListContainer>
          <p>Hola, bienvenido a nuestra pagina. Puedes comenzar tu compra!</p>
        </ItemListContainer>
      </div>
    );
};

export default App;
