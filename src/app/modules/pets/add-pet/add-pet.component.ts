import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent implements OnInit {
  isLoading = false;
  petForm!: FormGroup;
  allStatus = ['available', 'pending', 'sold'];

  constructor(private petsService: PetsService) {}

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

    this.petsService.addNewPet(petData).subscribe(
      (result) => {
        this.isLoading = false;
        alert('Pet Added Successfully!');
        this.petForm.reset();
      },
      (err) => {
        this.isLoading = false;
        alert('Error Adding Pet!');
      }
    );
  }
}
