import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
        <h1>Benvenuto nella mia app di film</h1>
        <Link to="/movies" className="btn btn-primary">Vedi tutti i film</Link>
        </>
    )
}

export default HomePage;