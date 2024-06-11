import FormSearch from '../modules/FormSearch/FormSearch';
import CamperCard from '../shared/components/CamperCard/CamperCard';

const Catalog = () => {
  const divStyle = {
    display: 'flex',
    gap: '64px',
  };

  return (
    <div style={divStyle}>
      <FormSearch />
      <CamperCard />
    </div>
  );
};

export default Catalog;
