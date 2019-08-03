import React from 'react';

// Importamos imangen de fondo
import imagen from "./cryptomonedas.png";

// Importamos componentes
import Formulario from "./Components/Formularios";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="Imagen de fondo" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomenedas al Instante</h1>
          
          <Formulario 
          
          />
        </div>
      </div>
    </div>
  );
}

export default App;
