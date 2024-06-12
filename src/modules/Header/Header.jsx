import s from './Header.module.scss';
import { mob, mob2x } from '../../shared/images/index';
import { NavLink } from 'react-router-dom';
// import ResponsiveAppBar from '../../modules/ResponsiveAppBar/ResponsiveAppBar';

const Header = () => {
  return (
    <header className={s.headerNav}>
      <div className={s.wraper}>
        <nav className={s.navigation}>
          <p className={s.logo}>
            Поїхали
            <span className={s.logoStudio}>з нами</span>
          </p>
          <ul className={s.navList}>
            <li className={s.navListItem}>
              <NavLink
                className={'s.navLink s.current'}
                to="/catalog"
                type="button"
              >
                Catalog
              </NavLink>
            </li>

            <li className={s.navListItem}>
              <NavLink className={s.navLink} to="/favorite" type="button">
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

      <div className={s.picture}>
        <picture>
          {/* <source
          media="(min-width: 1440px)"
          srcSet={`${desc} 1x, ${desc2x} 2x`}
        />
        <source media="(min-width: 768px)" srcSet={`${tab} 1x, ${tab2x} 2x`} /> */}
          <img
            srcSet={`${mob} 1x, ${mob2x} 2x`}
            className={s.picture}
            width={400}
            height={650}
            alt="Girl into camper"
          />
        </picture>
      </div>
    </header>
  );
};

export default Header;
