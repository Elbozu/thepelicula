import { useFavoritos } from "../context/FavoritosContext";
import PeliculaList from "../components/PeliculaList";

function Favoritos() {

    const { favoritos } = useFavoritos();
    return (
        <div className="favoritos-page">
            <h2>Mis peliculas Favoritas</h2>
              {favoritos.length === 0 ? (
        <p>Aún no has agregado películas a tus favoritos. ¡Explora el catálogo y dale al corazón!</p>
      ) : (
        <PeliculaList peliculas={favoritos} />
      )}
        </div>
    );
}

export default Favoritos;