// import axios from 'axios';
// import { createTgMessage } from 'shared/helpers';

// const instance = axios.create({
//   baseURL: 'https://65d8667dc96fbb24c1bb6f49.mockapi.io/camper',
// });

// export const sendTgMessage = async ({ formData, formType }) => {
//   const { data } = instance.post('/orders', {
//     message: createTgMessage(formData, formType),
//   });
//   return data;
// };

// export const getBlogsListApi = async () => {
//   const { data } = await instance.get('/blogs');
//   return data;
// };

// export const getMainPageContentApi = async () => {
//   const { data } = await instance.get('/pages/main');
//   return data;
// };

// export const addFeedbackApi = async (body) => {
//   const { data } = await instance.post('/feedbacks', body);
//   return data;
// };

// export const getFeedbacskApi = async () => {
//   const { data } = await instance.get('/feedbacks/visible');
//   return data;
// };
