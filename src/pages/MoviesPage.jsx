import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const MoviesPage = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [genres, setGenres] = useState([]);
    const [releaseYear, setReleaseYear] = useState("");
    const [releaseYears, setReleaseYears] = useState([]);

    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            params.search = search
        }

        if (genre.length > 0) {
            params.genre = genre
        }

        if (releaseYear.length > 0) {
            params.release_year = releaseYear
        }

        axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
            setMovies(resp.data.data);

            const uniqueGenres = Array.from(
                new Set(resp.data.data.map((movie) => movie.genre))
            );
            setGenres(uniqueGenres);

            const uniqueYears = Array.from(
                new Set(resp.data.data.map((movie) => movie.release_year))
            );
            uniqueYears.sort((a, b) => a - b);
            setReleaseYears(uniqueYears);
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div>
                <Link to="/movies/create" className="btn btn-primary">Aggiungi un nuovo film</Link>
            </div>

            <div className="my-3 d-flex">
                {/* Input per il titolo */}
                <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="form-control"
                    type="search"
                    aria-label="Cerca film per parola chiave"
                    placeholder="Cerca film"
                />

                {/* Filtro per i generi */}
                <select
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                    className="form-select"
                    aria-label="Filtra per genere"
                >
                    <option value="">Tutti i generi</option>
                    {genres.map((curGenre, index) => (
                        <option key={index} value={curGenre}>
                            {curGenre}
                        </option>
                    ))}
                </select>

                {/* Filtro per gli anni di pubblicazione */}
                <select
                    value={releaseYear}
                    onChange={(event) => setReleaseYear(event.target.value)}
                    className="form-select"
                    aria-label="Filtra per anno"
                >
                    <option value="">Anni di Pubblicazione</option>
                    {releaseYears.map((curYear, index) => (
                        <option key={index} value={curYear}>
                            {curYear}
                        </option>
                    ))}
                </select>

                <button onClick={getMovies} className="btn btn-primary ms-2">
                    Cerca
                </button>
            </div>

            <h1>Lista dei film</h1>
            {movies.length > 0 ? (
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {movies.map((curMovie) => (
                        <div className="col" key={curMovie.slug}>
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