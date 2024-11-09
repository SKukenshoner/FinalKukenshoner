import "./Login.css"

const Login = () => {
    return (
        <nav>
            <section>
                <div>
                    <label for="Email" > Email: </label>
                    <input type="text" id="Email" className="espacioInput"/>
                    <br />
                    <label for="Contraseña" > Contraseña: </label>
                    <input type="text" id="Contraseña" className="espacioInput"/>
                </div>
            </section>
        </nav>
    )
}

export default Login