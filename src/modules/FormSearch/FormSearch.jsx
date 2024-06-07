// import { nanoid } from "nanoid";
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import s from './FormSearch.module.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import toast from 'react-hot-toast';
import Button from 'shared/components/Button/Button';
import { sprite } from 'shared/icons';

const FormSearch = () => {
  const [formData, setFormData] = useState({ location: '' });

  const handleChange = (e) => {
    const { location, value } = e.target;
    setFormData({ ...formData, [location]: value });
  };

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
    <form onSubmit={handleSubmit}>
      <div className={s.fieldContainer}>
        <label htmlFor="combo-box-demo" className={s.description}>
          Location
        </label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={locationCity}
          sx={{ width: 300 }}
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
      <Button>Search</Button>
    </form>
  );
};

export default FormSearch;

//     import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useId } from 'react';
// const userSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Name must be at least 3 symb long')
//     .max(50, 'Name to long')
//     .required('Please, fill in the field!'),
//   number: Yup.string()
//     .min(0, 'Number must be at least 3 symb long')
//     .required('Please, fill in the field!'),
// });
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={userSchema}
//       onSubmit={(contacts, actions) => {
//         dispatch(addContact({ ...contacts }))
//           .unwrap()
//           .then(() => {
//             toast.success('New contact add success');
//           })
//           .catch(() => {
//             toast.error("New contact don't add");
//           });
//         actions.resetForm();
//       }}
//     >
//       <Form className={s.form}>
//         <div className={s.wraper}>
//           <div className={s.formWrap}>
//             <div>
//               <label className={s.description} htmlFor={usernameFieldId}>
//                 Location
//               </label>

//               <Field
//                 className={s.fieldInput}
//                 type="text"
//                 name="name"
//                 id={usernameFieldId}
//                 placeholder="Ukraine"
//               >
//                 <div>
//                   <svg width="18" height="20">
//                     <use xlinkHref={`${sprite}#icon-location`}></use>
//                   </svg>
//                 </div>
//               </Field>
//             </div>
//             <ErrorMessage className={s.error} name="name" component="span" />
//           </div>
//           <div className={s.formWrap}>
//             <label className={s.description} htmlFor={numberFieldId}>
//               Phone number
//             </label>
//             <Field
//               className={s.fieldInput}
//               type="text"
//               name="number"
//               id={numberFieldId}
//               placeholder="Please, write phone number new contact!"
//             ></Field>
//             <ErrorMessage className={s.error} name="number" component="span" />
//           </div>
//         </div>

//         <Button>Search</Button>
//       </Form>
//     </Formik>
//   );
// };
