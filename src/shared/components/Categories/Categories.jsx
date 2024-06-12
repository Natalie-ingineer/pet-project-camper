import { sprite } from 'shared/icons';
import s from './Categories.module.scss';

const Categories = ({ icon, adults, beds, conditioner, hob, text }) => {
  return (
    <div className={s.link}>
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}${icon}`}></use>
      </svg>
      {adults && <p>{adults} </p>}
      {beds && <p>{beds} </p>}
      {conditioner && <p>{conditioner} </p>}
      {hob && <p>{hob} </p>}
      <p>{text}</p>
    </div>
  );
};

export default Categories;
