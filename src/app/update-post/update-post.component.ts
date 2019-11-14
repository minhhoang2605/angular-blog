import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post/state/post.model';
import { PostQuery } from '../post/state/post.query';
import { CommandInvoker } from '../command-invoker';
import { PostService } from '../post/state/post.service';
import { UpdatePost } from '../post/commands/update-post';
import { ID } from '@datorama/akita';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  post: Post;
  id: ID;

  constructor(
    private route: ActivatedRoute,
    private postQuery: PostQuery,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPost();
  }

  private getPost(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postQuery.getPost(this.id).subscribe(response =>
      this.post = response);
  }

  onSubmit() {
    let newPost = new Post('', '');
    let element = document.getElementById('form-item-title');
    newPost.title = (element as HTMLInputElement).value;
    element = document.getElementById('form-item-content');
    newPost.content = (element as HTMLInputElement).value;
    if (newPost.title == null || newPost.content == null) {
      alert('Invalid Input');
    } else {
      const invoker = new CommandInvoker();
      invoker.setCommand(new UpdatePost(this.postService, this.id, newPost));
      invoker.doThing();
    }

    this.router.navigate([`/dashboard/post/${this.id}`]);
  }
}
