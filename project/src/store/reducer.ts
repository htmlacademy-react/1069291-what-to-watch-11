import {createReducer} from '@reduxjs/toolkit';
import { ALL_GENRES_CATEGORY_NAME } from '../consts';
import { Comments } from '../types/comments';
import { FilmsType, FilmType } from '../types/films';
import { UserData } from '../types/user';
import {changeGenre, clearComments, clearFilmInfo, clearSimilar, loadComments, loadFilmInfo, loadFilms, loadSimilar, saveUser, setFilmDataLoading, updatePromo} from './action';

type initialStateType = {
  activeGenre: string | null;
  films: FilmsType;
  filmInfo: FilmType | null;
  isFilmsDataLoading: boolean;
  user: UserData | null;
  similar: FilmsType;
  comments: Comments;
  promo: FilmType | null;
}

const initialState: initialStateType = {
  activeGenre: ALL_GENRES_CATEGORY_NAME,
  films: [],
  filmInfo: null,
  isFilmsDataLoading: false,
  user: null,
  similar: [],
  comments: [],
  promo: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.activeGenre = payload;
    })
    .addCase(loadFilms, (state, { payload }) => {
      state.films = payload;
    })
    .addCase(loadFilmInfo, (state, { payload }) => {
      state.filmInfo = payload;
    })
    .addCase(clearFilmInfo, (state) => {
      state.filmInfo = null;
    })
    .addCase(setFilmDataLoading, (state, { payload }) => {
      state.isFilmsDataLoading = payload;
    })
    .addCase(saveUser, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(loadSimilar, (state, { payload }) => {
      state.similar = payload;
    })
    .addCase(clearSimilar, (state) => {
      state.similar = [];
    })
    .addCase(loadComments, (state, { payload }) => {
      state.comments = payload;
    })
    .addCase(clearComments, (state) => {
      state.comments = [];
    })
    .addCase(updatePromo, (state, { payload }) => {
      state.promo = payload;
    });
});

export {reducer};
