import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/filmsAPI';
import userNF from '../../img/user-not-found.jpg';
import s from './Cast.module.css';
const Cast = () => {
  const [profileInfo, setProfileInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCredits(id).then(data => {
      setProfileInfo(data.cast);
    });
  }, [id]);

  return (
    <ul className={s.castList}>
      {profileInfo.map(({ name, profile_path, character }, idx) => (
        <li key={idx} className={s.castListItem}>
          {profile_path ? (
            <img
              src={`	https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`}
              alt={name}
            />
          ) : (
            <img src={userNF} alt={name} width="138" />
          )}
          <h3> {name} </h3>
          <span className={s.character}>Characrer:</span>{' '}
          <span>{character}</span>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
