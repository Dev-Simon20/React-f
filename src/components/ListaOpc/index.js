import './ListaOpc.css'

const ListaOpc=()=>{
   
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
    return <div className='listaOpc'>
        <label>EQUIPOS</label>
        <select>
            {equipos.map((equipo,posicion)=><option key={posicion}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpc