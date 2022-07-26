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

  articles: Article[] = [];
  users:User[] = [];
  isOwner = false;
  login?:string;

  constructor(private articleService: ArticleService,
    private router: Router,
    private token: TokenStorageService,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.getArticles();
    this.getUsers();

  }

  getUsers() {
    this.userService.getUserList().subscribe({
      next: data => {
        this.users = data;
        }, 
      error: error => console.log(error)
    });
  }

  getUserLoginById(id: number) {
    const user =  this.users.find((user) => user.id === id)
    if (!user) {
      // we not found the parent
      return ''
    }
    console.log(user.login);
    return user.login
  }

  

  private getArticles(){
    this.articleService.getArticleList().subscribe({
      next: data => {
        this.articles = data;
        }, 
      error: error => console.log(error)
    });
  }

  updateArticle(id: number, userId: number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.router.navigate(['update-article', id]);
    }
    console.log("article did not create by user");
  }

  deleteArticle(id: number, userId:number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.articleService.deleteArticle(id).subscribe(data => {
        console.log(data);
        this.getArticles();
      });
    }
    console.log("article did not create by user");
  }

  articleDetails(id: number){
    this.router.navigate(['article-details', id])
  }



}
