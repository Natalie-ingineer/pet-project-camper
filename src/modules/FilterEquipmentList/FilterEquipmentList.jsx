import FilterEquipment from '../../shared/components/FilterEquipment/FilterEquipment';
import s from './FilterEquipmentList.module.scss';

const FilterEquipmentList = () => {
  return (
    <div className={s.wrapList}>
      <FilterEquipment
        text={'AC'}
        icon={'#icon-air'}
        width={'32px'}
        height={'32px'}
      />
      <FilterEquipment
        text={'Automatic'}
        icon={'#icon-automatic'}
        width={'24px'}
        height={'24px'}
      />
      <FilterEquipment
        text={'Kitchen'}
        icon={'#icon-kitchen'}
        width={'32px'}
        height={'32px'}
      />
      <FilterEquipment
        text={'TV'}
        icon={'#icon-tv'}
        width={'32px'}
        height={'32px'}
      />
      <FilterEquipment
        text={'Shower/WC'}
        icon={'#icon-shower'}
        width={'32px'}
        height={'32px'}
      />
    </div>
  );
};

export default FilterEquipmentList;
