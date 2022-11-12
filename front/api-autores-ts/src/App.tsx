import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import ComponenteMenu from './menu/ComponenteMenu';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ComponenteListaAutores from './autores/ComponenteListaAutores';
import ComponenteListaLibro from './libros/ComponenteListaLibros';
import ComponentePrincipal from './principal/ComponentePrincipal';
import rutas from './routes-config';

function App() {
  return (
    <div className='container'>
      {/*Este es el menu princiapal */}
      <ComponenteMenu/>
      {/*Son las rutas del menu principal*/}
      <BrowserRouter>
      <Routes>
      {/* <Route path="/principal" element={<ComponentePrincipal/>} />
      <Route path="/autores" element={<ComponenteListaAutores/>} />
      <Route path="/libros" element={<ComponenteListaLibro/>} /> */}
      {rutas.map(ruta => 
      <Route key={ruta.path} path={ruta.path} element={<ruta.componente/>}/>)
      }
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;