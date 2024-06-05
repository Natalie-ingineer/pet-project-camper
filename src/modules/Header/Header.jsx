import { sprite } from 'shared/icons';
import s from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-star`}></use>
      </svg>
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-close`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-kitchen`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-petrol`}></use>
      </svg>

      <h1>Home Page</h1>
    </div>
  );
};

export default Header;
