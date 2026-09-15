function FavoriteButton({ esFavorita, onToggle}) {
    return (
        <button 
        className="favorite-button"
        onClick={onToggle}
        aria-label={esFavorita ? "Quitar de favoritos" : "Agregar a favoritos"}>
            {esFavorita ? "❤️" : "🤍"}
        </button>
    );
}

export default FavoriteButton;