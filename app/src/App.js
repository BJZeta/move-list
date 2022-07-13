import movies from "./assets/data.js";
import MovieItem from "./components/MovieItem";
import { FaSkull } from "react-icons/fa";

function App() {
  return (
    <div className="mx-auto main-page">
      <div className="w-full">
        <span className="text-center text-5xl text-red-900">
          <h1 className="title">Welcome to My HORROR RECOMMENDATIONS</h1>
          <FaSkull className="mx-auto" />
        </span>
        <div className="mt-5">
          {movies && movies.map((movie) => <MovieItem movieData={movie} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
