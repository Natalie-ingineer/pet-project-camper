import ButtonLoadMore from '../../shared/components/ButtonLoadMore/ButtonLoadMore';
import CamperCard from '../../shared/components/CamperCard/CamperCard';
import s from './CamperCardList.module.scss';

const CamperCardList = () => {
  return (
    <div className={s.wrapList}>
      <CamperCard />
      <CamperCard />
      <CamperCard />
      <CamperCard />
      <ButtonLoadMore>Load more</ButtonLoadMore>
    </div>
  );
};

export default CamperCardList;
