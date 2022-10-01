import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { PetsService } from 'src/app/services/pets.service';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { AppState } from 'src/app/shared/models/appstate.model';
import {
  addPetAPISuccess,
  invokeAddPetAPI,
  invokePetsAPI,
  petsAPISuccess,
} from './pets.actions';

@Injectable()
export class PetsEffects {
  constructor(
    private actions$: Actions,
    private petsService: PetsService,
    private appStore: Store<AppState>
  ) {}

  loadAllPets = createEffect(() =>
    this.actions$.pipe(
      ofType(invokePetsAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        return this.petsService.getAllPets(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiStatus: 'success', apiResponseMessage: '' },
              })
            );
            return petsAPISuccess({ allPets: data });
          })
        );
      })
    )
  );

  addNewPet = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeAddPetAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        return this.petsService.addNewPet(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiStatus: 'success', apiResponseMessage: '' },
              })
            );
            return addPetAPISuccess({ response: data });
          })
        );
      })
    )
  );
}
