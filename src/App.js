import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import Miorg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {
  const [mostrarForm,actualizarMostrar]=useState(false)
  const [colaboradores,setColaborador]=useState([]);
  const [equipos,setEquipos]=useState([
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
]);
  

  // const [mienbros,setMienbros]=useState('');

  //Manejamos el estado del formulario
  const manejarEstado=()=>{
        actualizarMostrar(!mostrarForm)
    }
  //Manejamos el registro de los colaboradores
    const registrarColaborador=(colaborador)=>{
      //Spread operator ::Se agrega un nuevo colaborador a colaboradores
      setColaborador([...colaboradores,colaborador]);
    }
  //Manejamos la eliminacion de los colaboradores
    const eliminarColaborador=(nombre)=>{
       console.log('Se recibio el mienbro',nombre);
    }
  //Aactualizar el color del equipo
   const colorEquipo=(color,titulo)=>{
    console.log("ACUALOZAR COLOR",color,titulo);
    const equiposActualizados=equipos.map((equi)=>{
       if (equi.titulo===titulo) {
           equi.colorPri=color
       }
       return equi
    })

    setEquipos(equiposActualizados)
   }
  
    //Lista de equipos
  
   
  return (
    <div >
      <Header/>
      {
      mostrarForm&&<Formulario 
          equipos={equipos.map((equip)=>equip.titulo)}
          registrarColaborador={registrarColaborador}
      />
      }

      <Miorg manejarEstado={manejarEstado}/>
      {
      equipos.map((equip, index)=> <Equipo 
      datos={equip} 
      key={index} 
      colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equip.titulo)}
      eliminarColaborador={eliminarColaborador}
      colorEquipo={colorEquipo}
      />
      )
      }
      <div className='separar'></div>
      <Footer/>
    </div>
  );
}


export default App;
