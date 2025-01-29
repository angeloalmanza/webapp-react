import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/appLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import DetailsPage from "./pages/DetailsPage"
import CreateMoviePage from "./pages/CreateMoviePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:slug" element={<DetailsPage/>}/>
            <Route path="/movies/create" element={<CreateMoviePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
