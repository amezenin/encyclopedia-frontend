import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../security/token-storage.service';
import { Observable } from 'rxjs';

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

  deleteComment(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getCommentById(id: number): Observable<Comment>{
    return this.httpClient.get<Comment>(`${this.baseUrl}/${id}`);
  }

  updateComment(id: number, comment: Comment): Observable<any>{
    return this.httpClient.patch(`${this.baseUrl}/${id}`, comment);
  }


}
