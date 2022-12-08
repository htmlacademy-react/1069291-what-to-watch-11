import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { ADD_COMMENT_SUCCESS_TEXT, APIRoute, AppRoute, AuthorizationActions, AuthorizationStatus, FilmsActions } from '../consts';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth';
import { AddCommentForm, Comment, Comments } from '../types/comments';
import { FilmsType, FilmType } from '../types/films';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user';
import { addComment, loadComments, loadFilmInfo, loadFilms, loadSimilar, redirectToRoute, requireAuthorization, saveUser, setFilmDataLoading } from './action';

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.AUTHORIZATION,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: user } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(user.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(saveUser(user));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.LOGOUT,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete<UserData>(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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
    try {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUser(user));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_FILMS,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmDataLoading(true));
    const { data } = await api.get<FilmsType>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setFilmDataLoading(false));
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
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmsType>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilar(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_COMMENTS,
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  },
);

export const addCommentsAction = createAsyncThunk<void, AddCommentForm, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.ADD_COMMENT,
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(addComment(data));
    toast.warn(ADD_COMMENT_SUCCESS_TEXT);
  },
);
