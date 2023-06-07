import { Routes, Route } from 'react-router-dom';
import Header from './Header/Navigate';
import TrendingFilms from './Films/TrendingFilms';
import PageNotFound from './PageNotFound/PageNotFound';
import SearchMovies from './SearchedFilm/SearchMovies';
import FilmInfo from 'pages/FilmInfo';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TrendingFilms />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:id" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
