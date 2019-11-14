import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { PostService } from '../post/state/post.service';
import { Router } from '@angular/router';
import { CommandInvoker } from '../command-invoker';
import { AddPost } from '../post/commands/add-post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post = new Post('', '');

  constructor(
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.post.title);
    if (this.post.title == null || this.post.content == null) {
      alert('Invalid Input');
    } else {
      const invoker = new CommandInvoker();
      invoker.setCommand(new AddPost(this.postService, this.post));
      invoker.doThing();

      this.post = new Post('', '');
      this.router.navigate(['/dashboard/posts']);
    }
  }
}
