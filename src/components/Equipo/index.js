
import './Equipo.css'

const Equipo=(props)=>{
    //Destructuracion
    const {colorPri,colorSec,titulo}=props.datos
    
    return <section  className='equipo' style={{backgroundColor:colorSec}}>
     <h3 style={{borderColor:colorPri}} >{titulo}</h3>
    <div className='colaboradores' ></div>  
    </section>
}

export default Equipo