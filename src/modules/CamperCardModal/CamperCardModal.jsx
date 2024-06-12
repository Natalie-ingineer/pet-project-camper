import { sprite } from '../../shared/icons';
import s from './CamperCardModal.module.scss';

const CamperCardModal = ({
  gallery,
  name,
  price,
  location,
  rating,
  description,
}) => {
  return (
    <>
      <h3 className={s.camption}>{name}</h3>

      <div className={s.wraper}>
        <div className={s.wrapReviews}>
          <svg width="20" height="20">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <p className={s.textReviews}>{rating}(2 Reviews)</p>
        </div>
        <div className={s.boxLocation}>
          <svg width="18" height="20">
            <use xlinkHref={`${sprite}#icon-location`}></use>
          </svg>
          <p>{location}</p>
        </div>
      </div>
      <p className={s.price}>€{price}</p>
      <div className={s.wrapImages}>
        <div>
          <img src={gallery[0]} alt="camper" />
        </div>
        <div>
          <img src={gallery[1]} alt="camper" />
        </div>
        <div>
          <img src={gallery[2]} alt="camper" />
        </div>
      </div>
      <p className={s.description}>{description}</p>
    </>
  );
};

export default CamperCardModal;
