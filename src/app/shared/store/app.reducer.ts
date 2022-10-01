import { createReducer, on } from '@ngrx/store';
import { AppState } from '../models/appstate.model';
import { setAPIStatus } from './app.action';

export const initialState: AppState = {
  apiStatus: '',
  apiResponseMessage: '',
};

export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return apiStatus;
  })
);
