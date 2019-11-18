import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { PostService } from '../post/state/post.service';
import { Router } from '@angular/router';
import Utils from '../utils';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() { 
    this.post = new Post('', '');
  }

  onSubmit() {
    const service = this.postService;

    const postTitle = Utils.getElementValue(document, 'form-item-title');

    const postContent = Utils.getElementValue(document, 'form-item-content');

    Utils.addPost(service, new Post(postTitle, postContent));

    Utils.redirectTo(this.router, "/dashboard/posts");
  }
}
