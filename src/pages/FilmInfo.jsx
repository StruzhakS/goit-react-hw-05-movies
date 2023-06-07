import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmDetails } from 'services/filmsAPI';
import s from './FilmInfo.module.css';
import filmNF from '../img/film-not-found.png';
const FilmInfo = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/movies`;

  useEffect(() => {
    const getDetailsFilm = async () => {
      try {
        const resp = await getFilmDetails(id);
        setFilmInfo(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailsFilm();
  }, [id]);
  return (
    filmInfo && (
      <>
        <div className={s.container}>
          <Link className={s.button} to={backLinkHref}>
            ↩ Go Back
          </Link>
          <div className={s.infoBox}>
            <div>
              {filmInfo.poster_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${filmInfo.poster_path}`}
                  alt={filmInfo.title}
                />
              ) : (
                <img src={filmNF} alt={filmInfo.title} width="300" />
              )}
            </div>
            <div>
              <h2>{filmInfo.title}</h2>
              <span className={s.userScore}>UserScore: </span>
              <span className={s.percent}>
                {' '}
                {Math.round(filmInfo.vote_average * 10)}%
              </span>
              <h3>Overwiev</h3>
              <p>{filmInfo.overview}</p>
              <h3>Genres</h3>
              <ul className={s.genresList}>
                {filmInfo.genres.map(({ name }, idx) => (
                  <li className={s.genresItem} key={idx}>
                    {name}{' '}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={s.aditional}>
            <p>Aditional information</p>
            <Link to={'cast'} state={location.state} className={s.link}>
              Cast
            </Link>
            <Link to={'reviews'} state={location.state} className={s.link}>
              Reviews
            </Link>
          </div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </>
    )
  );
};

export default FilmInfo;
