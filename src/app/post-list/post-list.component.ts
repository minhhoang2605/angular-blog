import { PostQuery } from './../post/state/post.query';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { PostService } from '../post/state/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private postQuery: PostQuery
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postQuery.getPosts().subscribe(res => {
      this.posts = res;
    });
  }
}
