import { sprite } from 'shared/icons';
import s from './Header.module.scss';

import { NavLink } from 'react-router-dom';

const Header = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.current}` : s.navLink;
  };

  return (
    <header className={s.headerNav}>
      <div className={s.wraper}>
        <nav className={s.navigation}>
          <svg width="40" height="28">
            <use xlinkHref={`${sprite}#icon-camperAlcove`}></use>
          </svg>
          <NavLink to="/" type="button" className={s.logo}>
            Поїхали
            <span className={s.logoStudio}> з нами</span>
          </NavLink>
          <ul className={s.navList}>
            <li className={s.navListItem}>
              <NavLink className={getNavLinkClass} to="/" type="button">
                Home
              </NavLink>
            </li>
            <li className={s.navListItem}>
              <NavLink className={getNavLinkClass} to="/catalog" type="button">
                Catalog
              </NavLink>
            </li>
            <li className={s.navListItem}>
              <NavLink className={getNavLinkClass} to="/favorite" type="button">
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>

        <address className={s.navListContacts}>
          <a href="tel:+380931773355" className={s.contactsListLink}>
            +380 (93) 177-33-55
          </a>
        </address>
      </div>
    </header>
  );
};

export default Header;
