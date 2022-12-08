import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationActions, AuthorizationStatus, FilmsActions, GenreActions, RedirectActions, UserActions } from '../consts';
import { Comment, Comments } from '../types/comments';
import { FilmsType, FilmType } from '../types/films';
import { UserData } from '../types/user';

export const redirectToRoute = createAction<AppRoute>(RedirectActions.REDIRECT_TO_ROUTE);
export const requireAuthorization = createAction<AuthorizationStatus>(AuthorizationActions.REQUIRE_AUTHORIZATION);
export const saveUser = createAction<UserData>(UserActions.SAVE);
export const changeGenre = createAction(GenreActions.CHANGE_GENRE, (value: number) => ({ payload: value }));
export const loadFilms = createAction<FilmsType>(FilmsActions.LOAD_FILMS);
export const setFilmDataLoading = createAction<boolean>(FilmsActions.IS_LOADING);
export const loadFilmInfo = createAction<FilmType>(FilmsActions.LOAD_FILM_INFO);
export const clearFilmInfo = createAction(FilmsActions.CLEAR_FILM_INFO);
export const loadSimilar = createAction<FilmsType>(FilmsActions.LOAD_SIMILAR);
export const clearSimilar = createAction(FilmsActions.CLEAR_SIMILAR);
export const loadComments = createAction<Comments>(FilmsActions.LOAD_COMMENTS);
export const clearComments = createAction(FilmsActions.CLEAR_COMMENTS);
export const addComment = createAction<Comment>(FilmsActions.ADD_COMMENT);
