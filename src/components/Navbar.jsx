function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">ThePelicula</h1>
            <ul className="navbar-links">
                <li><a href="/"/>Inicio</li>
                <li><a href="/buscar"/>Buscar</li>
                <li><a href="/favoritos"/>Favoritos</li>
            </ul>
        </nav>
    );
}

export default Navbar;