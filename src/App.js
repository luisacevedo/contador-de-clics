import './App.css';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
import freeCodeCampLogo from './pictures/FreeCodeCamp_logo.svg'
import { useState } from 'react';

function manejarClick(){
  
}
function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton
        texto='Click'
        esBotonDeClick={ true }
        manejarClick={ manejarClick } />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={ false }
        manejarClick={ reiniciarContador } />
      </div>
    </div>
  );
}

export default App;