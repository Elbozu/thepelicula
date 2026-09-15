import { useState } from "react";

function SearchBar({ onSearch}) {
    const [texto, setTexto] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(texto);
    }

   return (
    <form className="search-bar" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar pelicula..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}/>
       <button type="submit">Buscar</button> 
    </form>
   );
}

export default SearchBar;