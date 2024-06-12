import Header from '../modules/Header/Header';
import CamperCardList from '../modules/CamperCardList/CamperCardList';
import FormSearch from '../modules/FormSearch/FormSearch';
import Footer from '../modules/Footer/Footer';
import { selectCampers, selectError, selectLoading } from '../redux/selectors';
import { fetchCampers } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Catalog = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectCampers);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const divStyle = {
    display: 'flex',
    gap: '64px',
    marginTop: '40px',
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className="notification">Oops, ERROR 😨</p>}

      {items.length > 0 && JSON.stringify(items, null, 2) && (
        <>
          <Header />
          <div style={divStyle}>
            <FormSearch />
            <CamperCardList />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Catalog;
