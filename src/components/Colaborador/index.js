import "./Colaborador.css"
import {AiFillCloseCircle} from "react-icons/ai"
const colaborador=(props)=>{
  const {nombre,puesto,foto}=props.colaborador
  const {color}=props
  const { eliminarColaborador }=props
  
  const deleteComponente=()=>{
      eliminarColaborador(nombre);
  }

   return<div className="colaborador">
      <AiFillCloseCircle className="eliminar" onClick={deleteComponente}/>
      <div style={{backgroundColor:color}} className="encabezado" >
        <img src={foto} alt="prog"/>
      </div>
      <div  className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}r</h5>
      </div>
   </div>
}

export default colaborador