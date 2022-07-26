import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { TokenStorageService } from '../../security/token-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,
    private router: Router,
    private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.userService.getUserList().subscribe({
      next: data => {
        this.users = data;
        }, 
      error: error => console.log(error)
    });
  }

  updateUser(id: number){  
      this.router.navigate(['user-update', id]);
  }


}
