import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { RoleService } from '../../role/role.service';
import { RoleListComponent } from '../../role/role-list/role-list.component';
import { Role } from '../../role/role';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id!: number;
  user = {} as User;
  userUpdateForm!: FormGroup;
  rolesList: Role[] = [];
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  private roleService: RoleService) { 
      

  }

  ngOnInit(): void {

      this.id = this.route.snapshot.params['id'];

      this.userUpdateForm = this.formBuilder.group({
        active: ['', Validators.required],
        roles: [this.getRoles(), Validators.required],
    })

    this.userService.getUserById(this.id).subscribe({
      next: data => {
        this.userUpdateForm.patchValue(data);
        }, 
      error: error => console.log(error)
    });


    //all form
    this.userUpdateForm.statusChanges.subscribe({
      next: formState => {
        console.log(formState);
      }
    });

    /* ValueChanges. Need to subscribe. */
    //can show all changes.  
    this.userUpdateForm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  getRoles() {
      this.roleService.getRoleList().subscribe({
        next: data => {
          this.rolesList = data;
          }, 
        error: error => console.log(error)
      });
  }

 
  onSubmit(){
    this.userService.updateUser(this.id, this.userUpdateForm.value).subscribe({
      next: () =>  {
        this.goToUserList();
      }
    });

    console.log(this.userUpdateForm.value);
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

}
