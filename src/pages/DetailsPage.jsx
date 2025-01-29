import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

const initialFormData = {
    name: "",
    text: "",
    vote: 0,
};

const DetailsPage = () => {
    const { slug } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [movie, setMovie] = useState(null);
    const [formData, setFormData] = useState(initialFormData);

    const getMovie = () => {
        axios.get(`${backendUrl}/movies/${slug}`).then(resp => {
            setMovie(resp.data.data);
        })
    }

    useEffect(() => {
        getMovie();
    }, []);

    const storeReview = (formData) => {
        axios
            .post(`${backendUrl}/movies/${movie.id}/reviews`, formData)
            .then((resp) => {
                console.log(resp);
                // Azzero i campi del form
                setFormData(initialFormData);
                // Richiedo i dati del film
                getMovie();
            });
    };


    return (
        <>
            {movie && (
                <>
                    <section>
                        <img
                            className="w-50"
                            src={`${backendUrl}/images/${movie.image}`}
                            alt={`Immagine di ${movie.title}`}
                        />
                        <h1>{movie.title}</h1>
                        <h2 className="text-primary">{movie.director}</h2>
                        <p><strong>Anno di uscita:</strong> {movie.release_year}</p>
                        <p><strong>Genere:</strong> {movie.genre}</p>
                        <p>{movie.abstract}</p>
                    </section>

                    <section>
                        <div className="row row-cols-1 g-3">
                            {movie.reviews.map(curReview => <ReviewCard key={curReview.id} review={curReview} />)}
                        </div>
                    </section>

                    <section className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <h2 className="text-center">Aggiungi una nuova recensione</h2>
                                <ReviewForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    onSubmitFunction={storeReview}
                                />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default DetailsPage;