import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/filmsAPI';
import s from './Reviews.module.css';
const Reviews = () => {
  const [revievsInfo, setRevievsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(({ results }) => setRevievsInfo(results));
  }, [id]);
  return (
    <ul className={s.reviews}>
      {revievsInfo.map(({ author, content }, idx) => (
        <li key={idx}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
