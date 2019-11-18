import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post/state/post.model';
import { PostQuery } from '../post/state/post.query';
import { PostService } from '../post/state/post.service';
import { ID } from '@datorama/akita';
import Utils from '../utils';

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
    const id = this.id;

    const service = this.postService;

    const postTitle = Utils.getElementValue(document, 'form-item-title');

    const postContent = Utils.getElementValue(document, 'form-item-content');

    Utils.updatePost(service, id, new Post(postTitle, postContent));

    Utils.redirectTo(this.router, "/dashboard/post/", this.id);

  }
}
