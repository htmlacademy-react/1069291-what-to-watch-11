import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES_CATEGORY_NAME, NameSpace } from '../../consts';
import { FilmsProcess } from '../../types/state';
import { changeGenre } from '../action';
import { fetchCommentsAction, fetchFavoriteAction, fetchFilmInfoAction, fetchFilmsAction, fetchPromoAction, fetchSimilarAction, updateFavoriteFilmStatusAction } from '../api-actions';

const initialState: FilmsProcess = {
  activeGenre: ALL_GENRES_CATEGORY_NAME,
  films: [],
  isFilmsDataLoading: false,
  filmInfo: null,
  similar: [],
  favorite: [],
  comments: [],
  promo: null,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload ? action.payload : [];
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.films = [];
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmInfoAction.fulfilled, (state, action) => {
        state.filmInfo = action.payload ? action.payload : null;
      })
      .addCase(fetchFilmInfoAction.rejected, (state) => {
        state.filmInfo = null;
      })
      .addCase(fetchSimilarAction.fulfilled, (state, action) => {
        state.similar = action.payload ? action.payload : [];
      })
      .addCase(fetchSimilarAction.rejected, (state) => {
        state.similar = [];
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload ? action.payload : [];
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.comments = [];
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload ? action.payload : null;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.promo = null;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favorite = action.payload ? action.payload : [];
      })
      .addCase(fetchFavoriteAction.rejected, (state) => {
        state.favorite = [];
      })
      .addCase(updateFavoriteFilmStatusAction.fulfilled, (state, action) => {
        state.favorite = action.payload ? action.payload : [];
      })
      .addCase(updateFavoriteFilmStatusAction.rejected, (state) => {
        state.favorite = [];
      })
      .addCase(changeGenre, (state, action) => {
        state.activeGenre = action.payload;
      });
  }
});
