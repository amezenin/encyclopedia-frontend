import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../security/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  //currentUser: any;
  
  currentUser: any = {
    id: '1',
    login: 'test',
    roles: [
      {
        id: '1',
        name: 'comment'
      }
    ]
  }

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
  }

  

}
