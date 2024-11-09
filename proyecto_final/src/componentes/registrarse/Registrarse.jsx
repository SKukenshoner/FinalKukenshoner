import "./Registrarse.css"

const Registrarse = () => {
    return (
        <nav>
            <section>
                <div>
                    <label for="Nombre" > Nombre: </label>
                    <input type="text" id="Nombre" className="espacioInput"/>
                    <br />
                    <label for="Apellido" > Apellido: </label>
                    <input type="text" id="Apellido" className="espacioInput"/>
                    <br />
                    <label for="Email" > Email: </label>
                    <input type="text" id="Email" className="espacioInput"/>
                    <br />
                    <label for="Numero" > Numero: </label>
                    <input type="number" id="Numero" className="espacioInput"/>
                </div>
            </section>
        </nav>
    )
}

export default Registrarse