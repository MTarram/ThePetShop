import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsRoutingModule } from './pets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { petReducer } from './store/pets.reducer';
import { PetsEffects } from './store/pets.effects';

@NgModule({
  declarations: [AddPetComponent, PetsListComponent, DashboardComponent],
  imports: [
    CommonModule,
    PetsRoutingModule,
    StoreModule.forFeature('mypets', petReducer),
    EffectsModule.forFeature([PetsEffects]),
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class PetsModule {}
