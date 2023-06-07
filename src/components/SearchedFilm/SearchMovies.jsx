import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedFilm } from 'services/filmsAPI';
import { SearchFilm } from 'components/SearchMovies/SearchFilm';
import s from './SearchMovies.module.css';
const SearchMovies = () => {
  const [input, setInput] = useState('');
  const [searchedFilm, setSearchedFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const searchFilm = input !== '' ? { query: input } : {};
    setSearchParams(searchFilm);
  };

  useEffect(() => {
    const getSFilms = async () => {
      try {
        const { results } = await getSearchedFilm(searchParams.get('query'));
        setSearchedFilm(results);
      } catch (error) {
        console.log(error);
      }
    };
    getSFilms();
  }, [searchParams]);
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Pleace enter a movie to search"
        />
        <button className={s.searchBtn}>Search</button>
      </form>
      {/* {searchParams.get('query') ? ( */}
      <SearchFilm searchedFilm={searchedFilm} />
      {/* ) : (
        <h2>Фільм не знайдено</h2>
      )} */}
    </>
  );
};
export default SearchMovies;
