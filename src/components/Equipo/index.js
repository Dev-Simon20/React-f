
import './Equipo.css'
import Colaborador from '../Colaborador'

const Equipo=(props)=>{
    //Destructuracion
    const {colorPri,colorSec,titulo}=props.datos
    const {colaboradores}=props
    
    return <>{ colaboradores.length>0&&
        <section  className='equipo' style={{backgroundColor:colorSec}}>
     <h3 style={{borderColor:colorPri}} >{titulo}</h3>
    <div className='colaboradores'>
    {colaboradores.map((colaborador,index)=>{ return <Colaborador key={index} colaborador={colaborador} color={colorPri}/>})}
    </div>  
    </section>
    }</>
}

export default Equipo