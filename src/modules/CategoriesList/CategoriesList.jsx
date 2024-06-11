import Categories from '../../shared/components/Categories/Categories';

import s from './CategoriesList.module.scss';

const CategoriesList = ({ adults, beds }) => {
  return (
    <div className={s.wrapCategories}>
      <Categories icon={'#icon-users'} adults={adults} text={'adults'} />
      <Categories icon={'#icon-automatic'} text={'Automatic'} />
      <Categories icon={'#icon-petrol'} text={'Petrol'} />
      <Categories icon={'#icon-kitchen'} text={'Kitchen'} />
      <Categories icon={'#icon-bed'} beds={beds} text={'beds'} />
      <Categories icon={'#icon-air'} text={'AC'} />
    </div>
  );
};

export default CategoriesList;
