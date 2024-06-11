import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { sprite } from '../../shared/icons';
import { Suspense } from 'react';
import Loader from '../../modules/Loader/Loader';

import s from './Modal.module.scss';

const Modal = ({ active, setActive }) => {
  const location = useLocation();

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

        <h3 className={s.camption}>MaverLick</h3>

        <div className={s.wraper}>
          <div className={s.wrapReviews}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={s.textReviews}>4.4(2 Reviews)</p>
          </div>
          <div className={s.boxLocation}>
            <svg width="18" height="20">
              <use xlinkHref={`${sprite}#icon-location`}></use>
            </svg>
            <p>Ukraine, Kiev</p>
          </div>
        </div>
        <p className={s.price}>€8000,00</p>
        <div className={s.wrapImages}>
          <div>
            <img
              src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://ftp.goit.study/img/campers-test-task/1-2.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://ftp.goit.study/img/campers-test-task/1-3.webp"
              alt=""
            />
          </div>
        </div>
        <p className={s.description}>
          Embark on an unforgettable journey with the Road Bear C 23-25, an
          epitome of comfort and convenience on wheels. This alcove-style
          motorhome is meticulously designed to cater to the needs of families
          and small groups, ensuring a seamless and enjoyable road trip
          experience. The sleek exterior houses a spacious and thoughtfully laid
          out interior, making it your home away from home. The Road Bear C
          23-25 boasts a stylish and modern design, coupled with top-notch
          amenities to enhance your travel adventures. The interior is not only
          aesthetically pleasing but also functional, providing ample living and
          sleeping space. Whether you're cruising along scenic highways or
          parked in a picturesque campsite, this RV offers the perfect blend of
          functionality and comfort. Inside, you'll find a fully equipped
          kitchen, complete with a refrigerator, microwave, and a three-burner
          hob, allowing you to prepare delicious meals on the go. The bathroom
          is fitted with a shower and toilet, ensuring you have the convenience
          of home wherever your travels take you. The sleeping quarters are
          designed for relaxation, with three comfortable beds to accommodate
          both adults and children. Additional features include air
          conditioning, a TV, CD player, radio, and ample storage space for all
          your travel essentials. The Road Bear C 23-25 is equipped with a 35kg
          gas supply for cooking, and a water tank with a capacity of 151 liters
          to meet your daily needs. Fuelled by petrol and featuring an automatic
          transmission, this motorhome is not only easy to drive but also
          fuel-efficient, allowing you to focus on enjoying the journey rather
          than worrying about logistics. Create lasting memories with your loved
          ones as you navigate the roads in the Road Bear C 23-25. It's not just
          an RV; it's a mobile sanctuary for your adventures, promising comfort,
          style, and the freedom to explore at your own pace.
        </p>

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
