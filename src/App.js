import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(), 
    nombre: "Atilio",
    puesto: "Dev",
    foto: "https://github.com/AtimanARG.png",
    equipo: "Devops",
    fav: true,
    },
    {
    id: uuid(),
    nombre: "Peter",
    puesto: "Dev",
    foto: "https://github.com/AtimanARG.png",
    equipo: "Investigacion y Gestión",
    fav: false,
    },
    {
    id: uuid(),
    nombre: "Ivan",
    puesto: "Dev",
    foto: "https://github.com/AtimanARG.png",
    equipo: "Front End",
    fav: false,
    },
    {
    id: uuid(),
    nombre: "Massi",
    puesto: "Dev",
    foto: "https://github.com/AtimanARG.png",
    equipo: "Móvil",
    fav: false,
    },
    {
    id: uuid(),
    nombre: "Octi",
    puesto: "Dev",
    foto: "https://github.com/AtimanARG.png",
    equipo: "Programación",
    fav: false,
    },
])

  const [equipos, ActualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2>"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Investigacion y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador]) // Los 3 puntos indican que esta copiando un valor
  }

  // Actualizar color equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    } )

    ActualizarEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    ActualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }


  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminando colaborador: ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Lista de equipos


  return (
    <div>
      <Header />
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => <Equipo 
          key={equipo.titulo}
          datos={equipo}
          colaboradores={colaboradores.filter(  colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          /> )
      }
      <Footer />
    </div>
  );
}

export default App;
