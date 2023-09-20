import "./Campo.css"

const Campo=(props)=>{
    return <div className="campo">
        <label> {props.titulo.toUpperCase()} </label>
        <input placeholder={props.sub} required={props.required}/>
    </div>
}

export default Campo