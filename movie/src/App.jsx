import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieDetail from "./pages/movieDetail";
import PageNotFound from "./pages/errorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
