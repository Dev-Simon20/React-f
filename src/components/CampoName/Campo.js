import "./Campo.css"
const Campo=(props)=>{
    const manejarCambio=(e)=>{
        props.setValor(e.target.value)
    }
    //Destructuracion
    //con el   =''  si el tipo de campo no esta definido sera texto
    const{type=''}=props

    return <div className={`campo campo-${type}`}>
        <label> {props.titulo.toUpperCase()} </label>
        <input 
        placeholder={props.sub} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}/>
    </div>
}

export default Campo