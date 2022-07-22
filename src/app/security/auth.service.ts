import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:8080/api/auth/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    return this.http.post(BASE_URL + "login", {
      login,
      password
    }, httpOptions);
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

  doLogout() {
    window.sessionStorage.clear();
  }

}
