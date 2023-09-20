import "./Campo.css"
const Campo=(props)=>{
    const manejarCambio=(e)=>{
        props.setValor(e.target.value)
    }
    return <div className="campo">
        <label> {props.titulo.toUpperCase()} </label>
        <input 
        placeholder={props.sub} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}/>
    </div>
}

export default Campo