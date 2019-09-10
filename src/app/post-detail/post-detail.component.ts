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
    const id = this.route.snapshot.paramMap.get('id');
    this.postsService.getPost(id)
      .then(response => this.post = response.data.getPost);
  }

  getComments(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postsService.getComments(id)
      .then(response => this.comments = response.data.listComments.items);
  }

  likePost(): void {
    this.postsService.likePost(this.post.id, ++this.post.likes);
  }

  showInputField(): void {
    const element = document.getElementById('comment-input');
    element.style.display = 'block';
    (element as HTMLInputElement).value = '';
  }

  async addComment(commentText: string) {
    const comment: Comment = {
      postID: this.post.id,
      id: '0',
      content: commentText
    };
    await this.postsService.addComment(comment, ++this.post.comments);
    const element = document.getElementById('comment-input');
    element.style.display = 'none';
    (element as HTMLInputElement).value = '';
    this.getComments();
  }
}
