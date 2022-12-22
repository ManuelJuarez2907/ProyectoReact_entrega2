import React from 'react';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './routes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar>
          <h1>MicroElectronica</h1>
          <ul className='lista'>
            <li>
              <btn>Nosotros</btn>
            </li>
            <li>
              <btn>FAQ</btn>
            </li>
            <li>
              <btn>Contacto</btn>
            </li>
          </ul>
        </NavBar>
        
        <h1>Bienvenido a mi ecommerce!</h1>
        
        <ItemListContainer />

        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/Catalogo' element={<ItemListContainer/>}/>
          <Route exact path='/Catalogo/Detalles/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;
