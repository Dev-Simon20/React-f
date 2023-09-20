import "./Campo.css"

const Campo=(props)=>{
    return <div className="campo">
        <label> {props.titulo.toUpperCase()} </label>
        <input placeholder={props.sub}/>
    </div>
}

export default Campo