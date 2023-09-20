import { useState } from 'react';
import "./Formulario.css";
import Campo from "../CampoName/Campo";
import ListaOpc from "../ListaOpc";
import Boton from "../Boton";
const Formulario=()=>{
    const [nombre,setNombre]=useState('')
    const [puesto,setPuesto]=useState('')
    const [foto,setFoto]=useState('')
    const [equipo,setEquipo]=useState('');

    const manejarEnvio=(e)=>{
        e.preventDefault();
        let datoEnviar={
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log('equipo',equipo);
        console.log(datoEnviar);
    }
    // const [mostrarForm,actualizarMostrar]=useState(true)


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
            setEquipo={setEquipo}/>
            
            <Boton texto="Crear colaborador"/>
        </form>
   </section>
}

export default Formulario