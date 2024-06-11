import CategoriesList from '../../../modules/CategoriesList/CategoriesList';
import { sprite } from 'shared/icons';
import Button from '../../components/Button/Button';
import s from './CamperCard.module.scss';

const CamperCard = ({ name, price, location, rating, description }) => {
  return (
    // <>
    <div className={s.wrapCard}>
      <div>
        <img
          src="https://ftp.goit.study/img/campers-test-task/1-2.webp"
          alt=""
        />
      </div>
      <div className={s.wrapper}>
        <div className={s.wrapTitle}>
          <h3 className={s.camption}>MaverLick</h3>
          <div className={s.wrapPrice}>
            <p className={s.price}>€8000,00</p>

            <button type="button" className={s.btnLike}>
              <svg width="24" height="22">
                <use xlinkHref={`${sprite}#icon-heard`}></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={s.boxCard}>
          <div className={s.wrapLocation}>
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

          <p className={s.description}>
            Discover the perfect blend of comfort and...
          </p>
          <CategoriesList />
          <Button>Show more</Button>
        </div>
      </div>
    </div>
    // </>
  );
};

export default CamperCard;
