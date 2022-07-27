import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentUpdateComponent } from './comment/comment-update/comment-update.component';
import { CommentCreateComponent } from './comment/comment-create/comment-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './security/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegisterComponent } from './security/register/register.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './security/auth.interceptor';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    ArticleDetailsComponent,
    CommentListComponent,
    CommentUpdateComponent,
    CommentCreateComponent,
    LoginComponent,
    UserListComponent,
    RegisterComponent,
    UserDetailsComponent,
    ProfileComponent,
    UserUpdateComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
