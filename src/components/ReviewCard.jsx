const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4><strong>Scritto da:</strong> {review.name}</h4>
                    <p><strong>Voto:</strong> {review.vote}</p>
                    <p>{review.text}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard;