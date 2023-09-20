import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import Miorg from './components/MiOrg';
import Equipo from './components/Equipo';


function App() {
  const [mostrarForm,actualizarMostrar]=useState(false)
  const manejarEstado=()=>{
        actualizarMostrar(!mostrarForm)
    }

    //Lista de equipos
    const equipos=[
      {
        titulo:"Programacion",
        colorPri:"#57c278",
        colorSec:"#d9f7e9"
      },
      {
        titulo:"Front End",
        colorPri:"#82cffa",
        colorSec:"#e8f8ff"
      },
      {
        titulo:"Data Science",
        colorPri:"#a6d157",
        colorSec:"#f0f8e2"
      },
      {
        titulo:"Dev ops",
        colorPri:"#e06b69",
        colorSec:"#fde7e8"
      },
      {
        titulo:"UX Diseño",
        colorPri:"#db6ebf",
        colorSec:"#fae9f5"
      },
      {
        titulo:"Movil",
        colorPri:"#ffba05",
        colorSec:"#fff5d9"
      },
      {
        titulo:"Innovacion y gestión",
        colorPri:"#ff8a29",
        colorSec:"#ffeedf"
      }
  ]

  return (
    <div>
      <Header/>
      {mostrarForm?<Formulario/>:<></>}
      {/* Se manda la funcion manejar estado para que añ hacer click cambie el valor de mostrar form */}
      <Miorg manejarEstado={manejarEstado}/>
      {equipos.map((equip, index)=> <Equipo datos={equip} key={index} />)}
    </div>
  );
}






export default App;
