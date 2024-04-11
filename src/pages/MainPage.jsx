import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreActions";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const { isLoading, error, genres } = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres()); //kategorileri aldık
  
    dispatch(getMovies());
  }, []);

  console.log(genres, "kategoriler nerde");
  return (
    <>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error err={err.message} />
      ) : (
        genres.map((item) => <MovieList key={item.id} genre={item}/>)
      )}
    </>
  );
};

export default MainPage;
