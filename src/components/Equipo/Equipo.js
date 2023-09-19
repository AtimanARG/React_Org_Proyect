import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    // Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    const estiloTitulo = {borderColor: colorPrimario}
    const objeto = {backgroundColor: hexToRgba(colorPrimario, 0.6) }



    return <>
    { colaboradores.length > 0 && 
        <section className="equipo" style={objeto} >
            <input 
                className="input-color"
                type="color"
                value={objeto}
                onChange={(event) => {
                    actualizarColor(event.target.value, id)
                }}
            />
            <h3 style={estiloTitulo} >{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador,index) => <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    colorSecundario={colorSecundario}
                    eliminarColaborador={eliminarColaborador}
                    /> )
                }
            </div>
        </section>
    }
</>
}

export default Equipo