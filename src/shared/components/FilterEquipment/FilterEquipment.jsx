import { sprite } from 'shared/icons';
import s from './FilterEquipment.module.scss';

const FilterEquipment = ({ text, icon, width, height }) => {
  return (
    <div className={s.wraper}>
      <svg width={width} height={height}>
        <use xlinkHref={`${sprite}${icon}`}></use>
      </svg>
      <p className="text">{text}</p>
    </div>
  );
};

export default FilterEquipment;
