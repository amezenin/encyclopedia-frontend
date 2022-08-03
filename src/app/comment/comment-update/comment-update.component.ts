import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { TokenStorageService } from '../../security/token-storage.service';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.css']
})
export class CommentUpdateComponent implements OnInit {

  id: number = 1;
  comment: any = {};
  commentUpdateForm: FormGroup;
  //users:User[] = [];
  currentUser:any = {};
  likes: User[] = [];
  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
  private token: TokenStorageService) {
      this.commentUpdateForm = formBuilder.group({ // building form by FormBuilder
        content: ['',  [  Validators.required,  
                        Validators.minLength(1), 
                        Validators.maxLength(400)]],
        likeUserId:[''],  
        //likes: ['', ],
      })
    }

    getUsers() {
      this.userService.getUserList().subscribe({
        next: data => {
          this.likes = data;
          console.log(this.likes);
          }, 
        error: error => console.log(error)
      });
    }
    
    
    getUser() {
      const user =  this.likes.find((user) => user.id === this.token.getUser().id)
      if (!user) {
        return ''
        console.log("not found user ");
      }
      console.log("CURRENUSER " + user);
      return user;
    }



  ngOnInit(): void {

    this.getUsers();
    this.getUser();

    this.id = this.route.snapshot.params['id'];
    this.commentService.getCommentById(this.id).subscribe({
      next: data => {
        this.comment = data;
        this.commentUpdateForm.patchValue({
          content: this.comment.content,
          likeUserId: this.token.getUser().id,
          //likes: this.comment.likes.push(this.getUser())
        });
      }, 
      error: error => console.log(error)
    });

    

    console.log("users " + this.getUsers()); // undefined here
    console.log("curr " + this.getUser()); // null

    this.commentUpdateForm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  




  onSubmit(){
    this.commentService.updateComment(this.id, this.commentUpdateForm.value).subscribe({
      next: () =>  {
        this.goToCommentList();
      }
    });

    console.log(this.commentUpdateForm.value);
  }

  goToCommentList(){
    this.router.navigate(['/article-details/' + this.comment.articleId ]);
  }

}
