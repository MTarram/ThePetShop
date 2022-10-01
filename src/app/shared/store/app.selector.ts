import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../models/appstate.model';

export const selectAppState = createFeatureSelector<AppState>('myappstate');
