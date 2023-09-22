import { useState } from 'react';
import "./Formulario.css";
import Campo from "../CampoName/Campo";
import ListaOpc from "../ListaOpc";
import Boton from "../Boton";
import {v4 as uuid} from'uuid'
const Formulario=(props)=>{
    const [nombre,setNombre]=useState('')
    const [puesto,setPuesto]=useState('')
    const [foto,setFoto]=useState('')
    const [equipo,setEquipo]=useState('');
    const[tiitulo, setTiitulo]=useState('')
    const[coloor,setColoor]=useState('')

    

    /*Deestructurando el props */
    const {registrarColaborador}=props
    const {crearEquipos}=props

    const manejarEnvio=(e)=>{
        e.preventDefault();
        let datoEnviar={
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo,
            id:uuid()
        }
        ;
        registrarColaborador(datoEnviar);
    }
    // const [mostrarForm,actualizarMostrar]=useState(true)
    const creacion=(e)=>{
        e.preventDefault();
        crearEquipos({titulo:tiitulo,colorPri:coloor});
    }


   return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formualrio para crear el colabordor</h2>
            <Campo 
            titulo="Nombre" 
            sub="Ingrese el Nombre"
            valor={nombre}
            setValor={setNombre} 
            required/>
            <Campo 
            titulo="Puesto" 
            sub="Ingrese el Puesto"
            valor={puesto}  
            setValor={setPuesto}
            required/>
            <Campo 
            titulo="Foto" 
            sub="Ingrese el link de la Foto" 
            valor={foto}
            setValor={setFoto}
            required/>
            <ListaOpc 
            valor={equipo} 
            setEquipo={setEquipo}
            equipos={props.equipos}
            />
            
            <Boton texto="Crear colaborador"/>
        </form>
        <form onSubmit={creacion}>
            <h2>Rellena el formulario para crear el equipo  </h2>
            <Campo 
            titulo="Titulo" 
            sub="Ingresar titulo"
            valor={tiitulo}
            setValor={setTiitulo} 
            required/>
            
            <Campo 
            titulo="Color" 
            sub="Ingrese el color en Hexadecimal"
            valor={coloor}  
            setValor={setColoor}
            />
             <Boton texto="Registrar Equipo"/>
            </form>

   </section>
}

export default Formulario