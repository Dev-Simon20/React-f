import "./Formulario.css"
import Campo from "../CampoName/Campo"
import ListaOpc from "../ListaOpc"
const formulario=()=>{
   return <section className="formulario">
        <form>
            <h2>Rellena el formualrio para crear el colabordor</h2>
            <Campo titulo="Nombre" sub="Ingrese el Nombre"/>
            <Campo titulo="Puesto" sub="Ingrese el Puestp"/>
            <Campo titulo="Foto" sub="Ingrese el link de la Foto"/>
            <ListaOpc/>
        </form>
   </section>
}

export default formulario