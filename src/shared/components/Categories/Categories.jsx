import { sprite } from 'shared/icons';
import s from './Categories.module.scss';

const Categories = ({ icon, adults, beds, text }) => {
  return (
    <div className={s.link}>
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}${icon}`}></use>
      </svg>
      <p>{adults}</p>
      <p>{beds}</p>
      <p>{text}</p>
    </div>
  );
};

export default Categories;
