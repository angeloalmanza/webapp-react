import { useState } from "react";

const ReviewForm = ({ onSubmitFunction, formData, setFormData }) => {
    const availableVotes = Array.from(Array(6).keys());

    const [error, setError] = useState(false);

    const setFieldValue = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        const newFormData = { ...formData };
        newFormData[fieldName] = value;
        setFormData(newFormData);
    }

    const isDataValid = () => {
        if (
            formData.name.length < 4 ||
            formData.vote < 0 ||
            formData.vote > 5 ||
            (formData.text.length > 0 && formData.length < 6)
        ) {
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        if (!isDataValid()) {
            setError(true);
        } else {
            onSubmitFunction(formData);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Nome Utente
                </label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="username"
                    value={formData.name}
                    onChange={setFieldValue}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="vote">Seleziona il voto</label>
                <select
                    name="vote"
                    className="form-select"
                    id="vote"
                    value={formData.vote}
                    onChange={setFieldValue}
                >
                    {availableVotes.map((curVote) => (
                        <option key={curVote} value={curVote}>
                            {curVote}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="text">Testo della recensione</label>
                <textarea
                    className="form-control"
                    name="text"
                    id="text"
                    value={formData.text}
                    onChange={setFieldValue}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default ReviewForm;