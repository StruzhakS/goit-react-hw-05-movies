import { Link, useLocation } from 'react-router-dom';
import s from './SearchedFilm.module.css';
import FlmNF from '../../img/film-not-found.png';
export const SearchFilm = ({ searchedFilm }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {searchedFilm.map(({ title, id, poster_path }) => (
        <li key={id} className={s.listItem}>
          <Link
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={{ from: location }}
          >
            <img
              className={s.posterIMG}
              src={
                poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
                  : FlmNF
              }
              alt={title}
            />
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
