//import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/org.png" alt="Agregar componente" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg