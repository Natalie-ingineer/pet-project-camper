import { NavLink, Outlet } from 'react-router-dom';
import { sprite } from '../../shared/icons';
import { Suspense } from 'react';
import Loader from '../../modules/Loader/Loader';

import s from './Modal.module.scss';

import CamperCardModal from '../../modules/CamperCardModal/CamperCardModal';

const Modal = ({
  active,
  setActive,
  gallery,
  name,
  price,
  location,
  rating,
  description,
}) => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.current}` : s.navLink;
  };

  return (
    <div
      className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.btnClose} onClick={() => setActive(false)}>
          <svg width="20" height="20">
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <CamperCardModal
          gallery={gallery}
          name={name}
          price={price}
          location={location}
          rating={rating}
          description={description}
        />
        <ul className={s.wrapNavLink}>
          <li>
            <NavLink to="features" className={getNavLinkClass}>
              Features
            </NavLink>
          </li>

          <li>
            <NavLink to="reviews" className={getNavLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Modal;
