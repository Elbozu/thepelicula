import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        async function fetchData() {
            try {
                setCargando(true);
                setError(null);

                const respuesta = await fetch(url);

                if (!respuesta.ok) {
                    throw new Error("No se pudo optener la informacion de la Api");
                }

                const resultado = await respuesta.json();
                setData(resultado);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }

                
            }
            
        fetchData();
    },[url]);

    return {data,cargando,error};
}

export default useFetch;