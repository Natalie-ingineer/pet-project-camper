import Header from '../modules/Header/Header';
import CamperCardList from '../modules/CamperCardList/CamperCardList';
import Footer from '../modules/Footer/Footer';

const FavoritePage = () => {
  const divStyle = {
    display: 'flex',
    gap: '64px',
    marginTop: '40px',
  };

  return (
    <>
      <Header />
      <div style={divStyle}>
        <CamperCardList />
      </div>
      <Footer />
    </>
  );
};

export default FavoritePage;
