import {NameSpace} from '../../consts';
import {State} from '../../types/state';
import { FilmsType, FilmType } from '../../types/films';
import { Comments } from '../../types/comments';

export const getFilms = (state: State): FilmsType => state[NameSpace.Films].films;
export const getSimilar = (state: State): FilmsType => state[NameSpace.Films].similar;
export const getFavorite = (state: State): FilmsType => state[NameSpace.Films].favorite;
export const getFavoriteLength = (state: State): number => state[NameSpace.Films].films.filter(({ isFavorite }) => isFavorite).length;
export const getFilmInfo = (state: State): FilmType | null => state[NameSpace.Films].filmInfo;
export const getPromo = (state: State): FilmType | null => state[NameSpace.Films].promo;
export const getComments = (state: State): Comments => state[NameSpace.Films].comments;
export const getIsFilmsDataLoading = (state: State): boolean => state[NameSpace.Films].isFilmsDataLoading;
export const geActiveGenre = (state: State): string => state[NameSpace.Films].activeGenre;
