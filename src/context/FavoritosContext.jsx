import { children, createContext, useContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState(() => {
        const guardados = localStorage.getItem("thepelicula_favoritos");
        return guardados ? JSON.parse(guardados) : [];
    });

    useEffect(() => {
        localStorage.setItem("thepelicula_favoritos", JSON.stringify(favoritos));
    },[favoritos]);


    function toggleFavorito(pelicula) {
    const yaExiste = favoritos.some((fav) => fav.id === pelicula.id);

    if (yaExiste) {
        setFavoritos(favoritos.filter((fav) => fav.id !== pelicula.id));
    } else {
        setFavoritos([...favoritos, pelicula]);
    }
}

function esFavorito(id) {
    return favoritos.some((fav) => fav.id === id);
}


const value = {favoritos,toggleFavorito,esFavorito};


return (
    <FavoritosContext.Provider value={value}>{children}</FavoritosContext.Provider>

);

}


export function useFavoritos() {
    const context = useContext(FavoritosContext);
    if (!context) {
        throw new Error("useFavoritos debe usarse dentro de un FavoritosProvider manito");
    }

    return context;
}