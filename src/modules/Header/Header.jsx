import { sprite } from 'shared/icons';
import s from './Header.module.scss';
import Button from 'shared/components/Button/Button';
import ButtonLoadMore from 'shared/components/ButtonLoadMore/ButtonLoadMore';

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

      <svg width="24" height="24">
        <use xlinkHref={`${sprite}#icon-air`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-calendar`}></use>
      </svg>

      <svg width="32" height="32">
        <use xlinkHref={`${sprite}#icon-tv`}></use>
      </svg>

      <svg width="32" height="32">
        <use xlinkHref={`${sprite}#icon-shower`}></use>
      </svg>

      <svg width="40" height="28">
        <use xlinkHref={`${sprite}#icon-camperVan`}></use>
      </svg>

      <svg width="40" height="28">
        <use xlinkHref={`${sprite}#icon-camperFullyIntegrated`}></use>
      </svg>

      <svg width="40" height="28">
        <use xlinkHref={`${sprite}#icon-camperAlcove`}></use>
      </svg>

      <svg width="24" height="22">
        <use xlinkHref={`${sprite}#icon-heard`}></use>
      </svg>

      <svg width="24" height="22">
        <use xlinkHref={`${sprite}#icon-heardred`}></use>
      </svg>

      <svg width="18" height="20">
        <use xlinkHref={`${sprite}#icon-location`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-conditioner`}></use>
      </svg>

      <svg width="18" height="18">
        <use xlinkHref={`${sprite}#icon-cd`}></use>
      </svg>

      <svg width="18" height="18">
        <use xlinkHref={`${sprite}#icon-radio`}></use>
      </svg>

      <svg width="20" height="15">
        <use xlinkHref={`${sprite}#icon-hob`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-toilet`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-freezer`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-gas`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-water`}></use>
      </svg>

      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#icon-microwave`}></use>
      </svg>

      <h1>Home Page</h1>

      <Button>Search</Button>
      <ButtonLoadMore>Load more</ButtonLoadMore>
    </div>
  );
};

export default Header;
