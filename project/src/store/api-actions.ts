import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { ADD_COMMENTS_ERROR_TEXT, ADD_COMMENT_SUCCESS_TEXT, APIRoute, AppRoute, AuthorizationActions, FETCH_COMMENTS_ERROR_TEXT, FETCH_FAVORITE_ERROR_TEXT, FETCH_FILMS_ERROR_TEXT, FETCH_SIMILAR_ERROR_TEXT, FilmsActions, LOGIN_ERROR_TEXT, LOGOUT_ERROR_TEXT, UPDATE_PROMO_ERROR_TEXT } from '../consts';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth';
import { AddCommentForm, Comment, Comments } from '../types/comments';
import { FilmsType, FilmType } from '../types/films';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user';
import { redirectToRoute } from './action';

export const loginAction = createAsyncThunk<UserData | undefined, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.AUTHORIZATION,
  async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data: user } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(user.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return user;
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

export const checkAuthAction = createAsyncThunk<UserData | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  AuthorizationActions.REQUIRE_AUTHORIZATION,
  async (_arg, { extra: api }) => {
    const {data: user} = await api.get<UserData>(APIRoute.Login);
    return user;
  },
);

export const fetchFilmsAction = createAsyncThunk<FilmsType | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_FILMS,
  async (_arg, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FilmsType>(APIRoute.Films);
      return data;
    } catch {
      rejectWithValue(toast.error(FETCH_FILMS_ERROR_TEXT));
    }
  },
);

export const fetchFilmInfoAction = createAsyncThunk<FilmType | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_FILM_INFO,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
      return data;
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchSimilarAction = createAsyncThunk<FilmsType | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_SIMILAR,
  async (id, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FilmsType>(`${APIRoute.Films}/${id}/similar`);
      return data;
    } catch {
      rejectWithValue(toast.error(FETCH_SIMILAR_ERROR_TEXT));
    }
  },
);

export const fetchFavoriteAction = createAsyncThunk<FilmsType | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_FAVORITE,
  async (_arg, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FilmsType>(`${APIRoute.Favorite}`);
      return data;
    } catch {
      rejectWithValue(toast.error(FETCH_FAVORITE_ERROR_TEXT));
    }
  },
);

export const updateFavoriteFilmStatusAction = createAsyncThunk<FilmsType | undefined, { id: number; status: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.UPDATE_FAVORITE,
  async ({ id, status }, { extra: api, rejectWithValue }) => {
    try {
      await api.post(`${APIRoute.Favorite}/${id}/${status}`);
      const { data } = await api.get<FilmsType>(`${APIRoute.Favorite}`);
      return data;
    } catch {
      rejectWithValue(toast.error(FETCH_FAVORITE_ERROR_TEXT));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.LOAD_COMMENTS,
  async (id, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      return data;
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

export const fetchPromoAction = createAsyncThunk<FilmType | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  FilmsActions.UPDATE_PROMO,
  async (_arg, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FilmType>(APIRoute.Promo);
      return data;
    } catch {
      rejectWithValue(toast.error(UPDATE_PROMO_ERROR_TEXT));
    }
  },
);
