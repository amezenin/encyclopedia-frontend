import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.css']
})
export class CommentUpdateComponent implements OnInit {

  id: number = 1;
  comment: any = {};
  commentUpdateForm: FormGroup;
  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.commentUpdateForm = formBuilder.group({ // building form by FormBuilder
        content: ['',  [  Validators.required,  
                        Validators.minLength(1), 
                        Validators.maxLength(400)]],  
      })
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.commentService.getCommentById(this.id).subscribe({
      next: data => {
        this.comment = data;
        this.commentUpdateForm.patchValue({
          content: this.comment.content,
        });
      }, 
      error: error => console.log(error)
    });


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
