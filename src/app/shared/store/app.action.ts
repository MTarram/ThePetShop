import { createAction, props } from '@ngrx/store';
import { AppState } from '../models/appstate.model';

export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{ apiStatus: AppState }>()
);
