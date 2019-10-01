import { Component, OnInit } from '@angular/core';
import { Post } from '../post/state/post.model';
import { PostService } from '../post/state/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post = new Post('', '');

  constructor(
    private postService: PostService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.post.title);
    if (this.post.title == null || this.post.content == null) {
      alert('Invalid Input');
    } else {
      this.postService.add(this.post);
      this.post = new Post('', '');
      this.router.navigate(['/dashboard/posts']);
    }
  }
}
