import s from './PageNotFound.module.css';
import img from '../../img/Screenshot_2.jpg';

const PageNotFound = () => {
  return (
    <div className={s.boxImg}>
      <img src={img} alt="Page not found" className={s.imgNF} />
    </div>
  );
};

export default PageNotFound;
