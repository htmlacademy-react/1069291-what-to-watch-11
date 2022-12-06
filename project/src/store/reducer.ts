import {createReducer} from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { FilmType } from '../types/films';
import {changeGenre, updateFilms} from './action';

type initialStateType = {
  genre: number;
  films: FilmType[];
}

const initialState: initialStateType = {
  genre: 0,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.genre = payload;
    })
    .addCase(updateFilms, (state, { payload }) => {
      state.films = !payload || state.genre === 0 ? films : films.filter(({ genre }) => genre === state.genre);
    });
});

export {reducer};
