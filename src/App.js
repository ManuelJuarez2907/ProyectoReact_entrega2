import React from 'react';
import './App.css';

import NavBar from './components/NavBar'

function App() {
  return (
      <div>
        <NavBar>
          <h1>MicroElectronica</h1>
          <li>Microcontroladores</li>
          <li>Sensores</li>
          <li>Actuadores</li>
          <li>Contacto</li>
        </NavBar>
        <ItemListContainer>
          <p>Hola, bienvenido a nuestra pagina. Puedes comenzar tu compra!</p>
        </ItemListContainer>
      </div>
    );
};

export default App;
