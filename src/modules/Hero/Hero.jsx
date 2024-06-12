import { mob, mob2x } from '../../shared/images/index';

import s from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <div className={s.picture}>
        <picture>
          {/* <source
          media="(min-width: 1440px)"
          srcSet={`${desc} 1x, ${desc2x} 2x`}
        />
        <source media="(min-width: 768px)" srcSet={`${tab} 1x, ${tab2x} 2x`} /> */}
          <img
            srcSet={`${mob} 1x, ${mob2x} 2x`}
            className={s.picture}
            width={400}
            height={650}
            alt="Girl into camper"
          />
        </picture>
      </div>
      <h1 className={s.caption}>
        Не відкладай життя на потім - здійсни свою мрію вже сьогодні! Обирай
        свій дім на колесах і вирушай у захопливу подорож!!!
      </h1>
    </>
  );
};

export default Hero;
