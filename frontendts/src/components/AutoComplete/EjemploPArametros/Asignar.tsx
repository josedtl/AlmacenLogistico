import { Link } from 'react-router-dom'

function Asignar() {
    let m_Datos = "DAVID VARIABLE";
    var result = `/Mostrar/ ${m_Datos}`;
    return (

        <div>

            <Link className="nav-item nav-link" to={result}>Asignar</Link>
        </div >

    )

}

export default Asignar;