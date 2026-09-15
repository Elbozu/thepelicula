import PeliculaCard from "./PeliculaCard";

function PeliculaList({peliculas}) {
    if (peliculas.length === 0) {
        return <p>No se encontraron peliculas</p>
    
    }


   return(
    <div className="pelicula-list">
        {peliculas.map((pelicula) => (
            <PeliculaCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </div>
   );
}

export default PeliculaList;