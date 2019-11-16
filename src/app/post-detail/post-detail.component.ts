import { CommentQuery } from './../comment/state/comment.query';
import { Comment } from 'src/app/comment/state/comment.model';
import { CommentService } from 'src/app/comment/state/comment.service';
import { PostService } from '../post/state/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostQuery } from '../post/state/post.query';
import { AddComment } from '../comment/commands/add-comment';
import { CommandInvoker } from '../command-invoker';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  comments: Comment[];
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private commentQuery: CommentQuery,
    private postQuery: PostQuery
  ) { }

  ngOnInit() {
    this.getPost();
    this.getComments();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postQuery.getPost(id).subscribe(response =>
      this.post = response);
  }

  getComments(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.commentQuery.getComments(id).subscribe(response =>
      this.comments = response);
  }

  async addComment(commentText: string) {
    const comment: Comment = {
      postID: this.post.id,
      id: '0',
      content: commentText
    };
    const invoker = new CommandInvoker();
    invoker.setCommand(new AddComment(this.commentService, comment));
    invoker.doThing();

    const element = document.getElementById('comment-input');
    (element as HTMLInputElement).value = '';
    this.getComments();
  }
}
