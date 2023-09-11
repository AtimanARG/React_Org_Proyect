import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log("Datos: ", props)
    const placeholderMod = `${props.placeholder}...` // Agrega los puntos suspencivos al final del placeholder
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderMod} />
    </div>
}

export default CampoTexto