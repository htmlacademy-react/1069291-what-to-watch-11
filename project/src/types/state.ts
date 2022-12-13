import {store} from '../store/index';
import {AuthorizationStatus} from '../consts';
import { UserData } from './user';
import { FilmsType, FilmType } from './films';
import { Comments } from './comments';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type FilmsProcess = {
  activeGenre: string;
  films: FilmsType;
  isFilmsDataLoading: boolean;
  filmInfo: FilmType | null;
  similar: FilmsType;
  favorite: FilmsType;
  comments: Comments;
  promo: FilmType | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
