import { Injectable } from '@angular/core';
import { POSTS } from './mockpostdata';
import { COMMENTS } from './mockcomments';
import { Post } from './post.model';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[];
  comments: Comment[];

  constructor() {
    this.posts = POSTS;
    this.comments = COMMENTS;
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(postID: number): Post {
    return this.posts.find(post => post.postID === postID);
  }

  getComments(postID: number): Comment[] {
    return this.comments.filter(comment => comment.postID === postID);
  }

  addPost(post: Post): void {
    post.postID = this.posts.length;
    this.posts.push(post);
  }

  addComment(comment: Comment): void {
    this.posts.find(post => post.postID === comment.postID).posts++;
    this.comments.push(comment);
  }

}
