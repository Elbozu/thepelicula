import { useState } from "react";
import FavoriteButton from "./FavoriteButton";

function PeliculaCard({ pelicula }) {
    const [esFavorita, setEsFavorita] = useState(false);


    const posterUrl = pelicula.poster_path
    ? `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    : "https://via.placeholder.com/300x450?text=Sin+imagen";


 function handleToggle() {
    setEsFavorita(!esFavorita);
  }

   return (
    <div className="movie-card">
        <img src={posterUrl} alt={pelicula.title} />
        <h3>{pelicula.title}</h3>
        <p>{pelicula.release_date ? pelicula.release_date.slice(0, 4) : "Sin fecha"}</p>
         <FavoriteButton esFavorita={esFavorita} onToggle={handleToggle} />
    </div>
   );
}

export default PeliculaCard;