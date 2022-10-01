import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/appstate.model';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { invokeAddPetAPI } from '../store/pets.actions';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent implements OnInit {
  isLoading = false;
  petForm!: FormGroup;
  allStatus = ['available', 'pending', 'sold'];

  constructor(
    private store: Store,
    private appStore: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petForm = new FormGroup({
      petName: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      photoUrl: new FormControl(null, Validators.required),
      tag: new FormControl(null, Validators.required),
      status: new FormControl(this.allStatus[0], Validators.required),
    });
  }

  onSubmit() {
    this.isLoading = true;

    let petData = {
      name: this.petForm.value.petName,
      category: { name: this.petForm.value.category },
      photoUrls: [this.petForm.value.photoUrl],
      tags: [{ name: this.petForm.value.tag }],
      status: this.petForm.value.status,
    };

    // NGRX APPROACH WITH STATE
    this.store.dispatch(invokeAddPetAPI({ payload: { ...petData } }));
    let appStatus$ = this.appStore.pipe(select(selectAppState));
    appStatus$.subscribe((data) => {
      console.log(data);
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        this.isLoading = false;
        alert('Pet Added Successfully!');
        this.petForm.reset();
        this.router.navigate(['/pets/all']);
      }
    });

    // NORMAL APPROACH WITHOUT STATE
    // this.petsService.addNewPet(petData).subscribe(
    //   (result) => {
    //     this.isLoading = false;
    //     alert('Pet Added Successfully!');
    //     this.petForm.reset();
    //   },
    //   (err) => {
    //     this.isLoading = false;
    //     alert('Error Adding Pet!');
    //   }
    // );
  }
}
