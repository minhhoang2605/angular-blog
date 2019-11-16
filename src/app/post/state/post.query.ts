import { Injectable } from '@angular/core';
import { QueryEntity, ID } from '@datorama/akita';
import { PostStore, PostState } from './post.store';
import { Post } from './post.model';
import { GraphqlService } from 'src/app/graphql.service';
import { Observable } from 'rxjs';
import { listPosts, getPost } from 'src/graphql/queries';
import { onCreatePost, onDeletePost, onUpdatePost } from 'src/graphql/subscriptions';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostQuery extends QueryEntity<PostState, Post> {

  constructor(
    protected postStore: PostStore,
    private graphqlService: GraphqlService
  ) {
    super(postStore);
  }

  subcribeCreate(): void {
    this.graphqlService.getSubscription(onCreatePost).subscribe(
      response => {
        if (response !== null) {
          this.postStore.add(response.value.data.onCreatePost);
        }
      }
    );
  }

  subcribeDelete(): void {
    this.graphqlService.getSubscription(onDeletePost).subscribe(
      response => {
        if (response !== null) {
          this.postStore.remove(response.value.data.onDeletePost.id);
        }
      }
    );
  }

  subcribeUpdate(): void {
    this.graphqlService.getSubscription(onUpdatePost).subscribe(
      response => {
        if (response !== null) {          
          this.postStore.update(response.value.data.onUpdatePost.id,
            response.value.data.onUpdatePost);
        }
      }
    );
  }

  setupSubcription(): void {
    this.subcribeCreate();
    this.subcribeUpdate();
    this.subcribeDelete();
  }

  getPosts(): Observable<Array<Post>> {
    this.setupSubcription();
    this.graphqlService.query(listPosts).then(res => {
      this.postStore.add(res.data.listPosts.items);
    });
    return this.selectAll();
  }

  getPost(postID: ID): Observable<Post> {
    if (!this.hasEntity(postID)) {
      this.graphqlService.query(getPost, { id: postID }).then(res => {
        this.postStore.add(res.data.getPost);
      });
    }
    return this.selectEntity(postID);
  }
}
