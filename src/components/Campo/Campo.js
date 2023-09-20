//import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {

    // Destructuracion
    const { type } = props
    
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    const placeholderMod = `${props.placeholder}...` // Agrega los puntos suspencivos al final del placeholder
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderMod}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo