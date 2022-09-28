import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsRoutingModule } from './pets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsListComponent } from './pets-list/pets-list.component';

@NgModule({
  declarations: [AddPetComponent, PetsListComponent],
  imports: [
    CommonModule,
    PetsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class PetsModule {}
