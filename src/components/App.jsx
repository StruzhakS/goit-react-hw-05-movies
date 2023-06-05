import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import TrendingFilms from './Films/TrendingFilms';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TrendingFilms />} />
        <Route path="/movies" element={<Movies />}>
          <Route
            path="get-movie-details "
            element={<h1>get-movie-details</h1>}
          />
          <Route
            path="get-movie-credits "
            element={<h1>get-movie-credits</h1>}
          />
          <Route
            path="get-movie-reviews  "
            element={<h1>get-movie-reviews</h1>}
          />
        </Route>
        {/* <Route path="/movies" element={<Movies />} />
        </Routes> */}

        {/* <Route path="/search/search-movies " element={<h1>search-movies</h1>} />
        <Route path="/trending/get-trending " element={<h1>get-trending</h1>} />
        // <Route
        //   path="/movies/get-movie-details "
        //   element={<h1>get-movie-details</h1>}
        // />
        // <Route
        //   path="/movies/get-movie-credits "
        //   element={<h1>get-movie-credits</h1>}
        // />
        // <Route
        //   path="/movies/get-movie-reviews  "
        //   element={<h1>get-movie-reviews</h1>}
        // /> */}
      </Routes>
    </>
  );
};
