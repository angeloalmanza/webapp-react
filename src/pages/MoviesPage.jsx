import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            params.search = search
        }

        axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
            setMovies(resp.data.data);
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className="my-3 d-flex">
                <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="form-control"
                    type="search"
                    aria-label="Cerca film per parola chiave"
                    placeholder="Cerca film"
                />
                <button onClick={getMovies} className="btn btn-primary ms-2">
                    Cerca
                </button>
            </div>
            <h1>Lista dei film</h1>
            {movies.length > 0 ? (
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                {movies.map((curMovie) => (
                    <div className="col" key={curMovie.id}>
                        <MovieCard movie={curMovie} />
                    </div>
                ))}
            </div>
            ) : (
                <div>
                    Nessun film trovato con quella parola. Riprova
                </div>
            )}
            
        </>
    )
}

export default MoviesPage;