import { PostQuery } from './../post/state/post.query';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { PostService } from '../post/state/post.service';
import { CommentService } from '../comment/state/comment.service';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import { RemovePost } from '../post/commands/remove-post';
import { CommandInvoker } from '../command-invoker';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private postQuery: PostQuery
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postQuery.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  deletePost(id: ID) {
    const invoker = new CommandInvoker();
    invoker.setCommand(new RemovePost(this.postService, id));
    invoker.doThing();
    invoker.setCommand(new RemovePost(this.postService, id));
    invoker.doThing();
    this.commentService.removeComments(id);
  }
}
