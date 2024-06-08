import CategoriesList from 'modules/CategoriesList/CategoriesList';
import { sprite } from 'shared/icons';

const CamperCard = ({ name, price, location, rating, description }) => {
  return (
    <div>
      <img src="https://ftp.goit.study/img/campers-test-task/1-2.webp" alt="" />

      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <button>
        <svg width="24" height="22">
          <use xlinkHref={`${sprite}#icon-heard`}></use>
        </svg>
      </button>

      <div>
        <svg width="20" height="20">
          <use xlinkHref={`${sprite}#icon-star`}></use>
        </svg>
        <p>{rating}(2 Reviews)</p>

        <div>
          <svg width="18" height="20">
            <use xlinkHref={`${sprite}#icon-location`}></use>
          </svg>
          <p>{location}</p>
        </div>

        <p>{description}</p>
        <CategoriesList />
      </div>
    </div>
  );
};

export default CamperCard;
