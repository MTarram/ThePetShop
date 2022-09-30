import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private static userLoginAPI = environment.userURL + '/login';
  private static userLogoutAPI = environment.userURL + '/logout';

  constructor(private http: HttpClient) {}

  userLogin(loginData: any): Observable<any> {
    return this.http.get<any>(UserService.userLoginAPI, loginData);
  }

  userLogout(): Observable<any> {
    return this.http.get<any>(UserService.userLogoutAPI);
  }

  createNewUser(userData: User): Observable<any> {
    return this.http.post<any>(environment.userURL, userData);
  }
}
