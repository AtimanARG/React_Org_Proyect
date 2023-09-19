import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map( (equipo, index) => {
    //     return <option></option>
    // })
    // const equipos = [
    //     "Seleccionar equipo",
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Investigacion y Gestión"
    // ]

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className="campo-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* {equipos.map( (equipo, index) => {
                var sentencia = ``
                if(index == 0) {
                    sentencia = <option key={index} defaultValue="" hidden>Seleccionar equipo</option>
                }
                else{
                    sentencia = <option key={index} value={equipo}>{equipo}</option>
                }
                return sentencia })} */}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}


export default ListaOpciones