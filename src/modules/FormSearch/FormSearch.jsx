// import { useState } from 'react';
import s from './FormSearch.module.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import toast from 'react-hot-toast';
import Button from 'shared/components/Button/Button';
import { sprite } from 'shared/icons';
// import FilterEquipment from 'shared/components/FilterEquipment/FilterEquipment';
import FilterEquipmentList from 'modules/FilterEquipmentList/FilterEquipmentList';
import FilterTypeCamper from 'modules/FilterTypeCamper/FilterTypeCamper';

const FormSearch = () => {
  // const [formData, setFormData] = useState({ location: '' });

  // const handleChange = (e) => {
  //   const { location, value } = e.target;
  //   setFormData({ ...formData, [location]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отримання та використання formData для логіки відправки форми
  };

  const locationCity = [
    { label: 'Kyiv, Ukraine' },
    { label: 'Lviv, Ukraine' },
    { label: 'Dnipro, Ukraine' },
    { label: 'Poltava, Ukraine' },
    { label: 'Odesa, Ukraine' },
    { label: 'Kharkiv, Ukraine' },
    { label: 'Sumy, Ukraine' },
  ];
  //   const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit} className={s.formWrap}>
      <div className={s.fieldContainer}>
        <label htmlFor="combo-box-demo" className={s.description}>
          Location
        </label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={locationCity}
          sx={{ width: 360 }}
          renderInput={(params) => (
            <div style={{ position: 'relative' }}>
              <TextField
                {...params}
                placeholder="Ukraine"
                sx={{
                  '& .MuiInputBase-root': {
                    backgroundColor: '#F7F7F7', // Колір фону інпуту
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <svg className={s.icon} width="18" height="20">
                      <use xlinkHref={`${sprite}#icon-location`}></use>
                    </svg>
                  ),
                  style: { paddingLeft: '40px' },
                }}
              />
            </div>
          )}
        />
      </div>
      <p className={s.text}>Filters</p>
      <p className={s.caption}>Vehicle equipment</p>
      <FilterEquipmentList />
      <p className={s.caption}>Vehicle type</p>
      <FilterTypeCamper />
      <Button>Search</Button>
    </form>
  );
};

export default FormSearch;
