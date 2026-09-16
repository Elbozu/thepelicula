import { NavLink } from "react-router-dom";
import { useFavoritos } from "../context/FavoritosContext";

function Navbar() {
    const { favoritos } = useFavoritos(); 
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">ThePelicula</h1>
            <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link activa" : "nav-link")}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className={({ isActive }) => (isActive ? "nav-link activa" : "nav-link")}>
          Favoritos {favoritos.length > 0 && `(${favoritos.length})`}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;