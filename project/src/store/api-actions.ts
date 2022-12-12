import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { ADD_COMMENTS_ERROR_TEXT, ADD_COMMENT_SUCCESS_TEXT, APIRoute, AppRoute, AuthorizationActions, FETCH_COMMENTS_ERROR_TEXT, FETCH_FILMS_ERROR_TEXT, FETCH_SIMILAR_ERROR_TEXT, FilmsActions, LOGIN_ERROR_TEXT, LOGOUT_ERROR_TEXT, UPDATE_PROMO_ERROR_TEXT } from '../consts';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth';
import { AddCommentForm, Comment, Comments } from '../types/comments';
import { FilmsType, FilmType } from '../types/films';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user';
import { loadComments, loadFilmInfo, loadFilms, loadSimilar, redirectToRoute, saveUser, setFilmDataLoading, updatePromo } from './action';

export const loginAction = createAsyncThunk<UserData | null, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.AUTHORIZATION,
  async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data: user } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(user.token);
      return user;
      // dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      rejectWithValue(toast.error(LOGIN_ERROR_TEXT));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.LOGOUT,
  async (_arg, { dispatch, extra: api, rejectWithValue }) => {
    try {
      await api.delete<UserData>(APIRoute.Logout);
      dropToken();
    } catch {
      rejectWithValue(toast.error(LOGOUT_ERROR_TEXT));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.REQUIRE_AUTHORIZATION,
  async (_arg, { dispatch, extra: api }) => {
    const {data: user} = await api.get<UserData>(APIRoute.Login);
    dispatch(saveUser(user));
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_FILMS,
  async (_arg, { dispatch, extra: api, rejectWithValue }) => {
    try {
      dispatch(setFilmDataLoading(true));
      const { data } = await api.get<FilmsType>(APIRoute.Films);
      dispatch(loadFilms(data));
      dispatch(setFilmDataLoading(false));
    } catch {
      rejectWithValue(toast.error(FETCH_FILMS_ERROR_TEXT));
    }
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.UPDATE_PROMO,
  async (_arg, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FilmType>(APIRoute.Promo);
      dispatch(updatePromo(data));
    } catch {
      rejectWithValue(toast.error(UPDATE_PROMO_ERROR_TEXT));
    }
  },
);

export const fetchFilmInfoAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_FILM_INFO,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
      dispatch(loadFilmInfo(data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchSimilarAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_SIMILAR,
  async (id, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FilmsType>(`${APIRoute.Films}/${id}/similar`);
      dispatch(loadSimilar(data));
    } catch {
      rejectWithValue(toast.error(FETCH_SIMILAR_ERROR_TEXT));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_COMMENTS,
  async (id, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      dispatch(loadComments(data));
    } catch {
      rejectWithValue(toast.error(FETCH_COMMENTS_ERROR_TEXT));
    }
  },
);

export const addCommentsAction = createAsyncThunk<void, AddCommentForm, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.ADD_COMMENT,
  async ({ filmId, comment, rating }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      await api.post<Comment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      toast.warn(ADD_COMMENT_SUCCESS_TEXT);
      dispatch(redirectToRoute(AppRoute.Film.replace(':id', String(filmId))));
    } catch {
      rejectWithValue(toast.error(ADD_COMMENTS_ERROR_TEXT));
    }
  },
);
