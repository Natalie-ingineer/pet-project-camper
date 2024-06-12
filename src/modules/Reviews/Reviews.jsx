import { sprite } from '../../shared/icons';
import FormDate from '../../modules/FormDate/FormDate';

import s from './Reviews.module.scss';

const Reviews = () => {
  return (
    <div className={s.wrapReviews}>
      <div className={s.wraper}>
        <div className={s.boxReviews}>
          <div>
            <div className={s.wrapIcon}>
              <p className={s.iconImg}>A</p>
              <div className={s.box}>
                <p className={s.title}>Alice</p>
                <div className={s.wrapStar}>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                </div>
              </div>
            </div>

            <p className={s.description}>
              The Mavericks panel truck was a perfect choice for my solo road
              trip. Compact, easy to drive, and had all the essentials. The
              kitchen facilities were sufficient, and the overall experience was
              fantastic.
            </p>
          </div>
          <div>
            <div className={s.wrapIcon}>
              <p className={s.iconImg}>B</p>
              <div className={s.box}>
                <p className={s.title}>Bob</p>
                <div className={s.wrapStar}>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-starClear`}></use>
                  </svg>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-starClear`}></use>
                  </svg>
                </div>
              </div>
            </div>

            <p className={s.description}>
              The Mavericks panel truck was a perfect choice for my solo road
              trip. Compact, easy to drive, and had all the essentials. The
              kitchen facilities were sufficient, and the overall experience was
              fantastic.
            </p>
          </div>
        </div>
      </div>
      <FormDate />
    </div>
  );
};

export default Reviews;
