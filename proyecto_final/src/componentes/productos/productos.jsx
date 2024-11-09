import electrodomestico1 from "../../../public/img/Cafetera.jpg"
import electrodomestico2 from "../../../public/img/horno.jpg"
import electrodomestico3 from "../../../public/img/hornoElectrico.jpg"
import electrodomestico4 from "../../../public/img/lavarropa.jpg"
import electrodomestico5 from "../../../public/img/Microondas.jpg"
import electrodomestico6 from "../../../public/img/Televisor.jpg"
import "./Productos.css"

function Productos () {
    return (
        <div>
        <section>
            <h2>Electrodomésticos</h2>

            <br />
        <div className="flexProductos">
            <div className="bordes">
            <h1 className="espacio">Televisor</h1>
            
            <img src={electrodomestico6} alt="Televisor" />
            <p> Nombre: Televisor <br />
                Stock: 41 <br />
                Codigo: 5151 <br />
                Precio: $500.000 <br />
            </p>
            </div>

            <div className="bordes">
            <h1 className="espacio">Cafetera</h1>
            <img src={electrodomestico1} alt="Cafetera 2" />
            <p> Nombre: Cafetera <br />
                Stock: 555 <br />
                Codigo: 515 <br />
                Precio: $500.000 <br />
            </p>
            </div>

            <div className="bordes">
            <h1 className="espacio">Horno</h1>
            
            <img src={electrodomestico2} alt="Horno 3" />
            <p> Nombre: Horno <br />
                Stock: 412 <br />
                Codigo: 575 <br />
                Precio: $500.000 <br />
            </p>
            </div>

            <div className="bordes">
            <h1 className="espacio">Horno Electrico</h1>
            
            <img src={electrodomestico3} alt="Horno Electrico 4" />
            <p> Nombre: Horno Electrico <br />
                Stock: 715 <br />
                Codigo: 5155 <br />
                Precio: $200.000 <br />
            </p>
            </div>

            <div className="bordes">
            <h1 className="espacio">Lavarropa</h1>
            
            <img src={electrodomestico4} alt="Lavaropa 5" />
            <p> Nombre: Lavarropa <br />
                Stock: 521 <br />
                Codigo: 1551 <br />
                Precio: $500.000 <br />
            </p>
            </div>

            <div className="bordes">
            <h1 className="espacio">Microondas</h1>
            
            <img src={electrodomestico5} alt="Microondas 6" />
            <p> Nombre: Microondas <br />
                Stock: 515 <br />
                Codigo: 51521 <br />
                Precio: $150.000 <br />
            </p>
            </div>
            
    </div>
</section>
        </div>
    )
}
export default Productos;