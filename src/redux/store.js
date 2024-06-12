import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
import { filtersReducer } from './filtersSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
