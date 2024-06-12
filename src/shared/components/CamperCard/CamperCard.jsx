import { useState } from 'react';

import CategoriesList from '../../../modules/CategoriesList/CategoriesList';
import { sprite } from 'shared/icons';
import Button from '../../components/Button/Button';
import Modal from '../../../modules/Modal/Modal';

import s from './CamperCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../redux/favoritesSlice';

const CamperCard = ({
  camperId,
  gallery,
  name,
  price,
  location,
  rating,
  description,
  adults,
  beds,
  conditioner,
  hob,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((camper) => camper.id === camperId);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id: camperId }));
    } else {
      dispatch(
        addFavorite({
          id: camperId,
          gallery,
          name,
          price,
          location,
          rating,
          description,
          adults,
          beds,
          conditioner,
          hob,
          form,
          length,
          width,
          height,
          tank,
          consumption,
        })
      );
    }
  };

  const truncatedDescription = truncateText(description, 60);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }

  return (
    <div className={s.wrapCard}>
      <div>
        <img src={gallery[0]} alt="camper" />
      </div>
      <div className={s.wrapper}>
        <div className={s.wrapTitle}>
          <h3 className={s.camption}>{name}</h3>
          <div className={s.wrapPrice}>
            <p className={s.price}>€{price}</p>

            <button type="button" className={s.btnLike} onClick={handleClick}>
              {isFavorite ? (
                <svg width="24" height="22">
                  <use xlinkHref={`${sprite}#icon-heardred`}></use>
                </svg>
              ) : (
                <svg width="24" height="22">
                  <use xlinkHref={`${sprite}#icon-heard`}></use>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={s.boxCard}>
          <div className={s.wrapLocation}>
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

          <p className={s.description}>{truncatedDescription}</p>
          <CategoriesList
            adults={adults}
            beds={beds}
            conditioner={conditioner}
            hob={hob}
          />
          <Button type="button" onClick={() => setModalActive(true)}>
            Show more
          </Button>
          {modalActive && (
            <Modal
              active={modalActive}
              setActive={setModalActive}
              gallery={gallery}
              name={name}
              price={price}
              location={location}
              rating={rating}
              description={description}
              form={form}
              length={length}
              width={width}
              height={height}
              tank={tank}
              consumption={consumption}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
