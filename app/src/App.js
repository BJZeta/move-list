import movies from "./assets/data.js";
import MovieItem from "./components/MovieItem";

function App() {
  return (
    <div className="box-border my-5 mx-auto">
      <div className="text-center text-5xl w-full">
        <h1>Welcome to My HORROR RECOMMENDATIONS</h1>
        {movies && movies.map((movie) => <MovieItem movieData={movie}/>)}
      </div>
    </div>
  );
}

export default App;
