import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Comments } from '../types/comments';
import { FilmsType, FilmType } from '../types/films';
import { UserData } from '../types/user';
import {addComment, changeGenre, clearComments, clearFilmInfo, clearSimilar, loadComments, loadFilmInfo, loadFilms, loadSimilar, requireAuthorization, saveUser, setFilmDataLoading} from './action';

type initialStateType = {
  genre: number;
  films: FilmsType;
  filmInfo: FilmType | null;
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  similar: FilmsType;
  comments: Comments;
}

const initialState: initialStateType = {
  genre: 0,
  films: [],
  filmInfo: null,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  similar: [],
  comments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.genre = payload;
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
    .addCase(addComment, (state, { payload }) => {
      state.comments = [...state.comments, payload];
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    });
});

export {reducer};
