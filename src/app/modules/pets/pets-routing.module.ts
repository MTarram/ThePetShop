import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetsListComponent } from './pets-list/pets-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'all', component: PetsListComponent },
  { path: 'add-pet', component: AddPetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
