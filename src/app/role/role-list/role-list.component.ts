import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RoleService } from '../role.service';
import { TokenStorageService } from '../../security/token-storage.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Role[] = [];
  constructor(private router: Router,
    private roleService: RoleService,
    private tokenStorage: TokenStorageService,) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    if(this.tokenStorage.getUser().roles?.includes('ROLE_ADMIN')){
      this.roleService.getRoleList().subscribe({
        next: data => {
          this.roles = data;
          }, 
        error: error => console.log(error)
      });
    }
  }
}
