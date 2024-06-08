import Button from 'shared/components/Button/Button';
import Categories from 'shared/components/Categories/Categories';

const CategoriesList = ({ adults, beds }) => {
  return (
    <div>
      <Categories icon={'#icon-users'} adults={adults} text={'adults'} />
      <Categories icon={'#icon-automatic'} text={'Automatic'} />
      <Categories icon={'#icon-petrol'} text={'Petrol'} />
      <Categories icon={'#icon-kitchen'} text={'Kitchen'} />
      <Categories icon={'#icon-bed'} beds={beds} text={'beds'} />
      <Categories icon={'#icon-air'} text={'AC'} />
      <Button>Show more</Button>
    </div>
  );
};

export default CategoriesList;
