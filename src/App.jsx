import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/appLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import DetailsPage from "./pages/DetailsPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={< DetailsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
