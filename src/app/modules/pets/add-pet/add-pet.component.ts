import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent implements OnInit {
  petForm!: FormGroup;
  allStatus = ['available', 'pending', 'sold'];

  constructor() {}

  ngOnInit(): void {
    this.petForm = new FormGroup({
      petName: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      photoUrl: new FormControl(null, Validators.required),
      tags: new FormControl(null, Validators.required),
      status: new FormControl(this.allStatus[0], Validators.required),
    });
  }

  onSubmit() {}
}
