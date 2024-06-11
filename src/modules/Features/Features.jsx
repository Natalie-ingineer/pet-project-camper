import FormDate from '../../modules/FormDate/FormDate';
import Categories from '../../shared/components/Categories/Categories';
import s from './Features.module.scss';

const Features = ({
  adults,
  beds,
  conditioner,
  hob,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  return (
    <div className={s.features}>
      <div className={s.wraper}>
        <div className={s.wrapFeatures}>
          <Categories icon={'#icon-users'} adults={adults} text={'adults'} />
          <Categories icon={'#icon-automatic'} text={'Automatic'} />
          <Categories icon={'#icon-air'} text={'AC'} />
          <Categories icon={'#icon-petrol'} text={'Petrol'} />
          <Categories icon={'#icon-kitchen'} text={'Kitchen'} />
          <Categories icon={'#icon-bed'} beds={beds} text={'beds'} />
          <Categories
            icon={'#icon-conditioner'}
            conditioner={conditioner}
            text={'air conditioner'}
          />
          <Categories icon={'#icon-cd'} text={'CD'} />
          <Categories icon={'#icon-radio'} text={'Radio'} />
          <Categories icon={'#icon-hob'} hob={hob} text={'hob'} />
        </div>
        <p className={s.text}>Vehicle details</p>
        <div className={s.wrapTable}>
          <div className={s.box}>
            <p className={s.description}>Form</p>
            <p>{form}</p>
          </div>
          <div className={s.box}>
            <p className={s.description}>Length</p>
            <p className={s.description}>{length}</p>
          </div>
          <div className={s.box}>
            <p className={s.description}>Width</p>
            <p className={s.description}>{width}</p>
          </div>
          <div className={s.box}>
            <p className={s.description}>Height</p>
            <p className={s.description}>{height}</p>
          </div>
          <div className={s.box}>
            <p className={s.description}>Tank</p>
            <p className={s.description}>{tank}</p>
          </div>
          <div className={s.box}>
            <p className={s.description}>Consumption</p>
            <p className={s.description}>{consumption}</p>
          </div>
        </div>
      </div>
      <FormDate />
    </div>
  );
};

export default Features;
