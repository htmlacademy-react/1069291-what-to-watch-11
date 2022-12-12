import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
});
