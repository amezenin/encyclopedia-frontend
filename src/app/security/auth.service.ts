import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from './authentication';
import { User } from '../user/user';

const BASE_URL = "http://localhost:8080/api/auth/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authentication: Authentication = {} as Authentication;
  
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    return this.http.post(BASE_URL + "login", {
      login,
      password
    }, httpOptions);
  }

  createUser(user: User): Observable<any>{
    return this.http.post(BASE_URL + 'register', user);
  }


  register(login: string, password: string, firstName:string,
    lastName: string, email: string): Observable<any> {
    return this.http.post(BASE_URL + 'register', {
      login,
      password,
      firstName,
      lastName,
      email
    }, httpOptions);
  }


}
