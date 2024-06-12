import Header from '../modules/Header/Header';

import Footer from '../modules/Footer/Footer';
import { useSelector } from 'react-redux';
import CamperCard from '../shared/components/CamperCard/CamperCard';

const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites);
  const divStyle = {
    display: 'flex',
    gap: '64px',
    marginTop: '40px',
  };

  return (
    <>
      <Header />
      <ul className={divStyle}>
        {favorites.map((camper) => (
          <CamperCard
            key={camper.id}
            camperId={camper.id}
            gallery={camper.gallery}
            name={camper.name}
            price={camper.price}
            location={camper.location}
            rating={camper.rating}
            description={camper.description}
          />
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default FavoritePage;
