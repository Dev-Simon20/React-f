import "./Colaborador.css"
const colaborador=(props)=>{
  const {nombre,puesto,foto}=props.colaborador
  const {color}=props


   return<div className="colaborador">
      <div style={{backgroundColor:color}} className="encabezado" >
        <img src={foto} alt="prog"/>
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}r</h5>
      </div>
   </div>
}

export default colaborador