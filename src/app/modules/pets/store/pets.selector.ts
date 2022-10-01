import { createFeatureSelector } from '@ngrx/store';
import { Pet } from 'src/app/shared/models/pet.model';

export const selectPets = createFeatureSelector<Pet[]>('mypets');
