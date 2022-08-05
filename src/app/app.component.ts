import { Component } from '@angular/core';
import { AuthService } from './security/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './security/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  //showModeratorBoard = false;
  login?: string;
  title = $localize `Encyclopedia Angular + Spring Boot`;

  localeList: any = [
    {code: 'en-US', label: 'English'},
    {code: 'ru', label: 'Русский'},
    {code: 'ee', label: 'Eesti'}
  ]

  constructor(public tokenStorageService: TokenStorageService,
    public router: Router) { }
    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
        this.isAdmin = this.roles?.includes('ROLE_ADMIN');
        this.login = user.login;
        console.log("Data from app.component.ts this roles " + user.roles);
        console.log("isAdmin " + this.isAdmin );
    }
  }


  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login'])
  }
}
