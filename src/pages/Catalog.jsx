import Header from '../modules/Header/Header';
import CamperCardList from '../modules/CamperCardList/CamperCardList';
import FormSearch from '../modules/FormSearch/FormSearch';
import Footer from '../modules/Footer/Footer';

const Catalog = () => {
  const divStyle = {
    display: 'flex',
    gap: '64px',
    marginTop: '40px',
  };

  return (
    <>
      <Header />
      <div style={divStyle}>
        <FormSearch />
        <CamperCardList />
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
