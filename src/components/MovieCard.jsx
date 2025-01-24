function MovieCard({ movie }) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    return (
      <div className="card h-100">
        <img
          src={
            movie.image
              ? `${backendUrl}/images/${movie.image}`
              : "https://placeholder.pics/svg/300"
          }
          className="card-img-top"
          alt={`Immagine di ${movie.title}`}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6>{movie.director}</h6>
          <p className="card-text">{movie.abstract}</p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;