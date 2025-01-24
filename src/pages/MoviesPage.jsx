import axios from "axios";
import { useEffect, useState } from "react";

const MoviesPage = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        axios.get(`${backendUrl}/movies`).then((resp) => {
            setMovies(resp.data.data);
        })
    }, [])

    return (
        <>
            <h1>Lista dei film</h1>
            <div>
                <ul>
                    {movies && movies.map((curMovie) => (
                        <li key={curMovie.id}>{curMovie.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MoviesPage;