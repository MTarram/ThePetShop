import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PetsService } from 'src/app/services/pets.service';
import { PetDetailsModalComponent } from 'src/app/shared/components/pet-details-modal/pet-details-modal.component';
import { Pet } from 'src/app/shared/models/pet.model';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css'],
})
export class PetsListComponent implements OnInit {
  isLoading = true;
  allPets: Pet[] = [];
  clickedRow: Pet = {};
  allStatus = ['available', 'pending', 'sold'];

  dataSource = new MatTableDataSource<Pet>(this.allPets);

  displayedColumns: string[] = ['id', 'name'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private petsService: PetsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateTableData('available');
  }

  onStatusChange(status: string) {
    this.updateTableData(status);
  }

  onRowClicked(row: Pet) {
    this.dialog.open(PetDetailsModalComponent, {
      data: row,
    });
  }

  updateTableData(status: string): void {
    this.isLoading = true;
    this.petsService.getAllPets(status).subscribe(
      (data) => {
        this.isLoading = false;
        this.allPets = data;
        this.paginator.pageIndex = 0;
        this.dataSource = new MatTableDataSource<Pet>(this.allPets);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        this.isLoading = false;
        alert('Error Loading Data!');
      }
    );
  }
}
