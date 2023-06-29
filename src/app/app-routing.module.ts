import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'albums', component: AlbumsListComponent},
  {path: 'photos', component: PhotosListComponent},
  {path: 'posts', component: PostsListComponent},
  {path: 'todos', component: TodosListComponent},
  {path: 'user/:id', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
