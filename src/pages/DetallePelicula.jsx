import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_KEY, API_BASE_URL } from "../utils/constants";

const API_KEY = "da258558ecf5f3e155efdb439c939a24";

function DetallePelicula(){
    const {id} = useParams();

  
  const API_URL = `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
  const { data: pelicula, cargando, error } = useFetch(API_URL);

  if (cargando) return <p className="mensaje-estado">Cargando</p>;
  if (error) return <p className="mensaje-estado error">Error :{error}</p>;
  if (!pelicula) return null;

  const posterUrl = pelicula.poster_path 
   ? `https://image.tmdb.org/t/p/w400${pelicula.poster_path}`
    : "https://via.placeholder.com/400x600?text=Sin+imagen";


    return (
        <div className="detalle-container">
            <Link to="/" className="btn-volver">↩️ Volver al inicio</Link>


          <div className="detalle-card">
            <img src={posterUrl} alt={pelicula.title}/>

            <div className="detalle-info">
                <h2>{pelicula.title}</h2>
                <p><strong>Estreno:</strong> {pelicula.release_date || "No disponible"}</p>
                <p><strong>Puntuacion:</strong> 🌟 {pelicula.vote_average ?  pelicula.vote_average.toFixed(1) : "N/A"}</p>
                <h3>Sipnosis</h3>
                <p>{pelicula.overview || "No hay sinopsis disponible en español."}</p>
            </div>
          </div>
        </div>
        
    );
}

export default DetallePelicula;