import FilterEquipment from '../../shared/components/FilterEquipment/FilterEquipment';
import s from './FilterTypeCamper.module.scss';
const FilterTypeCamper = () => {
  return (
    <div className={s.wrapList}>
      <FilterEquipment
        text={'Van'}
        icon={'#icon-camperVan'}
        width={'40px'}
        height={'28px'}
      />
      <FilterEquipment
        text={'Fully Integrated'}
        icon={'#icon-camperFullyIntegrated'}
        width={'40px'}
        height={'28px'}
      />
      <FilterEquipment
        text={'Alcove'}
        icon={'#icon-camperAlcove'}
        width={'40px'}
        height={'28px'}
      />
    </div>
  );
};

export default FilterTypeCamper;
