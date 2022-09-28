import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-details-modal',
  templateUrl: './pet-details-modal.component.html',
  styleUrls: ['./pet-details-modal.component.css'],
})
export class PetDetailsModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Pet) {}

  ngOnInit(): void {}
}
