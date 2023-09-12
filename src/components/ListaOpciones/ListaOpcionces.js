import "./ListaOpciones.css"

const ListaOpciones = () => {

    // Metodo map -> arreglo.map( (equipo, index) => {
    //     return <option></option>
    // })
    const equipos = [
        "Seleccionar equipo",
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Investigacion y Gestión"
    ]

    return <div className="campo-opciones">
        <label>Equipo</label>
        <select>
            {equipos.map( (equipo, index) => {
                let sentencia = ``
                if(index === 0) {
                    sentencia = <option key={index} selected disabled hidden>{equipo}</option>
                }
                else{
                    sentencia = <option key={index}>{equipo}</option>
                }
            return sentencia })}
        </select>
    </div>
}


export default ListaOpciones
