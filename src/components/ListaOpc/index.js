import './ListaOpc.css'

const ListaOpc=(props)=>{
   
    //Metodo map ==> arreglo.map( (equipo,index)=>{
    //
    //})
    const equipos=[
        "Programacion",
        "Front End",
        "Data Science",
        'Dev ops',
        'UX Diseño',
        'Movil',
        'Inovacion y gestion'
    ]
    const manejarCambio=(e)=>{
        props.setEquipo(e.target.value)
    }
    return <div className='listaOpc'>
        <label>EQUIPOS</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleconar Equipo</option>
            {equipos.map((equipo,posicion)=><option key={posicion}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpc