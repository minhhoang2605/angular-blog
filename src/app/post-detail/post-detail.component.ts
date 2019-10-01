import { Comment } from 'src/app/comment/state/comment.model';
import { CommentService } from 'src/app/comment/state/comment.service';
import { PostService } from '../post/state/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  comments: Comment[];
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getPost();
    this.getComments();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(response =>
      this.post = response);
  }

  getComments(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.commentService.getComments(id).subscribe(response =>
      this.comments = response);
  }

  // showInputField(): void {
  //   const element = document.getElementById('comment-input');
  //   element.style.display = 'block';
  //   (element as HTMLInputElement).value = '';
  // }

  async addComment(commentText: string) {
    const comment: Comment = {
      postID: this.post.id,
      id: '0',
      content: commentText
    };
    await this.commentService.add(comment);
    const element = document.getElementById('comment-input');
    (element as HTMLInputElement).value = '';
    this.getComments();
  }
}
