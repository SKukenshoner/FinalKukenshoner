import './App.css'
import Header from "./componentes/header/Header";
import Footer from './componentes/footer/Footer';
import Seccion from './componentes/seccion/Seccion';
import Menu from './componentes/menu/Menu';
import Login from './componentes/login/Login';
import Registrarse from './componentes/registrarse/Registrarse';
import Productos from './componentes/productos/productos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Menu/>
        <main>
          <Routes>
            <Route path="/Seccion" element={<Seccion/>} />
            <Route path="/Productos" element={<Productos/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Registrarse" element={<Registrarse/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;