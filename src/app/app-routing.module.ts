import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/posts', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard/posts', pathMatch: 'full' },
  { path: 'dashboard/posts', component: PostListComponent },
  { path: 'dashboard/new-post', component: NewPostComponent },
  { path: 'dashboard/post/:id', component: PostDetailComponent },
  { path: 'dashboard/post/update/:id', component: UpdatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
