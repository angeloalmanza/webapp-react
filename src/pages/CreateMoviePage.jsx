import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMoviePage = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const defaultFormData = {
        title: "",
        director: "",
        genre: "",
        release_year: "",
        abstract: "",
        image: ""
    }

    const [movieData, setMovieData] = useState(defaultFormData);

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const fieldName = event.target.name;
        if (fieldName === "image") {
            const imageFile = event.target.files[0];
            const newMovieData = { ...movieData, image: imageFile };
            setMovieData(newMovieData);
        } else {
            const value = event.target.value;
            const newMovieData = { ...movieData, [fieldName]: value };
            setMovieData(newMovieData);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const dataToSend = new FormData();

        for (let key in movieData) {
            console.log(`Adding ${key}:`, movieData[key]);
            dataToSend.append(key, movieData[key]);
        }

        axios
            .post(`${backendUrl}/movies`, dataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((resp) => {
                navigate("/movies");
            });
    }




    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="title">Titolo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        value={movieData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="director">Regista</label>
                    <input
                        type="text"
                        className="form-control"
                        name="director"
                        id="director"
                        value={movieData.director}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre">Genere</label>
                    <input
                        type="text"
                        className="form-control"
                        name="genre"
                        id="genre"
                        value={movieData.genre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="release_year">Anno di rilascio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="release_year"
                        id="release_year"
                        value={movieData.release_year}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="abstract">Descrizione</label>
                    <textarea
                        className="form-control"
                        name="abstract"
                        id="abstract"
                        value={movieData.abstract}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image">Copertina del film</label>
                    <input
                        type="file"
                        className="form-control"
                        name="image"
                        id="image"
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary">Aggiungi</button>
            </form>
        </>
    )
}

export default CreateMoviePage;