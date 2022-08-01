import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../security/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = "http://localhost:8080/api/comments";

  constructor(private httpClient: HttpClient, 
    private token:TokenStorageService) { 
    
  }

  getUserId(){
    const id = this.token.getUser().id;
    return id;
  }

  
}
