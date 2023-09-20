import { useState } from "react";
import "./MiOrg.css"

const Miorg=(props)=>{
    //Estado -- hooks= son funcionalidades que nos ayudan a trabajar con el comportamiento de React

    //1-- useState
    //    useState()

    // const [mostrar,actualizarMostrar]=useState(true);
    // const manejarClick=()=>{
    //     console.log("Mostar/ocultar");
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3>Mi Organizacion</h3>
        <img src="../img/add.png" alt="add" onClick={props.manejarEstado}/>
    </section>
}

export default Miorg