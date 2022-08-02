import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../comment/comment.service';
import { TokenStorageService } from '../../security/token-storage.service';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  createCommentForm: FormGroup;
  id: number = 1; 
  article = {} as Article;
  users:User[] = [];
  //comment: any = {};
  constructor(private route: ActivatedRoute,
    private articleService: ArticleService, 
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private token: TokenStorageService,
    private userService: UserService,
    private router: Router) { 
      this.createCommentForm = formBuilder.group({ // building form by FormBuilder
        content: ['',  [  Validators.required,  
                        Validators.minLength(1), 
                        Validators.maxLength(400)]],  
      })
    }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.article;
    this.articleService.getArticleById(this.id).subscribe(data => {
      this.article = data;
    });

    this.getUsers();

    //can show all changes.  
    this.createCommentForm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });
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
    //console.log(user.login);
    return user.login
  }

  getCommentById(){}

  onSubmit(){
    this.articleService.createComment(this.id, this.createCommentForm.value).subscribe({
      next: () =>  {
        window.location.reload();
      }
    });

    console.log(this.createCommentForm.value);
  }

  updateComment(id: number, userId: number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.router.navigate(['comment-update', id]);
    } else {
      alert("Only owner or admin can edit comment!");
    }
    console.log("comment did not create by user");  
  }

  deleteComment(id: number, userId:number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.commentService.deleteComment(id).subscribe(data => {
        console.log(data);
        window.location.reload();
      });
    } else {
      alert("Only owner or admin can delete comment!");
    }
    console.log("article did not create by user");
  }

  

  like(id: number){
    
  }


}
