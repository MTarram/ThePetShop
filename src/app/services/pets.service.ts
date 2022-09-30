import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from '../shared/models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private static allPetsAPI = environment.petsURL + '/findByStatus?status=';

  constructor(private http: HttpClient) {}

  getAllPets(status: string): Observable<Pet[]> {
    return this.http.get<Pet[]>(PetsService.allPetsAPI + status);
  }

  addNewPet(petData: any): Observable<any> {
    return this.http.post<any>(environment.petsURL, petData);
  }
}
