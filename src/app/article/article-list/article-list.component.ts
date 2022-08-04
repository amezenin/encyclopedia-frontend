import { Component, OnInit } from '@angular/core';
import {Article} from '../article'
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../security/token-storage.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  /*
    Code is very dirty. I tried different ways.
  */
  articles: Article[] = [];
  users:User[] = [];
  isOwner = false;
  article: any = {}
  user: any = {}
  constructor(private articleService: ArticleService,
    private router: Router,
    private token: TokenStorageService,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.getArticles();
    //i think it is not best way for printing login by userId
    this.getUsers();

    this.userService.getUserById(this.token.getUser().id).subscribe({
      next: data => {
        this.user = data}, 
      error: error => console.log(error)
    });
    
  }
  
  //i think it is not best way for printing login by userId
  getUsers() {
    this.userService.getUserList().subscribe({
      next: data => {
        this.users = data;
        }, 
      error: error => console.log(error)
    });
  }

  //i think it is not best way for printing login by userId
  getUserLoginById(id: number) {
    const user =  this.users.find((user) => user.id === id)
    if (!user) {
      // we not found the parent
      return ''
    }
    //console.log(user.login);
    return user.login
  }

  getArticles(){
    this.articleService.getArticleList().subscribe({
      next: data => {
        this.articles = data;
        console.log(this.articles)
        }, 
      error: error => console.log(error)
    });
  }

  updateArticle(id: number, userId: number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.router.navigate(['update-article', id]);
    } else {
      alert("Only owner can edit article!");
      console.log("article did not create by user");
    }
  }

  deleteArticle(id: number, userId:number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.articleService.deleteArticle(id).subscribe(data => {
        console.log(data);
        this.getArticles();
      });
    } else {
      alert("Only owner can delete article!");
    }
    console.log("article did not create by user");
  }

  articleDetails(id: number){
    this.router.navigate(['article-details', id])
  }

  getArticleListByOwner(){
    this.articleService.getArticleListByOwner().subscribe({
      next: data => {
        this.articles = data;
        }, 
      error: error => console.log(error)
    });
  }

  getArticle(id: number) {
    const article =  this.articles.find((article) => article.id === id)
    if (!article) {
      return ''
    }
    return article
  }


  like(id: number){
    this.article = this.getArticle(id)
    console.log(this.article); //json object correct, but didnt update in DB
    
    //like dislike controll
    if (this.article.likes.find((user:any) => user.id === this.token.getUser().id) === undefined) {
      this.article.likes.push(this.user);
    } else {
      this.article.likes = this.article.likes.filter((user:any) => user.id !== this.token.getUser().id);
    }

    this.articleService.updateArticle(id, this.article).subscribe({ 
      next: data =>{},
      error: error => console.log(error)});
  }


}
