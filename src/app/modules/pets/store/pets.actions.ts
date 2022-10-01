import { createAction, props } from '@ngrx/store';
import { Pet } from 'src/app/shared/models/pet.model';

export const invokePetsAPI = createAction(
  '[Pets API] invoke pets API',
  props<{ payload: string }>()
);

export const petsAPISuccess = createAction(
  '[Pets API] fetching pets API success',
  props<{ allPets: Pet[] }>()
);

export const invokeAddPetAPI = createAction(
  '[Pets API] invoke add pet API',
  props<{ payload: any }>()
);

export const addPetAPISuccess = createAction(
  '[Pets API] fetching add pet API success',
  props<{ response: Pet }>()
);
