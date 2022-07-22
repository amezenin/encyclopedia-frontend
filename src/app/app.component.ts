import { Component } from '@angular/core';
import { AuthService } from './security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encyclopedia Angular + Spring Boot';

  constructor(public authService: AuthService,
    public router: Router) { }
  logout() {
    this.authService.doLogout()
    this.router.navigate(['login']);
  }
}
