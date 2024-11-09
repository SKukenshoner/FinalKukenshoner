import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <nav>
            <section>
                <ul className="containerSub">
                    <li className="subtitulos"> <Link to="/Seccion"> Home </Link> </li>
                    <li className="subtitulos"> <Link to="/Productos"> Productos </Link> </li>
                    <li className="subtitulos"> <Link to="/Login"> Login </Link> </li>
                    <li className="subtitulos"> <Link to="/Registrarse"> Registro </Link> </li>
                </ul>
            </section>
            
        </nav>
    )
}

export default Menu;