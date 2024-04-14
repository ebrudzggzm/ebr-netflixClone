import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions/movieActions";
import Loader from "./Loader";
import baseImgUrl from "../constants/index";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
 
  }, []);
  console.log(movies, "data");
  const i = Math.floor(Math.random() * movies.length);
  const movie = movies[i];
console.log(movie,'movie')
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-h-[400px] my-10 gap-5">
      {!movie || isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="flex justify-center items-center  p-5">
          <div className="flex flex-col gap-3 items-center">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>IMDB : {movie.vote_average}</p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 rounded hover:bg-red-700">Film İzle</button>
              <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">Listeye Ekle</button>
            </div>
          </div>
          
        </div>
      )}
      <div className="flex flex-col gap-3 items-center justify-center m-6">
            <img className="hero-img rounded-md " src={baseImgUrl + movie?.backdrop_path} alt="resim" />
          </div>
    </div>
  );
};

export default Hero;
