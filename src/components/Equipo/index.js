
import './Equipo.css'
import Colaborador from '../Colaborador'

const Equipo = (props) => {
    //Destructuracion
    const { colorPri, colorSec, titulo } = props.datos
    const { colaboradores } = props
    const { eliminarColaborador, colorEquipo }=props



     const cambio=(e)=>{
        colorEquipo(e.target.value,titulo)
     }


     const obj={
        backgroundColor:colorPri
    }



    return <>{colaboradores.length > 0 &&
        <section className='equipo' style={obj}>
            <input 
            className='setColor' 
            onChange={cambio} 
            type='color'
            value={colorPri}
            />
            <h3 style={{ borderColor: colorPri }} >{titulo}</h3>
            <div className='colaboradores'>
                {
                    colaboradores.map((colaborador, index) => { return <Colaborador 
                    key={index} 
                    colaborador={colaborador} 
                    color={colorPri} 
                    eliminarColaborador={eliminarColaborador}
                    /> })
                }
            </div>
        </section>
    }</>
}

export default Equipo