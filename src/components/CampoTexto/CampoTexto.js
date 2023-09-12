import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    const placeholderMod = `${props.placeholder}...` // Agrega los puntos suspencivos al final del placeholder
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderMod}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto