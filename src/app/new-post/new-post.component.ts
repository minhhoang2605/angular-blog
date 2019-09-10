import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post = new Post('', '');

  constructor(
    private postsService: PostsService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.post.title);
    if (this.post.title == null || this.post.content == null) {
      alert('Invalid Input');
    } else {
      await this.postsService.addPost(this.post);
      this.post = new Post('', '');
      this.router.navigate(['/dashboard/posts']);
    }
  }
}
