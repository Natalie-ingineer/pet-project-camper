import { useDispatch, useSelector } from 'react-redux';

import ButtonLoadMore from '../../shared/components/ButtonLoadMore/ButtonLoadMore';
import CamperCard from '../../shared/components/CamperCard/CamperCard';
import { selectVisibleCampers } from '../../redux/selectors';

import s from './CamperCardList.module.scss';
import { deleteCamper } from '../../redux/operations';
import { useState } from 'react';

const CamperCardList = () => {
  const dispatch = useDispatch();
  const campersFilter = useSelector(selectVisibleCampers);
  // Стан для управління кількістю відображуваних карток
  const [visibleCampers, setVisibleCampers] = useState(4);

  // Функція для збільшення кількості відображуваних карток
  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4);
  };

  return (
    <div className={s.wrapList}>
      <ul>
        {campersFilter.slice(0, visibleCampers).map((camper) => (
          <CamperCard
            key={camper.id}
            camperId={camper.id}
            gallery={camper.gallery}
            name={camper.name}
            price={camper.price}
            location={camper.location}
            rating={camper.rating}
            description={camper.description}
            onDelete={() => {
              dispatch(deleteCamper(camper.id));
            }}
          ></CamperCard>
        ))}
      </ul>
      {visibleCampers < campersFilter.length && (
        <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
      )}
    </div>
  );
};

export default CamperCardList;
