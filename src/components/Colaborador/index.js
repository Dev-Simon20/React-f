import "./Colaborador.css"
import {AiFillCloseCircle,AiFillHeart,AiOutlineHeart} from "react-icons/ai"
const colaborador=(props)=>{
  const {nombre,puesto,foto,id,fav}=props.colaborador
  const {color}=props
  const { eliminarColaborador,like}=props
  // const {id}=props
  
  const deleteComponente=()=>{   
    eliminarColaborador(id);
  }

   return<div className="colaborador">
      <AiFillCloseCircle className="eliminar" onClick={deleteComponente}/>
      <div style={{backgroundColor:color}} className="encabezado" >
        <img src={foto} alt="prog"/>
      </div>
      <div  className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}r</h5>
       { fav?<AiFillHeart color="red" onClick={()=>like(id)}/>:<AiOutlineHeart onClick={()=>like(id)}/>}
       


      </div>
   </div>
}

export default colaborador