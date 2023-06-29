import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsByUsersComponent } from './components/posts-by-users/posts-by-users.component';
import { DisplayUserByIdComponent } from './components/display-user-by-id/display-user-by-id.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    PostsListComponent,
    PostsByUsersComponent,
    DisplayUserByIdComponent,
    AlbumsListComponent,
    PhotosListComponent,
    NavigationComponent,
    UserDetailComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
