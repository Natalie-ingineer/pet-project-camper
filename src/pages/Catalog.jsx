import CamperCardList from '../modules/CamperCardList/CamperCardList';
import FormSearch from '../modules/FormSearch/FormSearch';

const Catalog = () => {
  const divStyle = {
    display: 'flex',
    gap: '64px',
  };

  return (
    <div style={divStyle}>
      <FormSearch />
      <CamperCardList />
    </div>
  );
};

export default Catalog;
