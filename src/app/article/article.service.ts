import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = "http://localhost:8080/api/articles";
  constructor(private httpClient: HttpClient) { }

  getArticleList(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.baseUrl}`);
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

  

}
