import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavoritos } from "../context/FavoritosContext";
import FavoriteButton from "./FavoriteButton";

function PeliculaCard({ pelicula }) {
    const { toggleFavorito, esFavorito } = useFavoritos();

    const favorita = esFavorito(pelicula.id);


    const posterUrl = pelicula.poster_path
    ? `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    : "https://via.placeholder.com/300x450?text=Sin+imagen";


   return (
    <div className="movie-card">
        <Link to={`/detalle/${pelicula.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={posterUrl} alt={pelicula.title} />
        <h3>{pelicula.title}</h3>
        </Link>

        <p>{pelicula.release_date ? pelicula.release_date.slice(0, 4) : "Sin fecha"}</p>

         <FavoriteButton esFavorita={favorita} onToggle={() => toggleFavorito(pelicula)}/>
    </div>
   );
}

export default PeliculaCard;