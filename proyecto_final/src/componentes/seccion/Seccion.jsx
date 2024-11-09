import electrodomestico1 from "../../../public/img/Cafetera.jpg"
import electrodomestico2 from "../../../public/img/horno.jpg"
import electrodomestico3 from "../../../public/img/hornoElectrico.jpg"
import electrodomestico4 from "../../../public/img/lavarropa.jpg"
import electrodomestico5 from "../../../public/img/Microondas.jpg"
import electrodomestico6 from "../../../public/img/Televisor.jpg"
import electrodomestico7 from "../../../public/img/todosElectrodomesticos.jpg"
import "./Seccion.css"

function Seccion () {
    return (
        <div>
            <section>
            <h2>Electrodomésticos</h2>
            <p>Tecnología y calidad para tu hogar</p>
            <br />
        <div className="flexProductos">
            <div className="bordes">
            <h1 className="espacio">Lavaropa</h1>
            <img src={electrodomestico1} alt="Lavaropa 1" />
            </div>

            <div className="bordes">
            <h1 className="espacio">Cafetera</h1>
            <img src={electrodomestico2} alt="Lavaropa 2" />
            </div>

            <div className="bordes">
            <h1 className="espacio">Horno</h1>
            <img src={electrodomestico3} alt="Lavaropa 3" />
            </div>

            <div className="bordes">
            <h1 className="espacio">Horno electrico</h1>
            <img src={electrodomestico4} alt="Lavaropa 4" />
            </div>

            <div className="bordes">
            <h1 className="espacio">Lavarropa</h1>
            <img src={electrodomestico5} alt="Lavaropa 5" />
            </div>

            <div className="bordes">
            <h1 className="espacio">Televisor</h1>
            <img src={electrodomestico6} alt="Lavaropa 6" />
            </div>
    </div>
</section>
        </div>
    )
}
export default Seccion;