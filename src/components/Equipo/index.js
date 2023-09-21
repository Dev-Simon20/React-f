
import './Equipo.css'
import Colaborador from '../Colaborador'

const Equipo=(props)=>{
    //Destructuracion
    const {colorPri,colorSec,titulo}=props.datos
    
    return <section  className='equipo' style={{backgroundColor:colorSec}}>
     <h3 style={{borderColor:colorPri}} >{titulo}</h3>
    <div className='colaboradores'>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
         <Colaborador/>
    </div>  
    </section>
}

export default Equipo