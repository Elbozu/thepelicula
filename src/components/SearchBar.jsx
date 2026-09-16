import { useState } from "react";

function SearchBar({ onSearch}) {
    const [texto, setTexto] = useState("");

    function handleChange(e){
     const nuevoTexto = e.target.value;
     setTexto(nuevoTexto);
     onSearch(nuevoTexto);
}

    function handleSubmit(e) {
        e.preventDefault();
    }

   return (
    <form className="search-bar" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar pelicula..."
        value={texto}
        onChange={handleChange}/>
       <button type="submit">Buscar</button> 
    </form>
   );
}

export default SearchBar;