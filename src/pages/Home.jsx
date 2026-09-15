import { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import PeliculaList from "../components/PeliculaList";
 
const API_KEY = "da258558ecf5f3e155efdb439c939a24";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`;


function Home() {
  const { data, cargando, error } = useFetch(API_URL);
  const [query, setQuery] = useState("");
  
 const peliculas = data?.results || [];

 // use useMemo en vez de useCallback porque quiero el resultado, no la funcion en si
  const peliculasFiltradas = useMemo(() => {
    return peliculas.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [peliculas, query]); 


  return (
    <div className="home-page">
      <h2>Peliculas populares</h2>


       {cargando && <p className="mensaje-estado">Cargando películas...</p>}
       {error && !cargando && ( <p className="mensaje-estado error">Hubo un error: {error}</p>)}
       {!cargando && !error && (
        <>
      <SearchBar onSearch={setQuery} />
      <PeliculaList peliculas={peliculasFiltradas} />
      </>
       )}
    </div>
  );
}

export default Home;