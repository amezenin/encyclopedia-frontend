import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { TokenStorageService } from '../security/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = "http://localhost:8080/api/articles";
  private ownerArticles = "http://localhost:8080/api/users/";
  private addCommentUrl = "http://localhost:8080/api/users/";
  constructor(private httpClient: HttpClient, 
  private token:TokenStorageService) { }

  getId(){
    const id = this.token.getUser().id;
    return id;
  }

  getArticleList(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.baseUrl);
  }

  getArticleListByOwner(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.ownerArticles + `${this.getId()}` + `/articles`);
  }

  createArcticle(article: Article): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`, article);
  }

  getArticleById(id: number): Observable<Article>{
    return this.httpClient.get<Article>(`${this.baseUrl}/${id}`);
  }

  updateArticle(id: number, article: Article): Observable<any>{
    return this.httpClient.patch(`${this.baseUrl}/${id}`, article);
  }

  deleteArticle(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createComment(id: number, comment:Comment): Observable<any>{
    return this.httpClient.post(this.addCommentUrl + `${this.getId()}` + `/articles/${id}` + `/comments`, comment);
  }




}
