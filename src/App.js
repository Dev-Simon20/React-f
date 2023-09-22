import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import Miorg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import {v4 as uuid} from'uuid'
import colaborador from './components/Colaborador';


function App() {
  const [mostrarForm,actualizarMostrar]=useState(true)
  const [colaboradores,setColaborador]=useState([]);
  const [equipos,setEquipos]=useState([
    {
      id:uuid(),
      titulo:"Programacion",
      colorPri:"#57c278",
      colorSec:"#d9f7e9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPri:"#82cffa",
      colorSec:"#e8f8ff"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPri:"#a6d157",
      colorSec:"#f0f8e2"
    },
    {
      id:uuid(),
      titulo:"Dev ops",
      colorPri:"#e06b69",
      colorSec:"#fde7e8"
    },
    {
      id:uuid(),
      titulo:"UX Diseño",
      colorPri:"#db6ebf",
      colorSec:"#fae9f5"
    },
    {
      id:uuid(),
      titulo:"Movil",
      colorPri:"#ffba05",
      colorSec:"#fff5d9"
    },
    {
      id:uuid(),
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
    const eliminarColaborador=(id)=>{
       console.log('Elminar Colaborador',id);
       const nuevosColaboradores=colaboradores.filter((colab)=>colab.id!==id)
       setColaborador(nuevosColaboradores);
    }


  //Aactualizar el color del equipo
   const colorEquipo=(color,id)=>{
    console.log("ACUALOZAR COLOR",color,id);
    const equiposActualizados=equipos.map((equi)=>{
       if (equi.id===id) {
           equi.colorPri=color
       }
       return equi
    })
    setEquipos(equiposActualizados)
   }


   //Crear Equipo
    const crearEquipos=(nuevoEquip)=>{
      console.log('Equipo Actualizado', nuevoEquip);
      setEquipos([...equipos,{...nuevoEquip,id:uuid()}])
    }


   //Cambiar el icono de corazon
   const like=(id)=>{
      console.log('Like',id);
      const colaboradoresAct=colaboradores.map((colab)=>{
        if(colab.id===id){
          colab.fav=!colab.fav
        }
        return colab;
      })
      setColaborador(colaboradoresAct)
   }
   
  return (
    <div >
      <Header/>
      {
      mostrarForm&&<Formulario 
          equipos={equipos.map((equip)=>equip.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipos={crearEquipos}
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
      like={like}
      />
      )
      }
      <div className='separar'></div>
      <Footer/>
    </div>
  );
}


export default App;
