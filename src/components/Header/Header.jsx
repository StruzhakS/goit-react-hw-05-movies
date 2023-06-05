import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <header>
      <nav className={s.home}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(s.linkHome, isActive && s.active)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => clsx(s.linkHome, isActive && s.active)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
