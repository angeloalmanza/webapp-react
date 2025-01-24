import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

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
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            {movies.map((curMovie) => (
              <div className="col" key={curMovie.id}>
                <MovieCard movie={curMovie} />
              </div>
            ))}
          </div>
        </>
    )
}

export default MoviesPage;