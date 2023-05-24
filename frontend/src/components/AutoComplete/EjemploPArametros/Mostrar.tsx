import { useParams } from "react-router-dom"

function Mostrar() {
    let  parames  = useParams();
    console.log(parames)
    return (
        <div>Mostrar {parames.user}</div>
    )

}
export default Mostrar;