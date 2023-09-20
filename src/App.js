import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import Miorg from './components/MiOrg';


function App() {
  const [mostrarForm,actualizarMostrar]=useState(true)
  //Operador Ternario ----->   condicion? se muestra:No semuestra
  const manejarEstado=()=>{
        actualizarMostrar(!mostrarForm)
    }
//

  return (
    <div>
      <Header/>
      {mostrarForm?<Formulario/>:<></>}
      {/* Se manda la funcion manejar estado para que añ hacer click cambie el valor de mostrar form */}
      <Miorg manejarEstado={manejarEstado}/>
    </div>
  );
}






export default App;
