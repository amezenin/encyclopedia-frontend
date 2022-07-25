import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
/*
  user: any = {
    login: null,
    password: null,
    fistName: null,
    lastName: null,
    email: null
  };*/
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  user = {} as User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  saveArticle(){
    this.authService.createUser(this.user).subscribe( data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;

      //this.goToArticleList();
    },
  error => console.log(error));
  this.isSignUpFailed = true;
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveArticle();
  }

  /*
  onSubmit(): void {
    const { login, password, firstName, lastName, email } = this.form;
    this.authService.register(login, password, firstName, lastName, email).subscribe({
      next: data => {
        console.log("register data " + data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }*/


}
