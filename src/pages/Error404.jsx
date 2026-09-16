import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="not-found-page" style={{ textAlign: "center", padding: "50px" }}>
      <h2>404 - Pagina no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Volver a la pagina principal
      </Link>
    </div>
  );
}
export default Error404;