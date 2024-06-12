import { NavLink } from 'react-router-dom';
import { sprite } from '../../shared/icons';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wraper}>
        <div className={s.footerBox}>
          <div className={s.wrapLogo}>
            <svg width="40" height="28">
              <use xlinkHref={`${sprite}#icon-camperAlcove`}></use>
            </svg>

            <NavLink to="/" type="button" className={s.logo}>
              Поїхали
              <span className={s.logoStudio}> з нами</span>
            </NavLink>
          </div>
          <p className={s.footerText}>
            Increase the flow of customers and sales for your business with
            digital marketing & growth solutions.
          </p>
        </div>

        <div className={s.footerSubscribe}>
          <p className={s.footerSubtitle}>Subscribe</p>
          <form className={s.footerForm}>
            <label className={s.footerFormLabel}>
              <input
                className={s.footerFormInput}
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </label>
            <button type="submit" className={s.subscribeBtn}>
              Subscribe
              <svg width="24" height="20">
                <use xlinkHref={`${sprite}#icon-send`}></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
