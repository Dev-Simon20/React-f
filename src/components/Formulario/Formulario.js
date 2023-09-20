import "./Formulario.css"
import Campo from "../CampoName/Campo"
import ListaOpc from "../ListaOpc"
import Boton from "../Boton"
const formulario=()=>{
    
    const manejarEnvio=(e)=>{
        e.preventDefault();
        console.log("Manejar Envio",e);
    }

   return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formualrio para crear el colabordor</h2>
            <Campo titulo="Nombre" sub="Ingrese el Nombre" required/>
            <Campo titulo="Puesto" sub="Ingrese el Puestp"  required/>
            <Campo titulo="Foto" sub="Ingrese el link de la Foto" required/>
            <ListaOpc/>
            <Boton texto="Crear colaborador"/>
        </form>
   </section>
}

export default formulario