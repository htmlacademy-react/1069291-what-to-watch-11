export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 3000;

export const ADD_COMMENT_SUCCESS_TEXT = 'Комментарий удачно добавлен';

export const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum RedirectActions {
  REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE',
}

export enum ErrorActions {
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

export enum AuthorizationActions {
  REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION',
  AUTHORIZATION = 'AUTHORIZATION',
  LOGOUT = 'LOGOUT',
}

export enum UserActions {
  SAVE = 'SAVE',
}

export enum GenreActions {
  CHANGE_GENRE = 'CHANGE_GENRE',
}

export enum FilmsActions {
  UPDATE_FILMS = 'UPDATE_FILMS',
  LOAD_FILMS = 'LOAD_FILMS',
  IS_LOADING = 'IS_LOADING',
  LOAD_FILM_INFO = 'LOAD_FILM_INFO',
  CLEAR_FILM_INFO = 'CLEAR_FILM_INFO',
  LOAD_SIMILAR = 'LOAD_SIMILAR',
  CLEAR_SIMILAR = 'CLEAR_SIMILAR',
  LOAD_COMMENTS = 'LOAD_COMMENTS',
  CLEAR_COMMENTS = 'CLEAR_COMMENTS',
  ADD_COMMENT = 'ADD_COMMENT',
}
