import { createReducer, on } from '@ngrx/store';
import { Pet } from 'src/app/shared/models/pet.model';
import { addPetAPISuccess, petsAPISuccess } from './pets.actions';

const initialState: ReadonlyArray<Pet> = [];

export const petReducer = createReducer(
  initialState,
  on(petsAPISuccess, (state, { allPets }) => {
    return allPets;
  }),
  on(addPetAPISuccess, (state, { response }) => {
    let newState = [...state];
    newState.unshift(response);
    return newState;
  })
);
