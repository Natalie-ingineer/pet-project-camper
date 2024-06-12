import { createSlice } from '@reduxjs/toolkit';
import { addCamper, deleteCamper, fetchCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCamper.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCamper.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { fetchCampersPending, fetchCampersSuccess, fetchCampersError } =
  campersSlice.actions;

export const campersReducer = campersSlice.reducer;
