import { Link, useLocation } from 'react-router-dom';
import s from './SearchedFilm.module.css';

export const SearchFilm = ({ searchedFilm }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {searchedFilm.map(({ title, id }) => (
        <li key={id} className={s.listItem}>
          <Link
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
