import { createAction } from '@reduxjs/toolkit';
import { FilmsActions, GenreActions } from '../consts';

export const changeGenre = createAction(GenreActions.CHANGE_GENRE, (value: number) => ({ payload: value }));
export const updateFilms = createAction(FilmsActions.UPDATE_FILMS, (genre?: boolean) => ({payload: genre}));
