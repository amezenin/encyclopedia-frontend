import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user';

const API_URL = 'http://localhost:8080/api/users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(API_URL + 'all');
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(API_URL + `${id}`);
  }

  updateUser(id: number, user: User): Observable<any>{
    return this.http.patch(API_URL +`${id}`, user);
  }


}
