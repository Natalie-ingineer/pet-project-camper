import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;

export const selectLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;

export const selectStatusFilter = (state) => state.filters.filters.name;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectStatusFilter],
  (campers, filter) => {
    return campers.filter((camper) =>
      camper.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
