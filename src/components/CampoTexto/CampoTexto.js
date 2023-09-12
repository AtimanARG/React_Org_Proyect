import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...` // Agrega los puntos suspencivos al final del placeholder
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderMod} required={props.required}/>
    </div>
}

export default CampoTexto