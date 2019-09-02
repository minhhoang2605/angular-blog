import { Comment } from './../comment.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';

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
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.getPost();
    this.getComments();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.postsService.getPost(id);
  }

  getComments(): void {
    this.comments = this.postsService.getComments(this.post.postID);
  }

  likePost(): void {
    this.post.likes++;
  }

  showInputField(): void {
    let element = document.getElementById('comment-input');
    element.style.display = 'block';
    (element as HTMLInputElement).value = '';
  }

  addComment(commentText: string): void {
    let comment: Comment = {
      postID: this.post.postID,
      commentID: this.comments.length,
      content: commentText
    };
    this.postsService.addComment(comment);
    let element = document.getElementById('comment-input');
    element.style.display = 'none';
    (element as HTMLInputElement).value = '';
    this.getComments();
  }
}
