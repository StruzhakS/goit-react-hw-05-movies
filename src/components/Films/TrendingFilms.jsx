import { useEffect, useState } from 'react';
import { getPopularFilms } from 'services/filmsAPI';
import { SearchFilm } from 'components/SearchMovies/SearchFilm';

const TrendingFilms = () => {
  const [films, setFilm] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const { results } = await getPopularFilms();
        setFilm(results);
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []);

  return (
    <>
      <h1> Trending today </h1>
      <SearchFilm searchedFilm={films} />
    </>
  );
};
export default TrendingFilms;
