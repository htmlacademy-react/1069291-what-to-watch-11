import {NameSpace} from '../../consts';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../consts';
import { UserData } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
