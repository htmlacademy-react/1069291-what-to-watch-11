import {store} from '../store/index';
import {AuthorizationStatus} from '../consts';
import { UserData } from './user';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
